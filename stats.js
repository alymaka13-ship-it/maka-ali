/* ===== STATS COUNTERS JAVASCRIPT ===== */
/* أرقام متحركة في قسم الإحصائيات */

// بداية وحدة الأرقام المتحركة
// تحريك الأرقام عند ظهور قسم الإحصائيات

function animateCounter(element) {
  const target = parseInt(element.dataset.target) || 0;
  const duration = 2000; // 2 ثانية
  const step = target / (duration / 16); // 60fps
  let current = 0;

  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      element.textContent = '+' + target.toLocaleString();
      clearInterval(timer);
    } else {
      element.textContent = '+' + Math.floor(current).toLocaleString();
    }
  }, 16);
}

// استخدام Intersection Observer لتحريك الأرقام عند الظهور
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target); // عدم إعادة التحريك
    }
  });
}, {
  threshold: 0.5
});

// مراقبة جميع العناصر ذات البيانات target
document.querySelectorAll('.counter, [data-target]').forEach(counter => {
  counterObserver.observe(counter);
});

// نهاية وحدة الأرقام المتحركة
