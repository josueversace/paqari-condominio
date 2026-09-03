import './style.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);
window.gsap = gsap;
window.ScrollTrigger = ScrollTrigger;

import { Preloader } from './components/Preloader.js'
import { Navbar } from './components/Navbar.js'
import { Hero } from './components/Hero.js'
import { Quote } from './components/Quote.js'
import { Amenities } from './components/Amenities.js'
import { Benefits } from './components/Benefits.js'
import { Masterplan } from './components/Masterplan.js'
import { Investment } from './components/Investment.js'
import { Testimonials } from './components/Testimonials.js'
import { Faq } from './components/Faq.js'
import { Footer } from './components/Footer.js'
import { WhatsAppBtn } from './components/WhatsAppBtn.js'
import { CookieConsent } from './components/CookieConsent.js'

document.querySelector('#app').innerHTML = `
  ${Preloader()}
  ${Navbar()}
  ${Hero()}
  ${Quote()}
  ${Amenities()}
  ${Benefits()}
  ${Masterplan()}
  ${Investment()}
  ${Testimonials()}
  ${Faq()}
  ${Footer()}
  ${WhatsAppBtn()}
  ${CookieConsent()}
`;

// Smart Transparent Header & Glass Transition
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    const currentScrollY = Math.max(0, window.scrollY); // Prevent negative scroll bounce in Safari

    // Dynamic shadow when scrolling down past Hero
    if (currentScrollY > 80) {
        navbar.classList.add('shadow-2xl', 'backdrop-blur-md');
    } else {
        navbar.classList.remove('shadow-2xl', 'backdrop-blur-md');
    }

    // Hide on scroll down, show on scroll up
    if (currentScrollY > 150) {
        if (currentScrollY > lastScrollY + 5) {
            navbar.classList.add('-translate-y-full');
        } else if (currentScrollY < lastScrollY - 5) {
            navbar.classList.remove('-translate-y-full');
        }
    } else {
        navbar.classList.remove('-translate-y-full');
    }

    lastScrollY = currentScrollY;
}, { passive: true });

// Masterplan Interactive Tabs (Tour 360 vs Plano 3D)
window.switchMasterplanTab = (tab) => {
    const view360 = document.getElementById('view-360-container');
    const viewMap = document.getElementById('view-map-container');
    const btn360 = document.getElementById('tab-btn-360');
    const btnMap = document.getElementById('tab-btn-map');

    if (!view360 || !viewMap || !btn360 || !btnMap) return;

    if (tab === '360') {
        view360.classList.remove('hidden');
        viewMap.classList.add('hidden');
        btn360.className = 'px-5 py-2.5 text-xs font-headline font-extrabold tracking-wider uppercase transition-all bg-navy text-white shadow-md flex items-center gap-2';
        btnMap.className = 'px-5 py-2.5 text-xs font-headline font-extrabold tracking-wider uppercase transition-all bg-transparent text-navy/70 hover:text-navy flex items-center gap-2';
    } else {
        view360.classList.add('hidden');
        viewMap.classList.remove('hidden');
        btnMap.className = 'px-5 py-2.5 text-xs font-headline font-extrabold tracking-wider uppercase transition-all bg-navy text-white shadow-md flex items-center gap-2';
        btn360.className = 'px-5 py-2.5 text-xs font-headline font-extrabold tracking-wider uppercase transition-all bg-transparent text-navy/70 hover:text-navy flex items-center gap-2';
    }

    if (typeof ScrollTrigger !== 'undefined') {
        setTimeout(() => ScrollTrigger.refresh(), 60);
    }
};

// Testimonials Slider Logic
const initTestimonials = () => {
    const slider = document.getElementById('testimonial-slider');
    if (!slider) return;

    const slides = Array.from(slider.children);

    // Clone twice to make 3 sets total (original in middle)
    slides.forEach(slide => {
        slider.appendChild(slide.cloneNode(true));
    });
    slides.forEach(slide => {
        slider.insertBefore(slide.cloneNode(true), slider.firstChild);
    });

    // Jump to middle set on load
    const setupInitialScroll = () => {
        const allSlides = Array.from(slider.children);
        if (allSlides.length >= 9) {
            const shiftAmount = allSlides[3].offsetLeft - allSlides[0].offsetLeft;
            slider.style.scrollBehavior = 'auto';
            slider.scrollLeft = shiftAmount; // Scroll exactly to the start of the 2nd set
            // Wait a frame before enabling smooth scrolling
            requestAnimationFrame(() => {
                void slider.offsetWidth; // force reflow
                slider.style.scrollBehavior = 'smooth';
            });
        }
    };

    setTimeout(setupInitialScroll, 100);

    // Infinite wrap logic with exact snap tracking
    let scrollTimeout;
    slider.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            const allSlides = Array.from(slider.children);
            if (allSlides.length < 9) return;

            let closestIndex = 0;
            let minDiff = Infinity;

            allSlides.forEach((slide, i) => {
                // Expected scrollLeft if this slide is snapped to center
                const targetScroll = slide.offsetLeft - (slider.clientWidth - slide.clientWidth) / 2;
                const diff = Math.abs(slider.scrollLeft - targetScroll);
                if (diff < minDiff) {
                    minDiff = diff;
                    closestIndex = i;
                }
            });

            const shiftAmount = allSlides[3].offsetLeft - allSlides[0].offsetLeft;

            if (closestIndex < 3) {
                slider.style.scrollBehavior = 'auto';
                slider.scrollLeft += shiftAmount;
                void slider.offsetWidth;
                slider.style.scrollBehavior = 'smooth';
            } else if (closestIndex >= 6) {
                slider.style.scrollBehavior = 'auto';
                slider.scrollLeft -= shiftAmount;
                void slider.offsetWidth;
                slider.style.scrollBehavior = 'smooth';
            }
        }, 150); // wait for native snap to settle
    }, { passive: true });

    // Navigation Buttons
    const btnPrev = document.getElementById('btn-prev-test');
    const btnNext = document.getElementById('btn-next-test');
    if (btnPrev) btnPrev.addEventListener('click', () => {
        slider.scrollBy({ left: -(slider.clientWidth * 0.8), behavior: 'smooth' });
    });
    if (btnNext) btnNext.addEventListener('click', () => {
        slider.scrollBy({ left: (slider.clientWidth * 0.8), behavior: 'smooth' });
    });
};

initTestimonials();


// Form Submit Webhook Logic
const initContactForm = () => {
    const form = document.getElementById('form-contacto');
    if (!form) return;

    // Webhook n8n para captura y notificación instantánea de leads a WhatsApp
    const WEBHOOK_URL = 'https://n8n.conecta2.lat/webhook/paqari-nuevo-lead';

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const btn = document.getElementById('btn-submit');
        const originalText = btn.innerHTML;
        btn.innerHTML = 'ENVIANDO...';
        btn.disabled = true;

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Agregar datos de contexto para n8n
        data.proyecto = 'Paqari Sauce';
        data.origen = 'Landing Page Web - Formulario Brochure';

        try {
            const response = await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                // Evento de Google Tag para Conversión de Formulario
                if (typeof window.gtag !== 'undefined') {
                    window.gtag('event', 'generate_lead', {
                        method: 'ContactForm',
                        project: 'Paqari Sauce'
                    });
                }
                
                // Evento de Meta Pixel para Conversión de Formulario
                if (typeof window.fbq !== 'undefined') {
                    window.fbq('track', 'Lead', {
                        content_name: 'Formulario Brochure',
                        content_category: 'Contacto'
                    });
                }
                
                btn.innerHTML = '¡Listo! Revisa tu WhatsApp y correo en unos segundos.';
                form.reset();
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                }, 5000);
            } else {
                throw new Error('Error en el envío');
            }
        } catch (error) {
            console.error('Submission error:', error);
            btn.innerHTML = 'ERROR AL ENVIAR. INTENTE NUEVAMENTE';
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.disabled = false;
            }, 4000);
        }
    });
};

initContactForm();

// Analytics Tracking: Scroll Depth
const initScrollTracking = () => {
    let scrollDepths = {
        '25': false,
        '50': false,
        '75': false,
        '100': false
    };

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;

        [25, 50, 75, 100].forEach(depth => {
            if (scrollPercent >= depth && !scrollDepths[depth]) {
                scrollDepths[depth] = true;
                if (typeof window.gtag !== 'undefined') {
                    window.gtag('event', 'scroll_depth', { depth: `${depth}%` });
                }
            }
        });
    }, { passive: true });
};
initScrollTracking();

// Analytics Tracking: Section Views (Intersection Observer)
const initSectionTracking = () => {
    const sections = document.querySelectorAll('section[id]');
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (typeof window.gtag !== 'undefined') {
                        window.gtag('event', 'view_section', {
                            section_name: entry.target.id
                        });
                    }
                    // Opcional: Desactivar observador después de verlo una vez para no duplicar eventos
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 }); // Se dispara cuando el 50% de la sección es visible

        sections.forEach(sec => observer.observe(sec));
    }
};
initSectionTracking();

// Consentimiento de Cookies
const initCookieConsent = () => {
    const banner = document.getElementById('cookie-banner');
    const btnAccept = document.getElementById('btn-accept-cookies');
    const btnDecline = document.getElementById('btn-decline-cookies');

    if (!banner || !btnAccept || !btnDecline) return;

    // Verificar si ya se dio consentimiento
    const consent = localStorage.getItem('cookie_consent');
    
    if (!consent) {
        // Mostrar banner
        banner.classList.remove('hidden');
        // Pequeño delay para la animación de subida
        setTimeout(() => {
            banner.classList.remove('translate-y-full');
        }, 100);
    } else if (consent === 'granted') {
        // Asegurar que gtag sepa que el consentimiento está otorgado en futuras cargas
        if (typeof window.gtag !== 'undefined') {
            window.gtag('consent', 'update', {
                'analytics_storage': 'granted',
                'ad_storage': 'granted',
                'ad_user_data': 'granted',
                'ad_personalization': 'granted'
            });
        }
        // Asegurar consentimiento otorgado en Meta Pixel en futuras cargas
        if (typeof window.fbq !== 'undefined') {
            window.fbq('consent', 'grant');
        }
    }

    const hideBanner = () => {
        banner.classList.add('translate-y-full');
        setTimeout(() => banner.classList.add('hidden'), 500); // Esperar que termine la animación
    };

    btnAccept.addEventListener('click', () => {
        localStorage.setItem('cookie_consent', 'granted');
        if (typeof window.gtag !== 'undefined') {
            window.gtag('consent', 'update', {
                'analytics_storage': 'granted',
                'ad_storage': 'granted',
                'ad_user_data': 'granted',
                'ad_personalization': 'granted'
            });
        }
        if (typeof window.fbq !== 'undefined') {
            window.fbq('consent', 'grant');
        }
        hideBanner();
    });

    btnDecline.addEventListener('click', () => {
        localStorage.setItem('cookie_consent', 'denied');
        // Ya está "denied" por defecto en index.html, no hace falta actualizar.
        hideBanner();
    });
};
initCookieConsent();

// GSAP Animations Initialization
const initGsapAnimations = () => {
    // Ensure scrolling is always active and never locked
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    
    // Safety timer to guarantee preloader dismiss
    const safetyDismiss = setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) preloader.remove();
    }, 2000);
    
    const entryTl = gsap.timeline({
        onComplete: () => {
            clearTimeout(safetyDismiss);
            const preloader = document.getElementById('preloader');
            if (preloader) preloader.remove();
            if (typeof ScrollTrigger !== 'undefined') {
                ScrollTrigger.refresh();
            }
        }
    });

    // Animate preloader logo
    entryTl.fromTo('.preloader-logo-wrapper', 
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: 'power3.out' }
    )
    // Slide up preloader screen
    .to('#preloader', {
        yPercent: -100,
        duration: 0.8,
        ease: 'power4.inOut',
        delay: 0.3
    })
    // Entry animations for the page header and content
    .fromTo('#navbar', 
        { opacity: 0 },
        { opacity: 1, duration: 1.0, ease: 'power2.out', clearProps: 'all' }, 
        '-=0.4'
    )
    .from('.hero-title', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
    }, '-=0.9')
    .from('.hero-subtitle', {
        y: 30,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
    }, '-=0.9')
    .from('.hero-cta-btn', {
        y: 20,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
    }, '-=0.9')
    .from('.hero-bottom-bar, .hero-bottom-play', {
        y: 20,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.1
    }, '-=0.8');

    // 1. Explore Button Word Rotator
    const wordsRotator = () => {
        const slide = document.querySelector('.scroll-text-slide');
        if (!slide) return;
        const count = slide.children.length;
        let currentIndex = 0;
        
        setInterval(() => {
            currentIndex = (currentIndex + 1) % count;
            gsap.to(slide, {
                yPercent: -currentIndex * (100 / count),
                duration: 0.8,
                ease: 'power3.inOut'
            });
        }, 2500);
    };
    wordsRotator();

    // 2. Hero Scroll Parallax
    gsap.to('.hero-parallax-bg img', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
            trigger: '#hero-section',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });

    // 3. Brand Quote / Manifesto (ScrollTrigger)
    gsap.from('.quote-text', {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '#project',
            start: 'top 85%'
        }
    });
    gsap.from('.quote-line', {
        scaleX: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '#project',
            start: 'top 85%'
        }
    });
    gsap.from('.quote-subtitle', {
        opacity: 0,
        y: 20,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.15,
        scrollTrigger: {
            trigger: '#project',
            start: 'top 85%'
        }
    });

    // 4. Amenities Grid (ScrollTrigger)
    gsap.fromTo('#amenities .group', 
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: 'power3.out',
            clearProps: 'all',
            scrollTrigger: {
                trigger: '#amenities',
                start: 'top 90%',
                toggleActions: 'play none none none'
            }
        }
    );

    // 5. Location Highlights Grid (ScrollTrigger)
    gsap.fromTo('.items-location-highlight', 
        { opacity: 0, y: 25 },
        {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.8,
            ease: 'power3.out',
            clearProps: 'all',
            scrollTrigger: {
                trigger: '#location',
                start: 'top 90%',
                toggleActions: 'play none none none'
            }
        }
    );

    // 6. Masterplan Chronology / Phases (ScrollTrigger)
    gsap.fromTo('#masterplan-phases-grid > div', 
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: 'power3.out',
            clearProps: 'all',
            scrollTrigger: {
                trigger: '#masterplan-phases-grid',
                start: 'top 95%',
                toggleActions: 'play none none none'
            }
        }
    );

    // 7. Investment Details and Animated Chart (ScrollTrigger)
    gsap.fromTo('#investment .lg\\:col-span-6 > *', 
        { opacity: 0, y: 25 },
        {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: 'power3.out',
            clearProps: 'all',
            scrollTrigger: {
                trigger: '#investment',
                start: 'top 90%',
                toggleActions: 'play none none none'
            }
        }
    );

    const bars = document.querySelectorAll('.investment-bar');
    const barHeights = ['35%', '65%', '100%'];
    bars.forEach((bar, index) => {
        gsap.fromTo(bar, 
            { height: '0%' },
            { 
                height: barHeights[index], 
                duration: 1.5, 
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: '#investment',
                    start: 'top 75%'
                }
            }
        );
    });

    // 8. FAQ Accordion (ScrollTrigger)
    gsap.fromTo('#faq details', 
        { opacity: 0, y: 15 },
        {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.5,
            ease: 'power2.out',
            clearProps: 'all',
            scrollTrigger: {
                trigger: '#faq',
                start: 'top 90%',
                toggleActions: 'play none none none'
            }
        }
    );

    // 9. Image Scroll Parallax (WSL deep-perspective effect)
    const parallaxImages = document.querySelectorAll('.img-zoom-hover');
    parallaxImages.forEach(img => {
        // Find nearest overflow hidden container to avoid boundaries leaking
        const parent = img.closest('.group') || img.parentElement;
        if (!parent) return;

        // Scale the image slightly up first to create translation margin
        gsap.set(img, { scale: 1.15 });

        gsap.fromTo(img, 
            { yPercent: -10 },
            { 
                yPercent: 10,
                ease: 'none',
                scrollTrigger: {
                    trigger: parent,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            }
        );
    });

    // 11. Refined Heading Text 3D Reveal (Cinematic Webflow style)
    const headings = document.querySelectorAll('h2');
    headings.forEach(h => {
        if (h.closest('#preloader') || h.closest('#faq')) return;

        gsap.fromTo(h, 
            { 
                y: 60, 
                opacity: 0, 
                rotateX: -15,
                transformOrigin: 'top center'
            },
            {
                y: 0,
                opacity: 1,
                rotateX: 0,
                duration: 1.4,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: h,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            }
        );
    });
};

initGsapAnimations();

