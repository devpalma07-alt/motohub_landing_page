document.addEventListener('DOMContentLoaded', function() {
    
    // Get Started Button
    const getStartedBtn = document.getElementById('getStartedBtn');
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('🏍️ Welcome to MOTOHUB!\n\nGet started by:\n\n1. Creating your free account\n2. Setting your location\n3. Browsing thousands of motorcycle parts\n4. Chatting with sellers\n5. Making secure purchases\n\nJoin the MOTOHUB community today!');
        });
    }
    
    // Learn More Button
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const aboutSection = document.querySelector('.about-section');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    // CTA Button
    const ctaBtn = document.getElementById('ctaBtn');
    if (ctaBtn) {
        ctaBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('📱 MOTOHUB App\n\nAvailable soon on:\n• Apple App Store\n• Google Play Store\n\n✨ Try our web demo version now! ✨');
        });
    }
    
    // Fade-in animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    const animatedElements = document.querySelectorAll('.preview-card, .value-card, .about-text, .about-stats');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    console.log('MOTOHUB Landing Page Loaded! 🏍️');
});