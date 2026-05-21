/* ===== HERO SECTION JAVASCRIPT ===== */
/* وظائف قسم الترحيب الرئيسي */

// بداية وحدة قسم البطل (Hero)
// إضافة تأثيرات بسيطة وحركات للعناصر

document.addEventListener('DOMContentLoaded', function() {
  const heroText = document.querySelector('.hero-text');
  const heroImage = document.querySelector('.hero-image');

  // تأثير fade-up للعناصر عند تحميل الصفحة
  if (heroText) {
    heroText.style.animation = 'fadeUp 0.8s ease forwards';
  }

  if (heroImage) {
    heroImage.style.animation = 'fadeUp 0.8s ease 0.2s forwards';
  }
});

// نهاية وحدة قسم البطل
