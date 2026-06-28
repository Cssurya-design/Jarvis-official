import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Save, LogOut, Edit3, Image as ImageIcon, Upload } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabase';

const Dashboard = () => {
  const { user, loading, updateProfile, logout } = useAuth();
  const navigate = useNavigate();
  
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [avatarFile, setAvatarFile] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState('');

  // Redirect if not logged in
  useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user) {
      setName(user.user_metadata?.name || user.user_metadata?.full_name || '');
      setAvatarUrl(user.user_metadata?.avatar_url || user.user_metadata?.picture || '');
    }
  }, [user]);

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center relative z-10">
        <div className="w-10 h-10 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const handleSave = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setMessage('');
    try {
      let finalAvatarUrl = avatarUrl;
      
      if (avatarFile) {
        // Upload the file to supabase storage
        const fileExt = avatarFile.name.split('.').pop();
        const fileName = `${user.id}-${Math.random()}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('avatars')
          .upload(filePath, avatarFile, { upsert: true });

        if (uploadError) {
          throw uploadError;
        }

        // Get public URL
        const { data } = supabase.storage
          .from('avatars')
          .getPublicUrl(filePath);

        finalAvatarUrl = data.publicUrl;
      }

      await updateProfile({
        name: name,
        avatar_url: finalAvatarUrl
      });
      setMessage('Profile updated successfully!');
      setIsEditing(false);
      setAvatarFile(null);
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setIsSaving(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  const displayAvatar = user.user_metadata?.avatar_url || user.user_metadata?.picture || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.email)}&background=0D8ABC&color=fff`;

  return (
    <div className="min-h-screen py-32 px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">User Dashboard</h1>
          <p className="text-lg text-text-secondary">Manage your J.A.R.V.I.S profile</p>
        </div>

        <div className="bg-card-bg/50 glass-panel border border-card-border p-8 md:p-12 rounded-3xl neumorphic-shadow relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row gap-10 items-start relative z-10">
            {/* Avatar Section */}
            <div className="flex flex-col items-center gap-6 w-full md:w-1/3">
              <div className="relative group">
                <img 
                  src={displayAvatar} 
                  alt="Profile" 
                  className="w-40 h-40 rounded-full border-4 border-accent/30 object-cover shadow-[0_0_20px_rgba(0,212,255,0.2)]" 
                />
              </div>
              
              {!isEditing ? (
                <button 
                  onClick={() => setIsEditing(true)}
                  className="btn-primary py-2 px-6 rounded-xl flex items-center gap-2 w-full justify-center"
                >
                  <Edit3 size={18} /> Edit Profile
                </button>
              ) : (
                <button 
                  onClick={() => {
                    setIsEditing(false);
                    setName(user.user_metadata?.name || user.user_metadata?.full_name || '');
                    setAvatarUrl(user.user_metadata?.avatar_url || user.user_metadata?.picture || '');
                    setAvatarFile(null);
                    setMessage('');
                  }}
                  className="bg-red-500/10 border border-red-500/30 text-red-400 py-2 px-6 rounded-xl hover:bg-red-500/20 transition-colors w-full"
                >
                  Cancel
                </button>
              )}

              <button 
                onClick={handleLogout}
                className="bg-white/5 border border-white/10 text-white py-2 px-6 rounded-xl hover:border-accent hover:text-accent transition-colors flex items-center justify-center gap-2 w-full mt-auto"
              >
                <LogOut size={18} /> Sign Out
              </button>
            </div>

            {/* Details Section */}
            <div className="flex-1 w-full">
              {message && (
                <div className={`p-4 rounded-xl mb-6 ${message.startsWith('Error') ? 'bg-red-500/10 border border-red-500/30 text-red-400' : 'bg-green-500/10 border border-green-500/30 text-green-400'}`}>
                  {message}
                </div>
              )}

              {!isEditing ? (
                <div className="space-y-8">
                  <div>
                    <label className="text-text-secondary text-sm font-semibold uppercase tracking-wider mb-2 block">Full Name</label>
                    <div className="bg-[#0a0e17]/50 border border-card-border rounded-xl p-4 text-white text-lg font-medium flex items-center gap-3">
                      <User size={20} className="text-accent" />
                      {user.user_metadata?.name || user.user_metadata?.full_name || 'Not provided'}
                    </div>
                  </div>

                  <div>
                    <label className="text-text-secondary text-sm font-semibold uppercase tracking-wider mb-2 block">Email Address</label>
                    <div className="bg-[#0a0e17]/50 border border-card-border rounded-xl p-4 text-white text-lg font-medium flex items-center gap-3">
                      <Mail size={20} className="text-accent" />
                      {user.email}
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSave} className="space-y-6">
                  <div>
                    <label className="text-text-secondary text-sm font-semibold uppercase tracking-wider mb-2 block">Full Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-accent/50" />
                      </div>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your full name"
                        className="w-full bg-[#0a0e17]/50 border border-card-border rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-text-secondary text-sm font-semibold uppercase tracking-wider mb-2 block">Upload Profile Picture</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Upload className="h-5 w-5 text-accent/50" />
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setAvatarFile(e.target.files[0])}
                        className="w-full bg-[#0a0e17]/50 border border-card-border rounded-xl py-3 pl-12 pr-4 text-white file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-accent/20 file:text-accent hover:file:bg-accent/30 focus:outline-none transition-colors"
                      />
                    </div>
                    <p className="text-xs text-text-secondary mt-2">Select a photo from your device to upload.</p>
                  </div>

                  <button
                    type="submit"
                    disabled={isSaving}
                    className="btn-primary w-full py-3 rounded-xl flex items-center justify-center gap-2 mt-4"
                  >
                    <Save size={18} />
                    {isSaving ? 'Saving Changes...' : 'Save Changes'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
