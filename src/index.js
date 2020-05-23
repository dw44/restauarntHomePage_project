import {header} from './menu';

const entryPoint = document.getElementById('content');

entryPoint.appendChild(header);

window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
    document.getElementById('hamburger').classList.remove("open");
    document.querySelector('nav').classList.add('hidden-mobile');      
  }
});