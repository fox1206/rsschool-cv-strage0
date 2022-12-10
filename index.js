const audio = document.querySelector('.audio');
const iconMusic = document.querySelector('.container svg');
const sound = document.querySelector('.sound');
const off = document.querySelector('.sound-off');
const on = document.querySelector('.sound-on');
const links =  document.querySelectorAll('.aside .links ul li a');

function playMusic(){
  audio.play();
}

function pauseMusic(){
  audio.pause();
}

function runMusic(){
  audio.paused ? playMusic() : pauseMusic();
}

sound.addEventListener('click', () => {
  iconMusic.classList.toggle('change');
  on.classList.toggle('change');
  off.classList.toggle('change');
  runMusic();
});

// ССЫЛКИ
links.forEach((el) => {
  el.addEventListener('click', () => {
    removeActive();
    el.classList.add('active');
  });
});

function removeActive(){
  links.forEach(el => 
    el.classList.remove('active')
  );
}

