/**
 * Main JavaScript for Adawat Pro Website
 */

(function() {
  'use strict';

  /**
   * Initialize smooth scrolling
   */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  /**
   * Add animation to cards on scroll
   */
  function initScrollAnimation() {
    const cards = document.querySelectorAll('.card');
    
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1
      });

      cards.forEach(function(card) {
        observer.observe(card);
      });
    } else {
      // Fallback for browsers that don't support IntersectionObserver
      cards.forEach(function(card) {
        card.classList.add('fade-in');
      });
    }
  }

  /**
   * Handle newsletter subscription
   */
  function initNewsletterForm() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(function(form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = form.querySelector('input[type="email"]');
        
        if (email && email.value) {
          // Show success message
          const successMsg = document.createElement('div');
          successMsg.style.cssText = `
            background-color: #d1fae5;
            color: #065f46;
            padding: 1rem;
            border-radius: 4px;
            margin-top: 1rem;
            text-align: center;
          `;
          successMsg.textContent = 'شكراً لاشتراكك! سنرسل لك أحدث المحتوى قريباً.';
          
          form.parentNode.insertBefore(successMsg, form.nextSibling);
          
          // Reset form
          form.reset();
          
          // Remove success message after 5 seconds
          setTimeout(function() {
            successMsg.remove();
          }, 5000);
        }
      });
    });
  }

  /**
   * Initialize mobile menu toggle (if needed)
   */
  function initMobileMenu() {
    // This can be expanded for mobile menu functionality
    const nav = document.querySelector('nav');
    if (nav) {
      // Add mobile menu handling here if needed
    }
  }

  /**
   * Track page views for analytics
   */
  function trackPageView() {
    // You can integrate with Google Analytics or other tracking services here
    if (typeof gtag !== 'undefined') {
      gtag('config', 'GA_MEASUREMENT_ID', {
        'page_path': window.location.pathname
      });
    }
  }

  /**
   * Add active class to current nav link
   */
  function updateActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(function(link) {
      const href = link.getAttribute('href');
      if (href === currentPath || (currentPath === '/' && href === '/')) {
        link.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
      }
    });
  }

  /**
   * Initialize tooltips
   */
  function initTooltips() {
    // Add tooltip functionality if needed
    const tooltips = document.querySelectorAll('[title]');
    tooltips.forEach(function(element) {
      element.addEventListener('mouseover', function() {
        // Tooltip logic here
      });
    });
  }

  /**
   * Lazy load images
   */
  function initLazyLoad() {
    if ('IntersectionObserver' in window) {
      const images = document.querySelectorAll('img[data-src]');
      
      const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(function(img) {
        imageObserver.observe(img);
      });
    }
  }

  /**
   * Initialize all features
   */
  function initAll() {
    initSmoothScroll();
    initScrollAnimation();
    initNewsletterForm();
    initMobileMenu();
    updateActiveNavLink();
    initTooltips();
    initLazyLoad();
    trackPageView();
  }

  /**
   * Run initialization when DOM is ready
   */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }

  /**
   * Expose utility functions to window
   */
  window.AdawatPro = {
    init: initAll,
    trackPageView: trackPageView
  };

})();

/**
 * Utility: Log page performance
 */
window.addEventListener('load', function() {
  if (window.performance && window.performance.timing) {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log('Page load time: ' + pageLoadTime + 'ms');
  }
});

