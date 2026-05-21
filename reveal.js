/* ===== REVEAL ON SCROLL JAVASCRIPT ===== */
/* إظهار العناصر عند التمرير إلى أسفل الصفحة */

// بداية وحدة الكشف عند التمرير
// استخدام Intersection Observer لإظهار العناصر بسلاسة

const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // إضافة فئة 'visible' عند ظهور العنصر
      entry.target.classList.add('visible');
      // عدم المراقبة مجدداً بعد أن يصبح مرئياً
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12, // تفعيل عند ظهور 12% من العنصر
  rootMargin: '0px 0px -100px 0px' // بداية التأثير قبل 100px من النهاية
});

// بدء مراقبة جميع العناصر التي تحتوي على فئة 'reveal'
revealElements.forEach(element => {
  observer.observe(element);
});

// نهاية وحدة الكشف عند التمرير
