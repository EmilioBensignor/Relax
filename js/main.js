document.getElementById('openNav').addEventListener('click', function() {
  document.querySelector('.nav').classList.toggle('open');
});

window.addEventListener('scroll', function() {
  var header = document.querySelector('.header');
  var scrollTop = window.scrollY || document.documentElement.scrollTop;
  var maxScroll = 500;
  var opacity = 1 - (scrollTop / maxScroll);

  if (opacity < 0) opacity = 0;
  if (opacity > 1) opacity = 1;

  header.style.opacity = opacity;

  // Verificación
  console.log('ScrollTop:', scrollTop, 'Opacity:', opacity);
});
