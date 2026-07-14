/* =========================================
   APP.JS - GSAP Animation Logic & Responsive Menu
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

    // Register GSAP Plugins
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    /* =========================================
       1. MOBILE MENU TOGGLE
       ========================================= */
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-item');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        navItems.forEach(item => {
            item.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    /* =========================================
       2. PRELOADER SEQUENCE
       ========================================= */
    function runLoader() {
        const tl = gsap.timeline({
            onComplete: () => {
                document.body.classList.remove('loading');
                initScrollAnimations();
                initCounters();
            }
        });

        tl.to('.loader-progress', {
            width: '100%',
            duration: 1.0,
            ease: 'power4.inOut'
        })
        .to('.loader', {
            yPercent: -100,
            duration: 0.7,
            ease: 'power4.inOut'
        })
        .from('.hero-badge', {
            y: 10,
            opacity: 0,
            duration: 0.5,
            ease: 'power3.out'
        }, '-=0.2')
        .from('.hero-name', {
            y: 10,
            opacity: 0,
            duration: 0.5,
            ease: 'power3.out'
        }, '-=0.3')
        .from('.hero-title .reveal-text', {
            y: 60,
            opacity: 0,
            duration: 0.8,
            stagger: 0.07,
            ease: 'power3.out'
        }, '-=0.2')
        .from('.reveal-text-delay', {
            y: 15,
            opacity: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: 'power3.out'
        }, '-=0.4')
        .from('.hero-metrics .hero-metric', {
            y: 10,
            opacity: 0,
            stagger: 0.06,
            duration: 0.5,
            ease: 'power3.out'
        }, '-=0.3');
    }

    /* =========================================
       3. ANIMATED COUNTERS
       ========================================= */
    function initCounters() {
        const counterEls = document.querySelectorAll('[data-counter]');

        counterEls.forEach(el => {
            const target = parseInt(el.getAttribute('data-counter'), 10);
            const prefix = el.getAttribute('data-counter-prefix') || '';
            const suffix = el.getAttribute('data-counter-suffix') || '';

            // Format numbers with K abbreviation for large values
            const formatValue = (val) => {
                if (target >= 1000) {
                    return Math.floor(val / 1000) + 'K';
                }
                return Math.floor(val);
            };

            // Start when element scrolls into view
            ScrollTrigger.create({
                trigger: el,
                start: 'top 85%',
                once: true,
                onEnter: () => {
                    gsap.fromTo(
                        el,
                        { innerText: 0 },
                        {
                            innerText: target,
                            duration: 1.6,
                            ease: 'power2.out',
                            snap: { innerText: target >= 1000 ? 100 : 1 },
                            onUpdate: function() {
                                const current = parseFloat(this.targets()[0].innerText);
                                el.textContent = prefix + formatValue(current) + suffix;
                            }
                        }
                    );
                }
            });
        });
    }

    /* =========================================
       4. SCROLL ANIMATIONS
       ========================================= */
    function initScrollAnimations() {

        // About Section
        gsap.from('.about-image-wrapper', {
            scrollTrigger: {
                trigger: '#about',
                start: 'top 75%',
            },
            y: 30,
            opacity: 0,
            duration: 1.0,
            ease: 'power3.out'
        });

        gsap.from('.about-content p, .stats-grid', {
            scrollTrigger: {
                trigger: '.about-content',
                start: 'top 80%',
            },
            y: 20,
            opacity: 0,
            stagger: 0.08,
            duration: 0.7,
            ease: 'power3.out'
        });

        // Tech Tags
        gsap.from('.tech-tag', {
            scrollTrigger: {
                trigger: '.tech-tag-grid',
                start: 'top 85%',
            },
            y: 10,
            opacity: 0,
            stagger: 0.03,
            duration: 0.5,
            ease: 'power3.out'
        });

        // Timeline Items
        gsap.utils.toArray('.timeline-item').forEach(item => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: 'top 90%',
                },
                y: 20,
                opacity: 0,
                duration: 0.7,
                ease: 'power3.out'
            });
        });

        // Portfolio Cards
        gsap.from('.project-card', {
            scrollTrigger: {
                trigger: '.portfolio-grid',
                start: 'top 80%',
            },
            y: 20,
            opacity: 0,
            stagger: 0.08,
            duration: 0.7,
            ease: 'power3.out'
        });

        // Contact
        gsap.from('.contact-text, .contact-form', {
            scrollTrigger: {
                trigger: '.contact-wrapper',
                start: 'top 80%',
            },
            y: 20,
            opacity: 0,
            stagger: 0.1,
            duration: 0.7,
            ease: 'power3.out'
        });
    }

    /* =========================================
       5. SMOOTH SCROLL NAVIGATION
       ========================================= */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                gsap.to(window, {
                    duration: 0.9,
                    scrollTo: { y: target, offsetY: 72 },
                    ease: 'power3.inOut'
                });
            }
        });
    });

    /* =========================================
       6. GSAP ANIMATION CLEANUP (Memory Leak Prevention)
       ========================================= */
    window.addEventListener('beforeunload', () => {
        ScrollTrigger.getAll().forEach(t => t.kill());
    });

    // Start execution
    runLoader();

});
