// Show Lightbox
function showLightbox(id) {
    const lightbox = document.getElementById(id);
    lightbox.style.display = 'block';
    lightbox.style.opacity = 0;
    let opacity = 0;
    const fadeIn = setInterval(() => {
        if (opacity < 1) {
            opacity += 0.1;
            lightbox.style.opacity = opacity;
        } else {
            clearInterval(fadeIn);
        }
    }, 50);
}

// Close Lightbox
function closeLightbox(id) {
    const lightbox = document.getElementById(id);
    let opacity = 1;
    const fadeOut = setInterval(() => {
        if (opacity > 0) {
            opacity -= 0.1;
            lightbox.style.opacity = opacity;
        } else {
            lightbox.style.display = 'none';
            clearInterval(fadeOut);
        }
    }, 50);
}

// Simulate Threat Detection
function simulateThreat() {
    const status = document.getElementById('response-status');
    status.innerText = 'Detecting threat...';
    status.style.color = '#e67e22';
    
    setTimeout(() => {
        status.innerText = 'Threat detected!';
        status.style.color = 'red';
    }, 2000);
    
    setTimeout(() => {
        status.innerText = 'Neutralizing threat...';
        status.style.color = 'orange';
    }, 4000);
    
    setTimeout(() => {
        status.innerText = 'Threat neutralized. System secured.';
        status.style.color = 'green';
    }, 6000);
}

// Button Hover Effects
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'scale(1.05)';
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'scale(1)';
    });
});
