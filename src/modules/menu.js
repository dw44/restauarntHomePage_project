import {tools} from './tools';

export const menu = (function() {
  const root = tools.createWithAttributes('section', 'hidden', 'menu');
  const menuTitle = tools.createWithAttributes('h1', null, 'menu-title', 'Menu');

  const menuItems = [
    {index: 1, name: 'Chicken Fried Steak', description: 'A succulent piece of chicken breast, battered, flattened, and pan fried until crispy.', price: '$19.99'},
    {index: 2, name: 'Cheesburger', description: '8 oz. Wagyu patty, done to perfection, served with Swiss cheese and mushrooms.', price: '$14.99'},
    {index: 3, name: 'Tenderloin Steak', description: 'USDA prime filet steak, served with sauteed vegetables and mushroom sauce.', price: '$59.99'},
    {index: 4, name: 'Russian Salad', description: 'Potatos, chicken, almonds, green peas, and apples, served with mayonnaise.', price: '$9.49'},
    {index: 5, name: 'Shrimp Gumbo', description: 'Tiger shrimp, cooked with sausages and vegetables in a traditional recipe.', price: 'Price: $17.99'},
    {index: 6, name: 'Gourmet HotDog', description: '2 Bratwurst sausages, served with sauerkraut and Dijon mustard.', price: '$18.99'},
    {index: 7, name: 'Steak Frites', description: 'Steak, served with Belgian style fries.', price: '$49.99'},
    {index: 8, name: 'Grilled Shrimp', description: 'A kilogram of lightly spiced shrimps, grilled to perfection.', price: '$69.99'},
    {index: 9, name: 'Fish and Chips', description: 'Beer battered halibut, fried until golden, served with steak-cut fries.', price: '$39.99'},
    {index: 10, name: 'Apple', description: 'A single, unrefrigerated, year old apple. May or may not have gone bad.', price: '$999.99'}
  ];

  const menu = menuItems.map(item => {
    const container = tools.createWithAttributes('div', 'food-menu-item');
    const dish = tools.createWithAttributes('h3', 'dish', null, `${item.index} - ${item.name}`);
    const description = tools.createWithAttributes('p', 'dish-description', null, item.description);
    const price = tools.createWithAttributes('h6', 'price', null, `Price: ${item.price}`);
    tools.addChildren(container, dish, description, price);
    return container; 
  });

  tools.addChildren(root, menuTitle, ...menu);
  return root;
})();