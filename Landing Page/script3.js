// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll-to-Top Button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.textContent = '↑';
scrollTopBtn.classList.add('scroll-to-top');
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.style.opacity = '1';
    } else {
        scrollTopBtn.style.opacity = '0';
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Animation on Scroll
const elements = document.querySelectorAll('.animate-on-scroll');

const checkVisibility = () => {
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < windowHeight && rect.bottom > 0) {
            el.classList.add('visible');
        } else {
            el.classList.remove('visible');
        }
    });
};

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

// Optional: Add more complex animations if desired
