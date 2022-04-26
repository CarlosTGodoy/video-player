const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $backward = document.querySelector('#backward');
const $forward = document.querySelector('#forward');
const $progress = document.querySelector('#range');

$play.addEventListener('click', handlePlay);
$pause.addEventListener('click', handlePause);
$backward.addEventListener('click', handleBackward);
$forward.addEventListener('click', handleForward);
$video.addEventListener('loadedmetadata', handleLoaded);
$video.addEventListener('timeupdate', handleTimeUpdate);

function handlePlay() {
  $video.play();
  $play.hidden = true;
  $pause.hidden = false;
  console.log('Le diste click al boton de Play');
}

function handlePause() {
  $video.pause();
  $pause.hidden = true;
  $play.hidden = false;
  console.log('Le diste click al boton de Pausa');
}

function handleBackward() {
  $video.currentTime -= 10;
  console.log('Retrocediste 10 segundos', $video.currentTime);
}

function handleForward() {
  $video.currentTime += 10;
  console.log('Avanzaste 10 segundos', $video.currentTime);
}

function handleLoaded() {
  $progress.max = $video.duration;
  console.log('Ha cargado el video', $video.duration);
}

function handleTimeUpdate() {
  $progress.value = $video.currentTime;
  // console.log('time', $video.currentTime);
}

$progress.addEventListener('input', handleInput);

function handleInput() {
  $video.currentTime = $progress.value;
}
