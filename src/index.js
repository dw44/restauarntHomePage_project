import {header} from './modules/header';
import {home} from './modules/home';
import {about} from './modules/about';
import {menu} from './modules/menu';
import {contact} from './modules/contact';
import {tools} from './modules/tools';


(function main() {

  const pageElements = [header, home, about, menu, contact];
  const entryPoint = document.getElementById('content');
  tools.addChildren(entryPoint, ...pageElements);

  const hamburger = document.getElementById('hamburger');
  const navbar = document.querySelector('nav');

  const pages = [
    document.getElementById('home'),
    document.getElementById('about'),
    document.getElementById('menu'),
    document.getElementById('contact-us')
  ];

  const navigationItems = document.getElementsByClassName('menu-item');

  const hamburgerHandler = function() {
    hamburger.classList.remove("open");
    navbar.classList.add('hidden-mobile');
  }

  for (let i = 0; i < 4; ++i) {
    navigationItems[i].addEventListener('click', function() {
      navigationItems[i].classList.add('active');
      pages[i].classList.remove('hidden');
      for (let j = 0; j < 4; ++j) {
        if (j !== i) {
          navigationItems[j].classList.remove('active');
          pages[j].classList.add('hidden');
        }
      }
      hamburgerHandler();
    });
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
      hamburgerHandler();
    }
  });
})();




