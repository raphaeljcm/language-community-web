function menuToggle() {
  const main = document.getElementsByTagName('main')[0];
  const menuButton = document.querySelector('.toggle-button');
  const searchInput = document.querySelector('.search input');
  const searchDiv = document.querySelector('.search');

  searchInput.focus();

  menuButton.addEventListener('click', () => {
    main.classList.toggle('active');
  });

  searchInput.addEventListener('focus', () => {
    if(main.classList.contains('active')) {
      searchDiv.classList.toggle('active');
    } 
  });

  searchInput.addEventListener('focusout', () => {
    searchDiv.classList.remove('active');
    searchDiv.children[0].value = "";
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