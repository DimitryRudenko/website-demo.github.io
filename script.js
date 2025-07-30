// Menu mobile toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Fermer le menu mobile en cliquant sur un lien
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const navHeader = document.querySelector('.nav-header');
    if (window.scrollY > 50) {
        navHeader.style.background = 'rgba(255, 255, 255, 0.98)';
        navHeader.style.boxShadow = '0 2px 30px rgba(0,0,0,0.15)';
    } else {
        navHeader.style.background = 'rgba(255, 255, 255, 0.95)';
        navHeader.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    }
});
