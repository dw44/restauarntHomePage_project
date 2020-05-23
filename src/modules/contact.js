import {tools} from './tools';

export const contact = (function() {
  const root = tools.createWithAttributes('section', 'hidden', 'contact-us');

  const addressCard = tools.createWithAttributes('div', 'contact-card');
  const hoursCard = tools.createWithAttributes('div', 'contact-card');
  const phoneCard = tools.createWithAttributes('div', 'contact-card');

  const location = tools.createWithAttributes('h3', null, null, 'Location');
  const address = tools.createWithAttributes('p', null, null, '125 Red Mist Street, Red Mist');
  tools.addChildren(addressCard, location, address);

  const openingHours = tools.createWithAttributes('h3', null, null, 'Opening Hours');
  const weekdayHours = tools.createWithAttributes('p', null, null, 'Monday - Friday | 9am - 1am');
  const weekendHours = tools.createWithAttributes('p', null, null, 'Saturday - Sunday | 10am - 3am');
  tools.addChildren(hoursCard, openingHours, weekdayHours, weekendHours);


  const phone = tools.createWithAttributes('h3', null, null, 'Phone Number');
  const contactNumber = tools.createWithAttributes('p', null, null, '123-456-7890');
  tools.addChildren(phoneCard, phone, contactNumber);

  tools.addChildren(root, addressCard, hoursCard, phoneCard);
  return root;
})();