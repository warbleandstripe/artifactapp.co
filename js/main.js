(function() {
  var play  = document.getElementsByClassName('play-video')[0];
  var movie = document.getElementsByClassName('preview-video')[0];
  var video = document.getElementsByClassName('preview-video-movie')[0];

  function showMovie() {
    movie.classList.add('visible');
    video.play();
  }

  function hideMovie() {
    movie.classList.remove('visible');
    video.pause();
    video.currentTime = 0;
  }

  function boot() {
    play.addEventListener('click', showMovie);
    movie.addEventListener('click', hideMovie);
  }

  boot();
  
})();


