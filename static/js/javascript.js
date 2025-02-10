document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.header-nav');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // 丸のアニメーション
    const circles = document.querySelectorAll('.circle');
    
    circles.forEach((circle, index) => {
        animateCircle(circle, index);
    });

    // スクロールアニメーション
    const sections = document.querySelectorAll('section, .literacy-section');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});

function animateCircle(circle, index) {
    const duration = 20000 + (index * 5000);
    const delay = index * 2000;
    
    const keyframes = [
        { transform: 'translate(0, 0)' },
        { transform: 'translate(50px, 30px)' },
        { transform: 'translate(-30px, 50px)' },
        { transform: 'translate(0, 0)' }
    ];
    
    const timing = {
        duration: duration,
        iterations: Infinity,
        delay: delay,
        easing: 'ease-in-out'
    };
    
    circle.animate(keyframes, timing);
}

// パララックス効果
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const circles = document.querySelectorAll('.circle');
    
    circles.forEach((circle, index) => {
        const speed = 0.2 + (index * 0.1);
        const yPos = -(scrolled * speed);
        circle.style.transform = `translateY(${yPos}px)`;
    });
});