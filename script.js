function menuToggle() {
  const main = document.getElementsByTagName('main')[0];
  const menuButton = document.querySelector('.toggle-button');

  menuButton.addEventListener('click', () => {
    main.classList.toggle('active');
    //Redimensionamento do fórum ao abrir o menu
    if(document.querySelector('main').classList.contains('active')){
      resize();
    } else {
      normal();
    }
  });
}

function navigation() {
  const img = document.querySelector('#current-user-id');
  const arrowLeft = document.querySelector('#arrow-left');
  const arrowRight = document.querySelector('#arrow-right');
  const imgAdd = document.querySelector('#add');
  let counter = 1;


  arrowLeft.addEventListener('click', () => {
    counter === 1 ? counter = 1 : counter--;
    img.src = `../assets/img${counter}.png`;
  });

  arrowRight.addEventListener('click', () => {
    counter === 5 ? counter = 5 : counter++;
    img.src = `../assets/img${counter}.png`;
  });

  img.addEventListener('mouseover', () => {
    imgAdd.classList.add('active');
  });

  img.addEventListener('mouseout', () => {
    imgAdd.classList.remove('active');
  });

  imgAdd.addEventListener('mouseover', () => {
    imgAdd.classList.add('active');
  });

  imgAdd.addEventListener('mouseout', () => {
    imgAdd.classList.remove('active');
  });
}

function init() {
  menuToggle();
  navigation();
}

init();