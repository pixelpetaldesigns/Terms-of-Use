(function () {
  var btn = document.getElementById('to-top');
  function toggle() { btn.hidden = window.scrollY < 500; }
  window.addEventListener('scroll', toggle, { passive: true });
  btn.addEventListener('click', function () {
    var calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: calm ? 'auto' : 'smooth' });
  });
  toggle();
})();
