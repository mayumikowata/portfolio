// Smooth 'Back to top' for all buttons with id starting with backToTop
document.querySelectorAll('[id^="backToTop"]').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({top:0, behavior:'smooth'});
  });
});
