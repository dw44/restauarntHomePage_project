import {tools} from './tools';

export const header = (function() { 
  const root = document.createElement('header');
  const logoContainer = tools.createWithAttributes('div', null, 'menu-logo');
  const logo = document.createElement('img');
  const logoAttributes = [['src', './images/logo.png'], ['alt', 'Perkins']];

  logoAttributes.forEach(attr => {
    logo.setAttribute(attr[0], attr[1]);
  });

  logoContainer.appendChild(logo);

  const hamburger = tools.createWithAttributes('div', null, 'hamburger');

  for (let i = 1; i < 4; ++i) {
    const bar = tools.createWithAttributes('div', null, `hb-bar-${i}`);
    hamburger.appendChild(bar);
  }

  const navigation = tools.createWithAttributes('nav', 'hidden-mobile');
  const menuItems = ['Home', 'About', 'Menu', 'Contact'];
  menuItems.forEach(navItem => {
    const container = tools.createWithAttributes('div', 'menu-item', null, navItem);
    navigation.appendChild(container);
  });

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navigation.classList.toggle('hidden-mobile');
  });

  tools.addChildren(root, logoContainer, hamburger, navigation);

  return root;
})();

