function menuToggle() {
  const main = document.getElementsByTagName('main')[0];
  const menuButton = document.querySelector('.toggle-button');
  const searchInput = document.querySelector('.search input');
  const searchDiv = document.querySelector('.search');

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

menuToggle();