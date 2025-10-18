/**
 * Adsterra Ads Integration Script
 * This script handles the integration of Adsterra ads on the website
 */

(function() {
  'use strict';

  // Configuration
  const ADSTERRA_CONFIG = {
    // Replace these with your actual Adsterra codes
    popunderCode: 'YOUR_POPUNDER_CODE_HERE',
    notificationCode: 'YOUR_NOTIFICATION_CODE_HERE',
    bannerCode: 'YOUR_BANNER_CODE_HERE',
    // Delay before showing popunder (in milliseconds)
    popunderDelay: 3000,
    // Enable/disable ads
    enablePopunder: true,
    enableNotification: true,
    enableBanners: true
  };

  /**
   * Initialize Adsterra Popunder Ads
   */
  function initPopunderAds() {
    if (!ADSTERRA_CONFIG.enablePopunder) return;

    // Delay popunder to avoid immediate popup
    setTimeout(function() {
      // Adsterra popunder code will be injected here
      // Replace with your actual Adsterra popunder code
      const popunderScript = document.createElement('script');
      popunderScript.type = 'text/javascript';
      popunderScript.src = `https://www.adsterra.com/script/showads/ns.php?nid=${ADSTERRA_CONFIG.popunderCode}`;
      popunderScript.async = true;
      document.body.appendChild(popunderScript);
    }, ADSTERRA_CONFIG.popunderDelay);
  }

  /**
   * Initialize Adsterra Push Notification Ads
   */
  function initNotificationAds() {
    if (!ADSTERRA_CONFIG.enableNotification) return;

    // Adsterra push notification code
    // Replace with your actual Adsterra notification code
    const notificationScript = document.createElement('script');
    notificationScript.type = 'text/javascript';
    notificationScript.src = `https://www.adsterra.com/script/showads/ns.php?nid=${ADSTERRA_CONFIG.notificationCode}`;
    notificationScript.async = true;
    document.head.appendChild(notificationScript);
  }

  /**
   * Initialize Adsterra Banner Ads
   */
  function initBannerAds() {
    if (!ADSTERRA_CONFIG.enableBanners) return;

    // Find all banner containers and inject ads
    const bannerContainers = document.querySelectorAll('[id^="adsterra-ad-"]');
    
    bannerContainers.forEach(function(container) {
      // Create banner ad code
      const bannerId = container.id;
      const bannerScript = document.createElement('script');
      bannerScript.type = 'text/javascript';
      bannerScript.innerHTML = `
        (function() {
          var script = document.createElement('script');
          script.src = 'https://www.adsterra.com/script/showads/ns.php?nid=${ADSTERRA_CONFIG.bannerCode}';
          script.async = true;
          document.getElementById('${bannerId}').appendChild(script);
        })();
      `;
      container.appendChild(bannerScript);
    });
  }

  /**
   * Initialize all Adsterra ads
   */
  function initAllAds() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        initBannerAds();
        initNotificationAds();
        initPopunderAds();
      });
    } else {
      initBannerAds();
      initNotificationAds();
      initPopunderAds();
    }
  }

  /**
   * Alternative method: Direct Adsterra integration
   * Uncomment and modify if you have direct Adsterra codes
   */
  function initDirectAdsterra() {
    // This is for direct Adsterra integration
    // Replace YOUR_ADSTERRA_ID with your actual Adsterra ID
    
    // Method 1: Using Adsterra's direct script
    /*
    var ads = document.createElement('script');
    ads.src = 'https://www.adsterra.com/script/showads/ns.php?nid=YOUR_ADSTERRA_ID';
    ads.async = true;
    document.head.appendChild(ads);
    */

    // Method 2: Using Adsterra's alternative script
    /*
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = 'https://www.adsterra.com/script/showads/ns.php?nid=YOUR_ADSTERRA_ID';
    s.async = true;
    document.body.appendChild(s);
    */
  }

  /**
   * Utility function to check if user has ad blocker
   */
  function hasAdBlocker() {
    var test = document.createElement('div');
    test.innerHTML = '&nbsp;';
    test.className = 'adsbox';
    document.body.appendChild(test);
    var isBlocked = test.offsetHeight === 0;
    test.remove();
    return isBlocked;
  }

  /**
   * Handle ad blocker detection
   */
  function handleAdBlocker() {
    if (hasAdBlocker()) {
      console.warn('Ad blocker detected. Some ads may not be displayed.');
      // You can add custom handling here if needed
    }
  }

  /**
   * Public API
   */
  window.AdsterraAds = {
    init: initAllAds,
    initDirect: initDirectAdsterra,
    config: ADSTERRA_CONFIG,
    hasAdBlocker: hasAdBlocker
  };

  // Auto-initialize on page load
  initAllAds();
  handleAdBlocker();

})();

/**
 * IMPORTANT: To use this script with your Adsterra account:
 * 
 * 1. Sign up at https://www.adsterra.com
 * 2. Get your Adsterra codes (popunder, notification, banner)
 * 3. Replace the placeholder codes in ADSTERRA_CONFIG with your actual codes
 * 4. Make sure to follow Adsterra's terms of service
 * 5. Test the ads on your website
 * 
 * Alternative Adsterra Integration Methods:
 * - Direct script injection
 * - Zone-based ads
 * - Custom ad placements
 * 
 * For more information, visit: https://www.adsterra.com/help
 */

