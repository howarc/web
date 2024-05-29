function checkZoom() {
    const scale = window.devicePixelRatio;
    return scale.toFixed(2);
}

window.addEventListener('resize', () => {
    const zoomLevel = checkZoom();
    console.log("Zoom level: ", zoomLevel);

    const menuItems = document.getElementById('menuItems');
    if (zoomLevel > 1.85) {
        menuItems.style.display = 'block';
    } else {
        menuItems.style.display = 'flex';
    }
});

function adjustOverflowBasedOnZoom() {
    const zoomLevel = checkZoom();
    var aboutSection = document.querySelector('.about-section');
    var projectsSection = document.querySelector('.projects-section');
    var contactSection = document.querySelector('.contact-section');

    if (zoomLevel > 1.85) { 
        aboutSection.style.overflow = 'auto';
        projectsSection.style.overflow ='auto';
        contactSection.style.overflow = 'auto';
    } else {
        aboutSection.style.overflow = 'hidden';
        projectsSection.style.overflow ='hidden';
        contactSection.style.overflow = 'hidden';
    }
}

window.addEventListener('resize', adjustOverflowBasedOnZoom);
window.onload = adjustOverflowBasedOnZoom;
