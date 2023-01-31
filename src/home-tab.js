const CONTENT_DIV = document.getElementById('content');
const dynamicContentContainer= document.querySelector('.dynamic-content__container');
const HOME_TAB_BUTTON = document.getElementById('home-tab__button');
const MEALS_TAB_BUTTON = document.getElementById('meals-tab__button');

const home_tab_content = (div) => {
  const infos_container = document.createElement('div');
  div.appendChild(infos_container);
  const title = document.createElement('div');
  title.classList.add('home-page__title');
  title.textContent = 'Welcome to Go! Sushis';
  infos_container.appendChild(title);
  const infos = document.createElement('div');
  infos.classList.add('home-page__infos');
  infos.textContent = 'We serve the best sushis this side of the ocean!';
  const infos_selling = document.createElement('div');
  infos_selling.classList.add('home-page__infos');
  infos_selling.textContent = 'Come visit us or give us a call to order your sushis and get them fresh in less than an hour.';
  infos_container.appendChild(infos);
  infos_container.appendChild(infos_selling);
  const infos_adress = document.createElement('div');
  infos_adress.textContent = '1274 Golf Club Rd, Las Cruces NY88011';
  infos_adress.classList.add('home-page__infos');
  div.appendChild(infos_adress);
  const infos_telephone = document.createElement('div');
  infos_telephone.classList.add('home-page__infos');
  infos_telephone.textContent = '(575) 521-1826';
  div.appendChild(infos_telephone);

  const order_container = document.createElement('div');
  order_container.classList.add('order-container');
  div.appendChild(order_container);
  const reservation = document.createElement('div');
  reservation.textContent = 'Make a reservation:';
  order_container.appendChild(reservation);
  const reservation_telephone = document.createElement('div');
  reservation_telephone.textContent = 'Give us a call: (575) 521-1826 or send us an email: gosushis@makimail.com';
  reservation.appendChild(reservation_telephone);
  const online_order = document.createElement('div');
  online_order.classList.add('online-order__container');
  online_order.textContent = 'You can also order from our website:';
  order_container.appendChild(online_order);
  const order_button = document.createElement('button');
  order_button.textContent = 'ORDER NOW';
  online_order.appendChild(order_button);

};

export { home_tab_content };