/* =========================================
   APP.JS - GSAP Animation Logic & Responsive Menu
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {

    // Prevent browser scroll restoration on reload
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

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
                window.scrollTo(0, 0);
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
            const targetRaw = el.getAttribute('data-counter');
            const target = parseInt(targetRaw.replace(/[^0-9]/g, ''), 10);
            const prefix = el.getAttribute('data-counter-prefix') || '';
            const suffix = el.getAttribute('data-counter-suffix') || '';
            const hasPlus = targetRaw.includes('+');

            const formatValue = (val) => {
                if (target >= 1000000) {
                    return prefix + Math.floor(val / 1000000) + 'M' + suffix;
                }
                if (target >= 1000) {
                    return prefix + Math.floor(val / 1000) + 'K' + suffix;
                }
                return prefix + Math.floor(val) + suffix;
            };

            const finalText = prefix + targetRaw + suffix;

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
                                const suffixChar = hasPlus ? '+' : '';
                                el.textContent = prefix + Math.floor(current) + suffixChar + suffix;
                            },
                            onComplete: function() {
                                el.textContent = finalText;
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

        // Availability Section
        const avSection = document.querySelector('#availability');
        if (avSection) {
            gsap.from('.status-card', {
                scrollTrigger: {
                    trigger: '#availability',
                    start: 'top 80%',
                },
                y: 20,
                opacity: 0,
                stagger: 0.08,
                duration: 0.7,
                ease: 'power3.out'
            });
            gsap.from('.cta-block', {
                scrollTrigger: {
                    trigger: '#availability',
                    start: 'top 75%',
                },
                y: 20,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out'
            });
        }

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

        // Skills Tabs Logic
        const tabBtns = document.querySelectorAll('.skills-tab-btn');
        const tabContents = document.querySelectorAll('.skills-tab-content');

        if (tabBtns.length > 0) {
            tabBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Remove active from all
                    tabBtns.forEach(b => b.classList.remove('active'));
                    tabContents.forEach(c => c.classList.remove('active'));

                    // Add active to clicked
                    btn.classList.add('active');
                    const tabId = btn.getAttribute('data-tab');
                    const targetContent = document.getElementById(`tab-${tabId}`);
                    if (targetContent) {
                        targetContent.classList.add('active');
                        
                        // Small GSAP animation for content
                        gsap.fromTo(targetContent, 
                            { opacity: 0, y: 10 }, 
                            { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
                        );
                    }
                });
            });
        }

        // Tech Tags - animate each grid independently
        document.querySelectorAll('.tech-tag-grid').forEach(grid => {
            gsap.from(grid.querySelectorAll('.tech-tag'), {
                scrollTrigger: {
                    trigger: grid,
                    start: 'top 85%',
                },
                y: 10,
                opacity: 0,
                stagger: 0.03,
                duration: 0.5,
                ease: 'power3.out'
            });
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

        // Recommendations
        const recSection = document.querySelector('#recommendations');
        if (recSection) {
            gsap.from('.rec-card', {
                scrollTrigger: {
                    trigger: '#recommendations',
                    start: 'top 80%',
                },
                y: 20,
                opacity: 0,
                stagger: 0.12,
                duration: 0.7,
                ease: 'power3.out'
            });
        }

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
       5. CASE STUDY MODAL
       ========================================= */
    const PROJECT_DATA = {
        ouze: {
            title: 'Ouze Financial Ecosystem',
            subtitle: 'Super App & Architectural Reconstruction',
            role: 'Systems Coordinator',
            period: '2021 \u2014 Present',
            problem: 'The legacy credit system processed transactions with limited scalability and availability. The monolithic architecture could not support the growing retail and digital financial services demands of Grupo Studio Z.',
            solution: 'Led the decomposition of the monolithic credit engine into service-oriented architecture, prioritizing the credit approval pipeline. Orchestrated cross-functional squads to deliver the Studio Z / Ouze Super App, blending retail loyalty with digital financial services.',
            stack: ['Python', 'Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'Docker', 'CI/CD', 'Microservices'],
            metrics: [
                { value: 'R$ 200M+', label: 'Monthly Transaction Volume' },
                { value: '99.9%', label: 'System Uptime After Migration' },
                { value: '12+', label: 'Engineers Led' },
                { value: '2M+', label: 'Customers Impacted' }
            ]
        },
        calcard: {
            title: 'Calcard / Ouze Visa Modernization',
            subtitle: 'Core Credit System Transformation',
            role: 'Consultant',
            period: '2019 \u2014 2021',
            problem: 'The existing credit issuance infrastructure was outdated and unable to support the strategic partnership with Visa. Operations were managed through legacy monolithic flows with limited flexibility for new financial products.',
            solution: 'Modernized credit issuance pipelines aligned with the Visa partnership, shifting business operations from legacy monolithic models to an agile, app-centric management flow that enabled rapid product iteration.',
            stack: ['Java', 'Spring Framework', 'Credit Systems', 'REST APIs', 'Agile', 'Visa Integration'],
            metrics: [
                { value: '40%+', label: 'Credit Approval Latency Reduction' },
                { value: '3+', label: 'Major Product Launches Enabled' }
            ]
        },
        hmm: {
            title: 'Heavy Metal Machines',
            subtitle: 'Global Launch QA Engineering',
            role: 'Quality Analyst',
            period: '2017 \u2014 2019',
            problem: 'The global launch on Steam and consoles required rigorous backend stability and real-time synchronization under high-concurrency MOBA traffic patterns, with zero tolerance for critical regressions.',
            solution: 'Designed and executed comprehensive load testing strategies for real-time backend synchronization. Developed modular automated test suites for custom game engine components and network APIs, reducing release regressions.',
            stack: ['QA Engineering', 'Load Testing', 'Automation', 'Steam', 'Console', 'Real-time Systems'],
            metrics: [
                { value: '0', label: 'Critical Regressions on Launch Day' },
                { value: '10K+', label: 'Concurrent Players Supported' }
            ]
        },
        taikodom: {
            title: 'Taikodom MMO',
            subtitle: 'Space MMO Backend & QA',
            role: 'Test Analyst',
            period: '2012 \u2014 2015',
            problem: 'As a national space MMO, Taikodom required validated real-time state synchronization and backend message queuing stability to support thousands of concurrent players across distributed servers.',
            solution: 'Validated real-time state synchronization and backend message queuing stability through systematic performance testing and stress test protocols. Coordinated integration testing with detailed functional matrices.',
            stack: ['Backend Testing', 'Performance Testing', 'Message Queuing', 'Network Protocols', 'QA'],
            metrics: [
                { value: '5K+', label: 'Concurrent Users Validated' },
                { value: '99%', label: 'Uptime During Peak Hours' }
            ]
        },
        esus: {
            title: 'e-SUS APS Ecosystem',
            subtitle: 'National Health Records Architecture',
            role: 'Java Developer',
            period: '2015 \u2014 2017',
            problem: 'Building a national electronic health record system for 5,000+ Brazilian municipalities required an architecture that could handle massive scale, data integrity, and interoperability across heterogeneous healthcare environments.',
            solution: 'Developed core backend services for the "Prontuário Eletrônico do Cidadão" using the Spring Framework ecosystem, Hibernate, and optimized SQL schemas to ensure query efficiency and data integrity across the national deployment.',
            stack: ['Java', 'Spring Framework', 'Hibernate', 'PostgreSQL', 'REST APIs', 'Ministry of Health'],
            metrics: [
                { value: '5,000+', label: 'Brazilian Municipalities' },
                { value: '100M+', label: 'Health Records Managed' }
            ]
        },
        sismob: {
            title: 'SISMOB Platform',
            subtitle: 'Infrastructure Monitoring & Audit',
            role: 'Java Developer',
            period: '2015 \u2014 2017',
            problem: 'The Brazilian Ministry of Health needed a system to track federal investments in health facility infrastructure, requiring complex audit trails, monitoring modules, and integration with existing government systems.',
            solution: 'Constructed complex audit and monitoring modules for the National Health Facility Infrastructure System, ensuring transparent tracking of federal investments and compliance with government auditing standards.',
            stack: ['Java', 'Spring Framework', 'Hibernate', 'SQL', 'Audit Systems', 'Government Integration'],
            metrics: [
                { value: '5,000+', label: 'Municipalities Tracked' },
                { value: 'R$ 1B+', label: 'Federal Investments Monitored' }
            ]
        }
    };

    const modal = document.getElementById('case-modal');
    const modalBackdrop = document.querySelector('.case-modal-backdrop');
    const modalClose = document.querySelector('.modal-close');

    function openModal(projectId) {
        const data = PROJECT_DATA[projectId];
        if (!data) return;

        document.getElementById('modal-title').textContent = data.title;
        document.getElementById('modal-role').textContent = data.subtitle;
        document.getElementById('modal-period').textContent = data.period;
        document.getElementById('modal-myrole').textContent = data.role;
        document.getElementById('modal-problem').textContent = data.problem;
        document.getElementById('modal-solution').textContent = data.solution;

        const stackContainer = document.getElementById('modal-stack');
        stackContainer.innerHTML = '';
        data.stack.forEach(tech => {
            const tag = document.createElement('span');
            tag.className = 'project-tag';
            tag.style.cssText = 'font-size: 10px;';
            tag.textContent = tech;
            stackContainer.appendChild(tag);
        });

        const metricsContainer = document.getElementById('modal-metrics');
        metricsContainer.innerHTML = '';
        data.metrics.forEach(m => {
            const card = document.createElement('div');
            card.className = 'metric-card';
            card.innerHTML = '<span class="value">' + m.value + '</span><span class="label">' + m.label + '</span>';
            metricsContainer.appendChild(card);
        });

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (modalBackdrop) {
        modalBackdrop.addEventListener('click', closeModal);
    }
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            closeModal();
        }
    });

    document.querySelectorAll('[data-project]').forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.closest('a')) return;
            const projectId = this.getAttribute('data-project');
            if (projectId) openModal(projectId);
        });
    });

    document.querySelectorAll('.project-card a.btn-secondary').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('[data-project]');
            if (card) openModal(card.getAttribute('data-project'));
        });
    });

    /* =========================================
       6. SMOOTH SCROLL NAVIGATION
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
       7. GSAP ANIMATION CLEANUP (Memory Leak Prevention)
       ========================================= */
    window.addEventListener('beforeunload', () => {
        ScrollTrigger.getAll().forEach(t => t.kill());
    });

    // Start execution
    runLoader();

});
