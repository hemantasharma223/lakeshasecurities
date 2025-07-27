// script.js

// Global Variables
let isScrolled = false;
let currentServiceModal = null;

// DOM Elements
const loadingScreen = document.getElementById('loadingScreen');
const header = document.getElementById('header');
const mobileNav = document.getElementById('mobileNav');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const closeMobileNav = document.getElementById('closeMobileNav');
const backToTop = document.getElementById('backToTop');
const typewriter = document.getElementById('typewriter');
const serviceModal = document.getElementById('serviceModal');
const modalClose = document.getElementById('modalClose');
const contactForm = document.getElementById('contactForm');

// Service Data
const serviceData = {
    'manned-guarding': {
        title: 'Manned Guarding',
        image: 'https://www.garudsecurities.com.np/public/images/upload/service/man-guarding.jpeg',
        description: 'Our professional manned guarding services provide comprehensive security coverage with highly trained personnel. We combine advanced technology with human expertise to deliver superior protection for your premises, assets, and personnel.',
        features: [
            '24/7 Security Coverage',
            'Highly Trained Security Personnel',
            'Emergency Response Protocols',
            'Access Control Management',
            'Incident Reporting & Documentation',
            'Customer Service Excellence'
        ]
    },
    'surveillance': {
        title: 'CCTV Surveillance',
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'State-of-the-art CCTV surveillance systems with real-time monitoring and intelligent analytics. Our advanced camera networks provide comprehensive coverage with remote access capabilities and automated threat detection.',
        features: [
            'HD & 4K Camera Systems',
            'Remote Monitoring Capabilities',
            'AI-Powered Analytics',
            'Motion Detection & Alerts',
            'Cloud Storage Solutions',
            '24/7 Monitoring Center'
        ]
    },
    'access-control': {
        title: 'Access Control Systems',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Sophisticated access control systems ensuring authorized entry and comprehensive visitor management. Our biometric and card-based systems provide multiple layers of security for your facilities.',
        features: [
            'Biometric Authentication',
            'Smart Card Access',
            'Visitor Management System',
            'Time & Attendance Tracking',
            'Integration with CCTV',
            'Mobile Access Control'
        ]
    },
    'alarm-systems': {
        title: 'Alarm Systems',
        image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Integrated alarm systems with instant notifications and rapid response capabilities. Our multi-layered detection systems provide immediate alerts for various security threats and emergency situations.',
        features: [
            'Intrusion Detection Systems',
            'Fire & Smoke Alarms',
            'Panic Button Integration',
            'Mobile Alert Notifications',
            'Silent Alarm Options',
            'Emergency Response Coordination'
        ]
    },
    'vip-protection': {
        title: 'VIP Protection Services',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Elite personal protection services for high-profile individuals with discreet and professional security teams. Our VIP protection includes comprehensive risk assessment and tailored security solutions.',
        features: [
            'Professional Bodyguard Services',
            'Risk Assessment & Planning',
            'Event Security Management',
            'Secure Transportation',
            'Advance Security Coordination',
            'Discreet Protection Services'
        ]
    },
    'consulting': {
        title: 'Security Consulting',
        image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Expert security assessments and consulting services to identify vulnerabilities and implement effective solutions. Our consultants provide comprehensive security audits and customized recommendations.',
        features: [
            'Comprehensive Risk Analysis',
            'Security Vulnerability Assessments',
            'Custom Security Solutions',
            'Policy & Procedure Development',
            'Training Program Design',
            'Compliance & Audit Support'
        ]
    }
};

// Initialization
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

function initializeWebsite() {
    // Hide loading screen after a delay
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 2000);

    // Initialize all components
    initializeNavigation();
    initializeTypewriter();
    initializeScrollAnimations();
    initializeServiceCards();
    initializeContactForm();
    initializeCounters();
    initializeReadMore();
    initializeBackToTop();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Add resize event listener
    window.addEventListener('resize', handleResize);
}

// Navigation Functions
function initializeNavigation() {
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', () => {
        mobileNav.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeMobileNav.addEventListener('click', closeMobileNavigation);

    // Close mobile nav when clicking on links
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-menu a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMobileNavigation);
    });

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function closeMobileNavigation() {
    mobileNav.classList.remove('active');
    document.body.style.overflow = '';
}

// Typewriter Effect
function initializeTypewriter() {
    const phrases = [
        'Premier Security Provider',
        'International Standard Solutions',
        'Trusted Protection Partner',
        'Advanced Security Technology'
    ];
    
    let currentPhrase = 0;
    let currentChar = 0;
    let isDeleting = false;
    
    function typeWriter() {
        const current = phrases[currentPhrase];
        
        if (isDeleting) {
            typewriter.textContent = current.substring(0, currentChar - 1);
            currentChar--;
            
            if (currentChar === 0) {
                isDeleting = false;
                currentPhrase = (currentPhrase + 1) % phrases.length;
                setTimeout(typeWriter, 500);
                return;
            }
        } else {
            typewriter.textContent = current.substring(0, currentChar + 1);
            currentChar++;
            
            if (currentChar === current.length) {
                isDeleting = true;
                setTimeout(typeWriter, 2000);
                return;
            }
        }
        
        setTimeout(typeWriter, isDeleting ? 50 : 100);
    }
    
    if (typewriter) {
        typeWriter();
    }
}

// Scroll Animations
function initializeScrollAnimations() {
    const animateElements = document.querySelectorAll('.animate-on-scroll, .service-card, .feature-item, .program-item');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

// Counter Animation
function initializeCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                animateCounter(entry.target);
                entry.target.classList.add('counted');
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        element.textContent = Math.floor(current);
        
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        }
    }, 16);
}

// Service Cards
function initializeServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        const serviceBtn = card.querySelector('.service-btn');
        const serviceType = card.getAttribute('data-service');
        
        serviceBtn.addEventListener('click', () => {
            openServiceModal(serviceType);
        });
        
        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('service-btn')) {
                openServiceModal(serviceType);
            }
        });
    });
    
    // Modal close events
    if (modalClose) {
        modalClose.addEventListener('click', closeServiceModal);
    }
    
    if (serviceModal) {
        serviceModal.addEventListener('click', (e) => {
            if (e.target === serviceModal) {
                closeServiceModal();
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && serviceModal.classList.contains('active')) {
            closeServiceModal();
        }
    });
}

function openServiceModal(serviceType) {
    const service = serviceData[serviceType];
    if (!service) return;
    
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');
    const modalFeatures = document.getElementById('modalFeatures');
    
    modalTitle.textContent = service.title;
    modalImage.src = service.image;
    modalImage.alt = service.title;
    modalDescription.textContent = service.description;
    
    modalFeatures.innerHTML = '';
    service.features.forEach(feature => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-check"></i> ${feature}`;
        modalFeatures.appendChild(li);
    });
    
    serviceModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    currentServiceModal = serviceType;
}

function closeServiceModal() {
    serviceModal.classList.remove('active');
    document.body.style.overflow = '';
    currentServiceModal = null;
}

// Read More Functionality
function initializeReadMore() {
    const readMoreBtn = document.getElementById('readMoreBtn');
    const aboutExpanded = document.getElementById('aboutExpanded');
    
    if (readMoreBtn && aboutExpanded) {
        readMoreBtn.addEventListener('click', () => {
            const isExpanded = aboutExpanded.classList.contains('active');
            
            if (isExpanded) {
                aboutExpanded.classList.remove('active');
                readMoreBtn.querySelector('.btn-text').textContent = 'Read More';
                readMoreBtn.classList.remove('active');
            } else {
                aboutExpanded.classList.add('active');
                readMoreBtn.querySelector('.btn-text').textContent = 'Read Less';
                readMoreBtn.classList.add('active');
            }
        });
    }
    
    const trainingMoreBtn = document.getElementById('trainingMoreBtn');
    const trainingExpanded = document.getElementById('trainingExpanded');
    
    if (trainingMoreBtn && trainingExpanded) {
        trainingMoreBtn.addEventListener('click', () => {
            const isExpanded = trainingExpanded.classList.contains('active');
            
            if (isExpanded) {
                trainingExpanded.classList.remove('active');
                trainingMoreBtn.querySelector('.btn-text').textContent = 'Learn More';
                trainingMoreBtn.classList.remove('active');
            } else {
                trainingExpanded.classList.add('active');
                trainingMoreBtn.querySelector('.btn-text').textContent = 'Show Less';
                trainingMoreBtn.classList.add('active');
            }
        });
    }
}

// Contact Form
function initializeContactForm() {
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Show loading state
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                // Reset form
                contactForm.reset();
                
                // Show success message
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                submitBtn.style.background = '#4CAF50';
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                }, 3000);
                
                // Here you would typically send the data to your server
                console.log('Form data:', data);
                
                // Show success notification
                showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
            }, 2000);
        });
    }
}

// Back to Top Button
function initializeBackToTop() {
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Scroll Handler
function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Header scroll effect
    if (scrollTop > 100 && !isScrolled) {
        header.classList.add('scrolled');
        isScrolled = true;
    } else if (scrollTop <= 100 && isScrolled) {
        header.classList.remove('scrolled');
        isScrolled = false;
    }
    
    // Back to top button
    if (scrollTop > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
    
    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    if (hero && scrollTop < hero.offsetHeight) {
        const parallaxSpeed = 0.5;
        hero.style.transform = `translateY(${scrollTop * parallaxSpeed}px)`;
    }
}

// Resize Handler
function handleResize() {
    // Close mobile nav on resize to desktop
    if (window.innerWidth > 768 && mobileNav.classList.contains('active')) {
        closeMobileNavigation();
    }
}

// Utility Functions
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add notification styles if not already added
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 2rem;
                right: 2rem;
                background: white;
                padding: 1rem 1.5rem;
                border-radius: 10px;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
                z-index: 10000;
                transform: translateX(400px);
                transition: transform 0.3s ease;
                max-width: 400px;
            }
            
            .notification.show {
                transform: translateX(0);
            }
            
            .notification-success {
                border-left: 4px solid #4CAF50;
            }
            
            .notification-info {
                border-left: 4px solid #2196F3;
            }
            
            .notification-content {
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
            
            .notification-success i {
                color: #4CAF50;
            }
            
            .notification-info i {
                color: #2196F3;
            }
            
            @media (max-width: 768px) {
                .notification {
                    top: 1rem;
                    right: 1rem;
                    left: 1rem;
                    max-width: none;
                }
            }
        `;
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Remove notification after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Smooth scroll polyfill for older browsers
function smoothScroll(target, duration = 1000) {
    const targetElement = document.querySelector(target);
    if (!targetElement) return;
    
    const targetPosition = targetElement.offsetTop - header.offsetHeight;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    requestAnimationFrame(animation);
}

// Image lazy loading
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Performance optimization
function optimizePerformance() {
    // Preload critical resources
    const criticalImages = [
        './img/logos/LakeshaLogo_-01.png',
        './img/guard1.jpg'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
    
    // Defer non-critical JavaScript
    window.addEventListener('load', () => {
        // Initialize non-critical features after page load
        initializeLazyLoading();
        
        // Add performance analytics
        if ('performance' in window) {
            window.addEventListener('load', () => {
                setTimeout(() => {
                    const perfData = performance.timing;
                    const loadTime = perfData.loadEventEnd - perfData.navigationStart;
                    console.log(`Page load time: ${loadTime}ms`);
                }, 0);
            });
        }
    });
}

// Error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
    // You could send this to an error tracking service
});

// Feature detection and progressive enhancement
function checkBrowserSupport() {
    const features = {
        intersectionObserver: 'IntersectionObserver' in window,
        css3DTransforms: 'WebKitCSSMatrix' in window || 'MSCSSMatrix' in window,
        flexbox: CSS.supports('display', 'flex'),
        grid: CSS.supports('display', 'grid')
    };
    
    // Add classes based on feature support
    Object.keys(features).forEach(feature => {
        if (features[feature]) {
            document.documentElement.classList.add(`supports-${feature}`);
        } else {
            document.documentElement.classList.add(`no-${feature}`);
        }
    });
    
    return features;
}

// Initialize performance optimizations
document.addEventListener('DOMContentLoaded', () => {
    checkBrowserSupport();
    optimizePerformance();
});

// Service Worker registration for offline support
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Analytics and tracking (placeholder)
function trackEvent(eventName, eventData = {}) {
    // This would typically send data to Google Analytics or similar
    console.log('Event tracked:', eventName, eventData);
    
    // Example: Track service modal openings
    if (eventName === 'service_modal_opened') {
        // Send to analytics service
    }
    
    // Example: Track form submissions
    if (eventName === 'contact_form_submitted') {
        // Send to analytics service
    }
}

// Accessibility improvements
function enhanceAccessibility() {
    // Add skip link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        z-index: 1000;
        border-radius: 4px;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Enhance keyboard navigation
    const focusableElements = document.querySelectorAll(
        'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    
    focusableElements.forEach(element => {
        element.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && element.tagName === 'A') {
                element.click();
            }
        });
    });
    
    // Add ARIA labels where needed
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label', `Learn more about ${card.querySelector('h3').textContent}`);
    });
}

// Initialize accessibility features
document.addEventListener('DOMContentLoaded', enhanceAccessibility);

// Touch and gesture support for mobile
function initializeTouchSupport() {
    let touchStartX = 0;
    let touchStartY = 0;
    
    document.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    });
    
    document.addEventListener('touchend', (e) => {
        if (!touchStartX || !touchStartY) return;
        
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        
        const diffX = touchStartX - touchEndX;
        const diffY = touchStartY - touchEndY;
        
        // Detect swipe gestures
        if (Math.abs(diffX) > Math.abs(diffY)) {
            if (Math.abs(diffX) > 50) {
                if (diffX > 0) {
                    // Swipe left
                    if (mobileNav.classList.contains('active')) {
                        closeMobileNavigation();
                    }
                } else {
                    // Swipe right
                    // Could open mobile nav or perform other actions
                }
            }
        }
        
        touchStartX = 0;
        touchStartY = 0;
    });
    
    // Prevent zoom on double tap for better UX
    let lastTouchEnd = 0;
    document.addEventListener('touchend', (e) => {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            e.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
}

// Initialize touch support
document.addEventListener('DOMContentLoaded', initializeTouchSupport);

// Theme switching capability (for future enhancement)
function initializeThemeToggle() {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check for saved theme preference or default to 'light'
    const currentTheme = localStorage.getItem('theme') || 
                        (prefersDarkScheme.matches ? 'dark' : 'light');
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Listen for changes in system theme preference
    prefersDarkScheme.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
        }
    });
}

// Search functionality (for future enhancement)
function initializeSearch() {
    const searchContent = [
        { title: 'Manned Guarding', content: 'Professional security personnel 24/7 coverage', url: '#services' },
        { title: 'CCTV Surveillance', content: 'Advanced camera systems monitoring', url: '#services' },
        { title: 'Access Control', content: 'Biometric card access visitor management', url: '#services' },
        { title: 'Training Programs', content: 'Professional security training courses', url: '#training' },
        { title: 'About Us', content: 'International security solutions provider Nepal', url: '#about' },
        // Add more searchable content as needed
    ];
    
    window.searchContent = searchContent; // Make available globally
}

// Initialize search on load
document.addEventListener('DOMContentLoaded', initializeSearch);

// Debugging helpers (remove in production)
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    window.lakeshaDebug = {
        showServiceModal: (type) => openServiceModal(type),
        closeServiceModal: closeServiceModal,
        trackEvent: trackEvent,
        searchContent: () => window.searchContent
    };
    
    console.log('Lakesha Securities Debug Tools Available:', window.lakeshaDebug);
}

// Export functions for module usage (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeWebsite,
        openServiceModal,
        closeServiceModal,
        trackEvent,
        showNotification
    };
}
