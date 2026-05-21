/* ===== MAIN JAVASCRIPT ===== */
/* الملف الرئيسي والتهيئة */

// Hide loader when page loads
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.classList.remove('show');
  }
  
  // Trigger reveal animations
  document.querySelectorAll('.reveal').forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('show');
    }, index * 100);
  });
});

// Show scroll to top button
const scrollTopBtn = document.getElementById('scrollTop');
if (scrollTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });
}

// Initialize tooltips or other UI elements
document.addEventListener('DOMContentLoaded', () => {
  // You can add initialization code here
  console.log('Page loaded and initialized');
});

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
  // Alt + L for language toggle
  if (e.altKey && e.key === 'l') {
    e.preventDefault();
    const langBtn = document.getElementById('langToggle');
    if (langBtn) langBtn.click();
  }
  
  // Escape to close modals
  if (e.key === 'Escape') {
    closeModal();
    closePopup();
  }
});

// Performance monitoring (optional)
if (window.performance && window.performance.timing) {
  window.addEventListener('load', () => {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log('Page load time: ' + pageLoadTime + 'ms');
  });
}

// Service Worker registration (optional - for PWA)
if ('serviceWorker' in navigator) {
  // Uncomment to enable service worker
  // navigator.serviceWorker.register('/sw.js').catch(err => {
  //   console.log('ServiceWorker registration failed: ', err);
  // });
}

// Add smooth scroll behavior for all browsers
document.addEventListener('DOMContentLoaded', () => {
  // This is already handled by CSS scroll-behavior: smooth
  // But we can add a polyfill or additional functionality here if needed
});

// Track user interactions (optional analytics)
document.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') {
    // You can add analytics tracking here
    console.log('User clicked:', e.target);
  }
});

function handleContactSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('contactName').value.trim();
  const phone = document.getElementById('contactPhone').value.trim();
  const email = document.getElementById('contactEmail').value.trim();
  const message = document.getElementById('contactMessage').value.trim();
  const alertBox = document.getElementById('contactAlert');

  if (!name || !phone || !message) {
    if (alertBox) {
      alertBox.textContent = 'يرجى ملء الحقول المطلوبة قبل الإرسال.';
      alertBox.classList.add('show');
    }
    return;
  }

  const subject = encodeURIComponent('رسالة من موقع مكة علي');
  const body = encodeURIComponent(`الاسم: ${name}\nرقم الهاتف: ${phone}\nالبريد الإلكتروني: ${email}\n\nالرسالة:\n${message}`);
  const mailtoUrl = `mailto:info@makkahali.com?subject=${subject}&body=${body}`;

  if (alertBox) {
    alertBox.textContent = 'سيتم فتح تطبيق البريد الإلكتروني لإرسال الرسالة. شكراً لتواصلك معنا.';
    alertBox.classList.add('show');
  }

  window.location.href = mailtoUrl;
}

// Handle offline mode (optional)
if (!navigator.onLine) {
  console.warn('You are currently offline');
}

window.addEventListener('online', () => {
  console.log('Connection restored');
});

window.addEventListener('offline', () => {
  console.warn('Connection lost');
});
