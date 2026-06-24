// --- Google Auth Callback ---
function handleCredentialResponse(response) {
    const responsePayload = decodeJwtResponse(response.credential);

    const loginWrapper = document.getElementById('google-btn-wrapper');
    const userProfile = document.getElementById('user-profile');
    const userAvatar = document.getElementById('user-avatar');

    loginWrapper.classList.add('hidden');
    userProfile.classList.remove('hidden');
    
    userAvatar.src = responsePayload.picture;

    // Handle index.html CTA update if it exists
    const downloadPrompt = document.getElementById('download-prompt');
    if (downloadPrompt) {
        downloadPrompt.textContent = `Welcome, ${responsePayload.given_name}! Access the Pro Portal to download the Jarvis APK.`;
        // If we are on the homepage, automatically redirect to portal after 1.5 seconds for a cool UX
        setTimeout(() => {
            window.location.href = 'portal.html';
        }, 1500);
    }
}

function decodeJwtResponse(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Initial Load Animations ---
    const hiddenElements = document.querySelectorAll('.hidden-onload');
    setTimeout(() => {
        hiddenElements.forEach(el => el.classList.add('show-onload'));
    }, 100);

    // --- Logout Handling ---
    document.getElementById('logout-btn').addEventListener('click', () => {
        const loginWrapper = document.getElementById('google-btn-wrapper');
        const userProfile = document.getElementById('user-profile');
        const downloadPrompt = document.getElementById('download-prompt');
        
        loginWrapper.classList.remove('hidden');
        userProfile.classList.add('hidden');
        downloadPrompt.textContent = 'Join the revolution and install Jarvis on your Android device today.';
        
        google.accounts.id.disableAutoSelect();
    });

    // --- 2. Custom Cursor Glow ---
    const cursorGlow = document.querySelector('.cursor-glow');
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;
        cursorGlow.style.transform = `translate(${currentX}px, ${currentY}px)`;
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // --- 3. Scroll Reveal ---
    const revealElements = document.querySelectorAll('.scroll-reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

    revealElements.forEach(el => revealObserver.observe(el));

    // --- 4. 3D Tilt Effect ---
    const cards = document.querySelectorAll('.tilt-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        });
    });

    // --- 5. Infinite Gallery Clone ---
    const galleryTrack = document.querySelector('.gallery-track');
    const galleryImages = galleryTrack.innerHTML;
    galleryTrack.innerHTML += galleryImages;

    // --- 6. FAQ Accordion Logic ---
    const faqItems = document.querySelectorAll('.faq-question');
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const parent = item.parentElement;
            const isActive = parent.classList.contains('active');
            
            // Close all
            document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));
            
            // Open clicked
            if (!isActive) {
                parent.classList.add('active');
            }
        });
    });

    // --- 7. Three.js Background ---
    initThreeJSBackground();
});

function initThreeJSBackground() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 300;

    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    const particleCount = 200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const velocities = [];

    const range = 600;
    
    // Brand Colors: Cyan & Orange
    const colorCyan = new THREE.Color(0x00d4ff);
    const colorOrange = new THREE.Color(0xff6b35);

    for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * range;
        positions[i * 3 + 1] = (Math.random() - 0.5) * range;
        positions[i * 3 + 2] = (Math.random() - 0.5) * range;

        // Make ~10% of particles orange, the rest cyan
        if (Math.random() > 0.9) {
            colors[i * 3] = colorOrange.r;
            colors[i * 3 + 1] = colorOrange.g;
            colors[i * 3 + 2] = colorOrange.b;
        } else {
            colors[i * 3] = colorCyan.r;
            colors[i * 3 + 1] = colorCyan.g;
            colors[i * 3 + 2] = colorCyan.b;
        }

        velocities.push({
            x: (Math.random() - 0.5) * 0.5,
            y: (Math.random() - 0.5) * 0.5,
            z: (Math.random() - 0.5) * 0.5
        });
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const pMaterial = new THREE.PointsMaterial({
        size: 3,
        transparent: true,
        opacity: 0.8,
        vertexColors: true,
        blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(geometry, pMaterial);
    scene.add(particles);

    const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x00d4ff,
        transparent: true,
        opacity: 0.1,
        blending: THREE.AdditiveBlending
    });

    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(particleCount * particleCount * 3);
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    
    const linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(linesMesh);

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX - windowHalfX) * 0.5;
        mouseY = (event.clientY - windowHalfY) * 0.5;
    });

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    function animate() {
        requestAnimationFrame(animate);

        targetX = mouseX * 0.5;
        targetY = mouseY * 0.5;

        camera.position.x += (targetX - camera.position.x) * 0.05;
        camera.position.y += (-targetY - camera.position.y) * 0.05;
        camera.lookAt(scene.position);

        const positions = particles.geometry.attributes.position.array;
        
        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] += velocities[i].x;
            positions[i * 3 + 1] += velocities[i].y;
            positions[i * 3 + 2] += velocities[i].z;

            if (Math.abs(positions[i * 3]) > range/2) velocities[i].x *= -1;
            if (Math.abs(positions[i * 3 + 1]) > range/2) velocities[i].y *= -1;
            if (Math.abs(positions[i * 3 + 2]) > range/2) velocities[i].z *= -1;
        }
        particles.geometry.attributes.position.needsUpdate = true;

        let vertexIndex = 0;
        let linePositionsArray = linesMesh.geometry.attributes.position.array;
        let connectDistance = 80;

        for (let i = 0; i < particleCount; i++) {
            for (let j = i + 1; j < particleCount; j++) {
                let dx = positions[i * 3] - positions[j * 3];
                let dy = positions[i * 3 + 1] - positions[j * 3 + 1];
                let dz = positions[i * 3 + 2] - positions[j * 3 + 2];
                let dist = Math.sqrt(dx*dx + dy*dy + dz*dz);

                if (dist < connectDistance) {
                    linePositionsArray[vertexIndex++] = positions[i * 3];
                    linePositionsArray[vertexIndex++] = positions[i * 3 + 1];
                    linePositionsArray[vertexIndex++] = positions[i * 3 + 2];
                    
                    linePositionsArray[vertexIndex++] = positions[j * 3];
                    linePositionsArray[vertexIndex++] = positions[j * 3 + 1];
                    linePositionsArray[vertexIndex++] = positions[j * 3 + 2];
                }
            }
        }
        
        linesMesh.geometry.setDrawRange(0, vertexIndex / 3);
        linesMesh.geometry.attributes.position.needsUpdate = true;

        renderer.render(scene, camera);
    }

    animate();
}
