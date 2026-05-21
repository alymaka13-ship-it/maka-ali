/* ===== NAVBAR JAVASCRIPT ===== */
/* وظائف شريط التنقل */

// بداية وحدة شريط التنقل
// Function لإضافة وإزالة فئة 'scrolled' من الـ navbar عند التمرير

if (typeof currentLang === 'undefined') {
  currentLang = document.documentElement.lang === 'en' ? 'en' : 'ar';
}
const navbar = document.getElementById('navbar');
const langToggle = document.getElementById('langToggle');

// ===== SCROLL EVENT LISTENER =====
// تتبع تمرير الصفحة وتغيير مظهر الـ navbar
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // ===== SCROLL TO TOP BUTTON =====
  // إظهار زر الرجوع للأعلى عند تمرير أكثر من 400px
  const scrollTopBtn = document.getElementById('scrollTop');
  if (window.scrollY > 400) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
});

// ===== LANGUAGE TOGGLE =====
// تغيير اللغة بين العربية والإنجليزية
if (langToggle) {
  langToggle.addEventListener('click', toggleLanguage);
}

function toggleLanguage() {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  
  // تحديث اتجاه الصفحة
  const htmlRoot = document.documentElement;
  htmlRoot.lang = currentLang;
  htmlRoot.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  
  // تحديث نص الزر
  langToggle.textContent = currentLang === 'ar' ? 'EN' : 'AR';
  
  // تطبيق الترجمات
  applyTranslations(currentLang);
}

// ===== APPLY TRANSLATIONS =====
// Function لتطبيق جميع الترجمات على الصفحة
function applyTranslations(lang) {
  const t = translations[lang];
  
  // ===== PAGE META =====
  document.title = t.pageTitle;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', t.pageDescription);
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', t.ogTitle);
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', t.ogDescription);

  // ===== HERO SECTION =====
  document.getElementById('badgeText').textContent = t.badgeText;
  document.getElementById('heroTitle').textContent = t.heroTitle;
  document.getElementById('heroDesc').textContent = t.heroDesc;
  document.getElementById('heroApplyBtn').textContent = t.heroApplyBtn;
  document.getElementById('heroWhatsBtn').textContent = t.heroWhatsBtn;

  // ===== SERVICES SECTION =====
  document.getElementById('svcTag').textContent = t.svcTag;
  const svcTitle = document.getElementById('svcTitle');
  svcTitle.innerHTML = t.svcTitle + '<span id="svcTitleSpan">' + t.svcTitleSpan + '</span>';
  document.getElementById('svcSubtitle').textContent = t.svcSubtitle;
  
  // Services cards
  const svcCards = document.querySelectorAll('.service-card');
  const svcData = [
    [t.svc1Title, t.svc1Desc],
    [t.svc2Title, t.svc2Desc],
    [t.svc3Title, t.svc3Desc],
    [t.svc4Title, t.svc4Desc],
    [t.svc5Title, t.svc5Desc],
    [t.svc6Title, t.svc6Desc],
  ];
  svcCards.forEach((card, i) => {
    if (svcData[i]) {
      card.querySelector('h3').textContent = svcData[i][0];
      card.querySelector('p').textContent = svcData[i][1];
    }
  });

  // ===== STATS SECTION =====
  const statLabelsSection = document.querySelectorAll('.stat-label');
  const statKeys = ['statLabel1', 'statLabel2', 'statLabel3', 'statLabel4'];
  statLabelsSection.forEach((el, i) => {
    if (statKeys[i]) el.textContent = t[statKeys[i]];
  });

  // ===== JOBS SECTION =====
  const jobsTag = document.getElementById('jobsTag');
  if (jobsTag) jobsTag.textContent = t.jobsTag;
  const jobsTitle = document.getElementById('jobsTitle');
  if (jobsTitle) jobsTitle.innerHTML = t.jobsTitle + '<span id="jobsTitleSpan">' + t.jobsTitleSpan + '</span>';
  const jobsSubtitle = document.getElementById('jobsSubtitle');
  if (jobsSubtitle) jobsSubtitle.textContent = t.jobsSubtitle;
  document.querySelectorAll('.btn-apply').forEach(b => b.textContent = t.applyBtn);

  // ===== GALLERY =====
  const galTag = document.getElementById('galTag');
  if (galTag) galTag.textContent = t.galTag;
  const galTitle = document.getElementById('galTitle');
  if (galTitle) galTitle.innerHTML = t.galTitle + '<span id="galTitleSpan">' + t.galTitleSpan + '</span>';
  const galSubtitle = document.getElementById('galSubtitle');
  if (galSubtitle) galSubtitle.textContent = t.galSubtitle;

  // ===== TESTIMONIALS =====
  const testTag = document.getElementById('testTag');
  if (testTag) testTag.textContent = t.testTag;
  const testTitle = document.getElementById('testTitle');
  if (testTitle) testTitle.innerHTML = t.testTitle + '<span id="testTitleSpan">' + t.testTitleSpan + '</span>';

  // ===== CTA SECTION =====
  const ctaSection = document.getElementById('contact');
  if (ctaSection) {
    const ctaHeading = ctaSection.querySelector('h2');
    if (ctaHeading) ctaHeading.textContent = t.ctaTitle;
    const ctaParagraph = ctaSection.querySelector('p');
    if (ctaParagraph) ctaParagraph.textContent = t.ctaDesc;
    const ctaBtns = ctaSection.querySelectorAll('a');
    if (ctaBtns[0]) ctaBtns[0].textContent = t.ctaWhatsapp;
    if (ctaBtns[1]) ctaBtns[1].textContent = t.ctaEmail;
  }

  // ===== FOOTER =====
  document.querySelector('.footer-brand p').textContent = t.footerDesc;
  const footerCols = document.querySelectorAll('.footer-col h4');
  if (footerCols[0]) footerCols[0].textContent = t.footerLinks;
  if (footerCols[1]) footerCols[1].textContent = t.footerPartners;
  if (footerCols[2]) footerCols[2].textContent = t.footerContact;
  document.querySelector('.footer-bottom p').textContent = t.footerRights;
  document.querySelector('.footer-license').textContent = t.footerLicense;
  
  // Update hours
  document.querySelectorAll('.footer-contact-item').forEach(item => {
    if (item.querySelector('.icon')?.textContent === '🕐') {
      item.querySelector('span:last-child').textContent = t.footerHours;
    }
  });

  // ===== FORM / MODAL LABELS =====
  document.getElementById('modalTitle').textContent = t.modalTitle;
  document.getElementById('labelName').textContent = t.labelName;
  document.getElementById('labelPhone').textContent = t.labelPhone;
  document.getElementById('labelEmail').textContent = t.labelEmail;
  document.getElementById('labelJob').textContent = t.labelJob;
  document.getElementById('labelExp').textContent = t.labelExp;
  document.getElementById('labelNote').textContent = t.labelNote;
  document.getElementById('submitBtn').textContent = t.submitBtn;
  document.getElementById('errName').textContent = t.errName;
  document.getElementById('errPhone').textContent = t.errPhone;
  document.getElementById('errEmail').textContent = t.errEmail;
  document.getElementById('fieldNote').placeholder = t.notePlaceholder;
  
  const expSel = document.getElementById('fieldExp');
  const expKeys = ['expOpt0', 'expOpt1', 'expOpt2', 'expOpt3', 'expOpt4'];
  expSel.querySelectorAll('option').forEach((opt, i) => {
    if (expKeys[i]) opt.textContent = t[expKeys[i]];
  });

  // ===== POPUP =====
  document.getElementById('popupTitle').textContent = t.popupTitle;
  document.getElementById('popupMsg').textContent = t.popupMsg;
  document.querySelector('.popup-close').textContent = t.popupBtn;

  // ===== GENERIC TRANSLATION =====
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    const value = t[key];
    if (!value) return;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      if ('placeholder' in el) {
        el.placeholder = value;
      } else {
        el.value = value;
      }
    } else {
      el.textContent = value;
    }
  });
}

// Apply initial translations
applyTranslations(currentLang);
