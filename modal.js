/* ===== MODAL & FORM JAVASCRIPT ===== */
/* وظائف النوافذ المنبثقة والنماذج */

// بداية وحدة معالجة النماذج والنوافذ المنبثقة

// ===== OPEN APPLY MODAL =====
// Function لفتح نافذة التقديم
function openApplyModal(btn) {
  const card = btn.closest('.job-card');
  const jobTitleEl = card ? card.querySelector('h3[data-job]') : null;
  const jobName = jobTitleEl ? jobTitleEl.textContent.trim() : '';
  
  // تعيين اسم الوظيفة المختارة
  document.getElementById('fieldJob').value = jobName;
  
  // مسح الحقول السابقة
  ['fieldName', 'fieldPhone', 'fieldEmail', 'fieldNote'].forEach(id => {
    const el = document.getElementById(id);
    if (el && id !== 'fieldJob') el.value = '';
  });
  document.getElementById('fieldExp').selectedIndex = 0;
  
  // مسح الأخطاء السابقة
  document.querySelectorAll('.field-error').forEach(e => e.classList.remove('show'));
  document.querySelectorAll('.form-group input, .form-group select, .form-group textarea')
    .forEach(el => el.classList.remove('error'));
  
  // إظهار النافذة
  document.getElementById('applyModal').classList.add('show');
  document.body.style.overflow = 'hidden';
}

// ===== CLOSE MODAL =====
// Function لإغلاق نافذة التقديم
function closeModal() {
  document.getElementById('applyModal').classList.remove('show');
  document.body.style.overflow = '';
}

// ===== CLOSE POPUP =====
// Function لإغلاق نافذة رسالة النجاح
function closePopup() {
  document.getElementById('successPopup').classList.remove('show');
}

// ===== CLICK OUTSIDE TO CLOSE =====
// إغلاق النافذة عند الضغط خارجها
document.getElementById('applyModal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

document.getElementById('successPopup').addEventListener('click', function(e) {
  if (e.target === this) closePopup();
});

// ===== FORM VALIDATION & SUBMISSION =====
// Function للتحقق من صحة النموذج وإرسال البيانات
function submitApplication() {
  const t = translations[currentLang];
  let valid = true;

  const name = document.getElementById('fieldName');
  const phone = document.getElementById('fieldPhone');
  const email = document.getElementById('fieldEmail');

  // ===== VALIDATE NAME =====
  // التحقق من صحة الاسم (3 أحرف على الأقل)
  if (!name.value.trim() || name.value.trim().length < 3) {
    name.classList.add('error');
    document.getElementById('errName').classList.add('show');
    valid = false;
  } else {
    name.classList.remove('error');
    document.getElementById('errName').classList.remove('show');
  }

  // ===== VALIDATE PHONE =====
  // التحقق من صحة رقم الهاتف (9-15 رقم)
  const phoneClean = phone.value.replace(/\s/g, '');
  if (!phoneClean || !/^[0-9+]{9,15}$/.test(phoneClean)) {
    phone.classList.add('error');
    document.getElementById('errPhone').classList.add('show');
    valid = false;
  } else {
    phone.classList.remove('error');
    document.getElementById('errPhone').classList.remove('show');
  }

  // ===== VALIDATE EMAIL =====
  // التحقق من صحة البريد الإلكتروني (اختياري لكن يجب أن يكون صحيحاً إن وُجد)
  if (email.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
    email.classList.add('error');
    document.getElementById('errEmail').classList.add('show');
    valid = false;
  } else {
    email.classList.remove('error');
    document.getElementById('errEmail').classList.remove('show');
  }

  // إذا كان هناك أخطاء، التوقف هنا
  if (!valid) return;

  // ===== SUBMIT =====
  const btn = document.getElementById('submitBtn');
  btn.disabled = true;
  btn.textContent = currentLang === 'ar' ? 'جارٍ الإرسال...' : 'Submitting...';

  // محاكاة إرسال البيانات (استبدل بـ API call حقيقي)
  setTimeout(() => {
    btn.disabled = false;
    btn.textContent = t.submitBtn;
    closeModal();
    document.body.style.overflow = '';
    
    // تحديث رسالة النجاح بالترجمة الصحيحة
    document.getElementById('popupTitle').textContent = t.popupTitle;
    document.getElementById('popupMsg').textContent = t.popupMsg;
    document.querySelector('.popup-close').textContent = t.popupBtn;
    
    // إظهار نافذة النجاح
    document.getElementById('successPopup').classList.add('show');
    
    // بعد بيئة الإنتاج: أرسل البيانات إلى الخادم
    // const formData = {
    //   name: name.value,
    //   phone: phone.value,
    //   email: email.value,
    //   job: document.getElementById('fieldJob').value,
    //   experience: document.getElementById('fieldExp').value,
    //   notes: document.getElementById('fieldNote').value
    // };
    // fetch('/api/apply', { method: 'POST', body: JSON.stringify(formData) })
  }, 1200);
}

// ===== LOADER =====
// إخفاء محمل التحميل بعد تحميل الصفحة
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
  }, 1300);
});

// نهاية وحدة معالجة النماذج والنوافذ
