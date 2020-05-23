import {header} from './modules/header';
import {home} from './modules/home';
import {about} from './modules/about';

const pageElements = [header, home, about];

const entryPoint = document.getElementById('content');

for (const element of pageElements) {
  entryPoint.appendChild(element);
}

window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
    document.getElementById('hamburger').classList.remove("open");
    document.querySelector('nav').classList.add('hidden-mobile');      
  }
});





