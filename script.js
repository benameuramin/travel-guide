document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    const heroImage = document.querySelector('.hero-image');

    // Parallax effect on scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        
        if (scrolled < hero.offsetHeight) {
            heroImage.style.transform = `translate3d(0px, ${rate}px, 0px)`;
        }
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.stat-card, .feature-card, .impact-item').forEach(el => {
        observer.observe(el);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Function to open the chatbot
function openChatbot() {
    // Open the chatbot using the existing configuration
    const chatbotId = window.chtlConfig.chatbotId;
    const script = document.createElement('script');
    script.src = `https://chatling.ai/js/embed.js?id=${chatbotId}`;
    script.async = true;
    document.body.appendChild(script);
}
