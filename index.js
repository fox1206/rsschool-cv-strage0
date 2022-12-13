const audio = document.querySelector('.audio');
const iconMusic = document.querySelector('header .header-sound svg');
const sound = document.querySelector('.sound');
const off = document.querySelector('.sound-off');
const on = document.querySelector('.sound-on');
const links =  document.querySelectorAll('aside ul li a');

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

// ИНДИКАТОРЫ
const progress = [
  {
    name: 'HTML / CSS / Markdown',
    percent: 80,
    color: '#08FDD8',
  },
  {
    name: 'Tailwind / Material UI',
    percent: 71,
    color: '#FA9370',
  },
  {
    name: 'JavaScript / React',
    percent: 65,
    color: '#ec2f58',
  },
  {
    name: 'Git / GitHub',
    percent: 60,
    color: '#08FDD8',
  },
  {
    name: 'Java Core / Spring Boot',
    percent: 40,
    color: '#FA9370',
  },
  {
    name: 'MySQL',
    percent: 47,
    color: '#ec2f58',
  },
];

const boxSkills = document.querySelector('.box-skills ul');

progress.forEach(item => {
  const li = document.createElement('li');
  const contentLi = `<small>${item.name} - ${item.percent} %</small>
                    <svg viewbox="0 0 100% 10" width="100%" height="10">
                    <path d="M0,5 L500,5" stroke="#8D8D8D"></path>
                    <path class="fill" d="M0,5 L${item.percent*2},5" stroke="${item.color}" opacity="0.1" stroke-width="2"></path>
                    <path class="fill" d="M0,5 L${item.percent*2},5" stroke="${item.color}"></path>
                    `;

  li.innerHTML = contentLi;
  boxSkills.appendChild(li);
});

// МЕНЮ
const menuBtn = document.querySelector('.header .menu-icon span');
const closeBTN = document.querySelector('aside .close');
const leftMenu = document.querySelector('aside');

menuBtn.addEventListener('click', () => {
  leftMenu.style.display = 'block';
  leftMenu.style.zIndex = '30';
  menuBtn.style.display = 'none';
});

closeBTN.addEventListener('click', () => {
  leftMenu.style.display = 'none';
  menuBtn.style.display = 'block';
});

links.forEach(item => {
  item.addEventListener('click', () => {
    leftMenu.style.display = 'none';
    menuBtn.style.display = 'block';
  })
});