/**
 * Landing Page Navigation & Interactions
 * Handles smooth scrolling, navbar behavior, theme toggle,
 * image lightbox, thumbnail swap, lazy loading, and scroll effects
 */

document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        updateActiveNavLink();
        updateParallax();
    });

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Update active navigation link based on scroll position
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navbarHeight = navbar.offsetHeight;
        const scrollPosition = window.scrollY + navbarHeight + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (correspondingLink) {
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    correspondingLink.classList.add('active');
                }
            }
        });
    }

    // Theme toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
        });
    }

    // === Lazy Load with Fade-in ===
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', () => {
                img.classList.add('loaded');
            });
        }
    });

    // === Image Lightbox ===
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');

    if (lightbox && lightboxImg) {
        // Open lightbox on artwork image click
        document.querySelectorAll('.main-image img, .thumb-item img').forEach(img => {
            img.addEventListener('click', (e) => {
                e.stopPropagation();
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });

        // Close lightbox
        function closeLightbox() {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }

        lightbox.addEventListener('click', closeLightbox);
        document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                closeLightbox();
            }
        });
    }

    // === Thumbnail to Main Image Swap ===
    document.querySelectorAll('.artwork-images').forEach(container => {
        const mainImg = container.querySelector('.main-image img');
        const thumbs = container.querySelectorAll('.thumb-item img');

        if (!mainImg) return;

        thumbs.forEach(thumb => {
            thumb.addEventListener('click', (e) => {
                e.stopPropagation();
                // Swap src and alt between main and clicked thumb
                const tempSrc = mainImg.src;
                const tempAlt = mainImg.alt;
                mainImg.src = thumb.src;
                mainImg.alt = thumb.alt;
                thumb.src = tempSrc;
                thumb.alt = tempAlt;
            });
        });
    });

    // === Parallax on Theater Section ===
    const theaterImg = document.querySelector('.section-image-wrapper .section-img');

    function updateParallax() {
        if (!theaterImg) return;
        const rect = theaterImg.parentElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {
            const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
            const offset = (progress - 0.5) * 60;
            theaterImg.style.transform = `translateY(${offset}px)`;
        }
    }

    // === Scroll Reveal Animations with Stagger ===
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -80px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';

                // Stagger child elements
                const staggerChildren = entry.target.querySelectorAll(
                    '.detail-item, .meaning-card, .thumb-item, .footer-item, .eval-list li'
                );
                staggerChildren.forEach((child, i) => {
                    child.style.transitionDelay = `${i * 0.1}s`;
                    child.style.opacity = '1';
                    child.style.transform = 'translateY(0)';
                });
            }
        });
    }, observerOptions);

    // Observe sections, artworks, and footer for reveal
    const animatedElements = document.querySelectorAll('.section, .artwork, .footer');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        revealObserver.observe(el);
    });

    // Set up stagger children initial state
    document.querySelectorAll('.detail-item, .meaning-card, .thumb-item, .footer-item, .eval-list li').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    // Initialize hero as visible
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.style.opacity = '1';
        heroSection.style.transform = 'translateY(0)';
    }
});
