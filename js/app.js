/* =========================================
   APP.JS - GSAP Animation Logic
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    
    // Register GSAP Plugins
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // DOM Elements
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    const links = document.querySelectorAll('a, button, .timeline-item');

    /* =========================================
       1. CUSTOM CURSOR
       ========================================= */
    function initCursor() {
        if (window.matchMedia("(pointer: fine)").matches) {
            
            // Move cursor
            document.addEventListener('mousemove', (e) => {
                gsap.to(cursor, {
                    x: e.clientX,
                    y: e.clientY,
                    duration: 0.1,
                    ease: 'power2.out'
                });
                
                gsap.to(follower, {
                    x: e.clientX,
                    y: e.clientY,
                    duration: 0.5,
                    ease: 'power2.out'
                });
            });

            // Hover effects
            links.forEach(link => {
                link.addEventListener('mouseenter', () => {
                    cursor.classList.add('active');
                    follower.classList.add('active');
                    gsap.to(follower, { scale: 1.5, borderColor: 'transparent', backgroundColor: 'rgba(255,255,255,0.1)' });
                });

                link.addEventListener('mouseleave', () => {
                    cursor.classList.remove('active');
                    follower.classList.remove('active');
                    gsap.to(follower, { scale: 1, borderColor: 'rgba(255,255,255,0.5)', backgroundColor: 'transparent' });
                });
            });
        }
    }
    initCursor();

    /* =========================================
       2. PRELOADER SEQUENCE
       ========================================= */
    function runLoader() {
        const tl = gsap.timeline({
            onComplete: () => {
                document.body.classList.remove('loading');
                initScrollAnimations();
            }
        });

        tl.to('.loader-progress', {
            width: '100%',
            duration: 1.5,
            ease: 'power4.inOut'
        })
        .to('.loader', {
            yPercent: -100,
            duration: 1,
            ease: 'power4.inOut'
        })
        .from('.hero-title .reveal-text', {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: 'power3.out'
        }, "-=0.5")
        .from('.reveal-text-delay', {
            y: 20,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: 'power3.out'
        }, "-=0.5");
    }

    /* =========================================
       3. SCROLL ANIMATIONS
       ========================================= */
    function initScrollAnimations() {
        
        // About Section Image Reveal
        gsap.from('.about-image-wrapper', {
            scrollTrigger: {
                trigger: '#about',
                start: 'top 70%',
            },
            y: 50,
            opacity: 0,
            duration: 1.5,
            ease: 'power3.out'
        });

        // About Text Reveal
        gsap.from('.about-content p', {
            scrollTrigger: {
                trigger: '.about-content',
                start: 'top 80%',
            },
            y: 30,
            opacity: 0,
            stagger: 0.1,
            duration: 1,
            ease: 'power3.out'
        });

        // Stat Numbers Counter
        gsap.utils.toArray('.stat-number').forEach(stat => {
            gsap.from(stat, {
                scrollTrigger: {
                    trigger: stat,
                    start: 'top 85%',
                },
                opacity: 0,
                y: 20,
                duration: 1,
                ease: 'power3.out'
            });
        });

        // Skill Bars
        gsap.utils.toArray('.progress-fill').forEach(bar => {
            gsap.to(bar, {
                scrollTrigger: {
                    trigger: bar,
                    start: 'top 90%',
                },
                scaleX: 1,
                duration: 1.5,
                ease: 'power3.out'
            });
        });

        // Timeline Items
        gsap.utils.toArray('.timeline-item').forEach(item => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%',
                },
                x: -50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            });
        });

        // Portfolio Cards Stagger
        gsap.from('.project-card', {
            scrollTrigger: {
                trigger: '.portfolio-grid',
                start: 'top 75%',
            },
            y: 50,
            opacity: 0,
            stagger: 0.2,
            duration: 1,
            ease: 'power3.out'
        });
    }

    /* =========================================
       4. SMOOTH SCROLL NAVIGATION
       ========================================= */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: { y: target, offsetY: 0 },
                    ease: 'power3.inOut'
                });
            }
        });
    });

    // Start everything
    runLoader();

});
