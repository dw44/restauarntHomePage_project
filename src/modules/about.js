import {tools} from './tools';

export const about = (function() {
  const headingText = '-- About Us --';
  const aboutText = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo totam obcaecati nisi quod, ' + 
    'accusantium unde necessitatibus excepturi laborum, nostrum quibusdam quasi. Adipisci, consequatur consequuntur? ' +
    'Mollitia totam autem tempore labore quo sunt quam tempora expedita nisi voluptatibus nemo error quaerat porro itaque alias, ' + 
    'ea possimus asperiores? Dolor, quos. Minima tempore provident reiciendis rerum praesentium quo totam, nihil ipsum quae sint ' + 
    'non, atque nulla eum dolore a explicabo, veniam fuga inventore. Magni deserunt odit quam tempore odio expedita commodi officia, ' +
    'ullam nulla, explicabo ut omnis assumenda aspernatur voluptate quis pariatur minus qui?';

  const root = tools.createWithAttributes('section', 'hidden', 'about');
  const aboutCard = tools.createWithAttributes('div', null, 'about-card');
  const heading = tools.createWithAttributes('h2');
  const aboutUs = tools.createWithAttributes('p');

  heading.textContent = headingText;
  aboutUs.textContent = aboutText;

  tools.addChildren(aboutCard, heading, aboutUs);
  tools.addChildren(root, aboutCard);

  return root;
})();

