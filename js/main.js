var rellax = new Rellax('.parallax', {
  speed: -2,
  center: true
});

document.getElementById('openNav').addEventListener('click', function() {
  document.querySelector('.nav').classList.toggle('open');
});
