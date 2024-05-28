function checkZoom() {
    const scale = window.outerWidth / window.innerWidth;
    return scale.toFixed(2);
}

window.addEventListener('resize', () => {
    const zoomLevel = checkZoom();
    console.log("Zoom level: ", zoomLevel);

    const menuItems = document.getElementById('menuItems');
    if (zoomLevel > 1.7) {
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

    if (zoomLevel > 1.7) { 
        aboutSection.style.overflow = 'auto';
        projectsSection.style.overflow ='auto';
        contactSection.style.overflow = 'auto';
    } else {
        aboutSection.style.overflow = 'hidden';
        projectsSection.style.overflow ='hidden';
        contactSectionSection.Style.overflow = 'hidden';
    }
}

window.addEventListener('resize', adjustOverflowBasedOnZoom);
window.onload = adjustOverflowBasedOnZoom;

document.getElementById("menuButton").addEventListener("click", function() {
    var items = document.getElementById("menuItems");
    if (items.style.display === "block") {
        items.style.display = "none";
        items.style.opacity = 0;
    } else {
        items.style.display = "block";
        setTimeout(function() {
            items.style.opacity = 1;
        }, 10); // Enable transition
    }
});

