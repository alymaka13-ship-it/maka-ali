/* ===== JOBS SECTION JAVASCRIPT ===== */
/* وظائف قسم الوظائف المتخصصة */

document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const jobCards = document.querySelectorAll('.job-card');

  function applyFilter(category) {
    jobCards.forEach((card) => {
      const cardCategory = card.dataset.category;
      const isVisible = category === 'all' || cardCategory === category;
      card.style.display = isVisible ? 'flex' : 'none';
    });
  }

  filterButtons.forEach((button) => {
    button.addEventListener('click', function() {
      filterButtons.forEach((btn) => btn.classList.remove('active'));
      this.classList.add('active');
      applyFilter(this.dataset.filter);
    });
  });

  // افتراضيًا نعرض الكل
  applyFilter('all');
});

function showCategory(category) {
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.filter === category);
  });

  const jobCards = document.querySelectorAll('.job-card');
  jobCards.forEach((card) => {
    const cardCategory = card.dataset.category;
    card.style.display = cardCategory === category ? 'flex' : 'none';
  });
}

// نهاية وحدة الوظائف
