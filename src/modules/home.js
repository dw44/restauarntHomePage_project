import {tools} from './tools';

export const home = (function() {
  const root = tools.createWithAttributes('section', null, 'home');
  const welcome = tools.createWithAttributes('h1', null, 'welcome');
  welcome.textContent = 'WELCOME TO PERKINS';

  root.appendChild(welcome);
  return root;
})();