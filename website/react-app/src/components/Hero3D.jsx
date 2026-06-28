import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import * as THREE from 'three';

const IronManModel = ({ scrollYProgress }) => {
  const groupRef = useRef();

  // Load the OBJ model
  const obj = useLoader(OBJLoader, '/iron-man/source/Octane/Octane.obj');

  // Load textures
  const textures = useTexture({
    map: '/iron-man/textures/Octane_default_BaseColor.1001.png',
    normalMap: '/iron-man/textures/Octane_default_Normal.1001.png',
    roughnessMap: '/iron-man/textures/Octane_default_Roughness.1001.png',
    metalnessMap: '/iron-man/textures/Octane_default_Metallic.1001.png',
    emissiveMap: '/iron-man/textures/Octane_default_Emissive.1001.png',
  });

  // Apply textures to the loaded OBJ
  const geom = useMemo(() => {
    let geometry = null;
    obj.traverse((child) => {
      if (child.isMesh && !geometry) {
        geometry = child.geometry;
      }
    });
    return geometry;
  }, [obj]);

  useFrame(() => {
    if (groupRef.current) {
      const scroll = scrollYProgress.get();
      
      // Interpolate poses based on scroll position (0 to 1)
      if (scroll < 0.3) {
        // Hero: Centered, full body visible
        const progress = scroll / 0.3;
        groupRef.current.position.x = THREE.MathUtils.lerp(0, -0.5, progress);
        groupRef.current.position.y = THREE.MathUtils.lerp(-1, -1, progress);
        groupRef.current.rotation.y = THREE.MathUtils.lerp(0, Math.PI / 6, progress);
        groupRef.current.scale.setScalar(0.0015);
      } else if (scroll < 0.6) {
        // Features: Panned left
        const progress = (scroll - 0.3) / 0.3;
        groupRef.current.position.x = THREE.MathUtils.lerp(-0.5, 1.5, progress);
        groupRef.current.position.y = THREE.MathUtils.lerp(-1, -0.5, progress);
        groupRef.current.rotation.y = THREE.MathUtils.lerp(Math.PI / 6, -Math.PI / 6, progress);
        groupRef.current.scale.setScalar(0.0015);
      } else if (scroll < 0.9) {
        // Gallery: Panned right, zoomed into upper body
        const progress = (scroll - 0.6) / 0.3;
        groupRef.current.position.x = THREE.MathUtils.lerp(1.5, 0, progress);
        groupRef.current.position.y = THREE.MathUtils.lerp(-0.5, -2, progress);
        groupRef.current.rotation.y = THREE.MathUtils.lerp(-Math.PI / 6, Math.PI * 2, progress);
        groupRef.current.scale.setScalar(THREE.MathUtils.lerp(0.0015, 0.0025, progress));
      } else {
        // Download: Center, rotate
        const progress = (scroll - 0.9) / 0.1;
        groupRef.current.position.x = THREE.MathUtils.lerp(0, 0, progress);
        groupRef.current.position.y = THREE.MathUtils.lerp(-2, -1, progress);
        groupRef.current.rotation.y = THREE.MathUtils.lerp(Math.PI * 2, Math.PI * 2.5, progress);
        groupRef.current.scale.setScalar(THREE.MathUtils.lerp(0.0025, 0.0015, progress));
      }
    }
  });

  if (!geom) return null;

  return (
    <group ref={groupRef} position={[0, -1, 0]} scale={0.0015}>
      <mesh geometry={geom}>
        <meshStandardMaterial
          map={textures.map}
          normalMap={textures.normalMap}
          roughnessMap={textures.roughnessMap}
          metalnessMap={textures.metalnessMap}
          emissiveMap={textures.emissiveMap}
          emissiveIntensity={2}
          color="#ffffff"
        />
      </mesh>
    </group>
  );
};

const Hero3D = ({ scrollYProgress }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen pointer-events-none -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,212,255,0.15)_0%,transparent_70%)] rounded-full blur-3xl mix-blend-screen" />
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} intensity={2} color="#00d4ff" />
        <directionalLight position={[-10, -10, -10]} intensity={1.5} color="#ff6b35" />
        
        <React.Suspense fallback={null}>
          <IronManModel scrollYProgress={scrollYProgress} />
        </React.Suspense>
      </Canvas>
    </div>
  );
};

export default Hero3D;
