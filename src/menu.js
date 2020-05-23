export const header = (function() { 
  const root = document.createElement('header');

  const logoContainer = document.createElement('div');
  logoContainer.setAttribute('id', 'menu-logo');

  const logo = document.createElement('img');
  const logoAttributes = [['src', './images/logo.png'], ['alt', 'Perkins']];

  logoAttributes.forEach(attr => {
    logo.setAttribute(attr[0], attr[1]);
  });

  logoContainer.appendChild(logo);

  const hamburger = document.createElement('div');
  hamburger.setAttribute('id', 'hamburger');
  hamburger.addEventListener('click', hamburgerClick);

  for (let i = 1; i < 4; ++i) {
    const bar = document.createElement('div');
    bar.setAttribute('id', `hb-bar-${i}`);
    hamburger.appendChild(bar);
  };

  const navigation = document.createElement('nav');
  navigation.classList.add('hidden-mobile');
  const menuItems = ['Home', 'About', 'Menu', 'Contact'];
  menuItems.forEach(navItem => {
    const container = document.createElement('div');
    container.classList.add('menu-item');
    container.textContent = navItem;
    navigation.appendChild(container);
  });


  root.appendChild(logoContainer);
  root.appendChild(hamburger);
  root.appendChild(navigation);

  return root;

})();

function hamburgerClick() {
  document.getElementById('hamburger').classList.toggle('open');
  document.querySelector('nav').classList.toggle('hidden-mobile');
}