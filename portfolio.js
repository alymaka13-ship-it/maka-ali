/* ===== PORTFOLIO SLIDER ===== */

const portfolioTrack = document.querySelector('.slider-track');

if (portfolioTrack) {
  const cardWidth = () => {
    const card = portfolioTrack.querySelector('.portfolio-card');
    if (!card) return 0;
    const style = window.getComputedStyle(portfolioTrack);
    const gap = parseInt(style.columnGap || style.gap || '0', 10) || 0;
    return card.getBoundingClientRect().width + gap;
  };

  const isRTL = () => document.documentElement.dir === 'rtl';

  const autoScroll = () => {
    const maxScroll = portfolioTrack.scrollWidth - portfolioTrack.clientWidth;
    const rtl = isRTL();
    const current = portfolioTrack.scrollLeft;
    const atEnd = rtl
      ? Math.abs(current) >= maxScroll - 4
      : current >= maxScroll - 4;

    if (atEnd) {
      portfolioTrack.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      portfolioTrack.scrollBy({ left: rtl ? -cardWidth() : cardWidth(), behavior: 'smooth' });
    }
  };

  let autoScrollTimer = null;

  const startAutoScroll = () => {
    if (autoScrollTimer) return;
    autoScrollTimer = setInterval(autoScroll, 2000);
  };

  const stopAutoScroll = () => {
    clearInterval(autoScrollTimer);
    autoScrollTimer = null;
  };

  portfolioTrack.addEventListener('mouseenter', stopAutoScroll);
  portfolioTrack.addEventListener('mouseleave', startAutoScroll);

  window.addEventListener('resize', () => {
    stopAutoScroll();
    startAutoScroll();
  });

  startAutoScroll();
}
