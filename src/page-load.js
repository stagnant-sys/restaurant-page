const CONTENT_DIV = document.getElementById('content');

const headerDOMLoad = () => {
  const header_container = document.createElement('header');
  CONTENT_DIV.appendChild(header_container);

  const logo_container = document.createElement('div');
  logo_container.classList.add('logo-container');
  header_container.appendChild(logo_container);
  const text_logo = document.createElement('h1');
  text_logo.textContent='G⬤! Sushis';
  logo_container.appendChild(text_logo);
  const image_logo = document.createElement('img');
  image_logo.classList.add('header-logo__image');
  image_logo.src = '../src/images/logo.svg';
  logo_container.appendChild(image_logo);

  const catchphrase_container = document.createElement('div');
  catchphrase_container.classList.add('catchphrase');
  catchphrase_container.textContent=`Faster than you can say '竜宮の乙姫の元結の取り外し'!`;
  header_container.appendChild(catchphrase_container);
};

const tabsDOMLoad = () => {
  const tabs_container = document.createElement('div');
  tabs_container.classList.add('tabs-container');
  CONTENT_DIV.appendChild(tabs_container);

  const home_tab = document.createElement('div');
  home_tab.classList.add('content-tab');
  home_tab.setAttribute('id', 'home-tab__button');
  home_tab.textContent = 'Our restaurant';
  tabs_container.appendChild(home_tab);

  const meals_tab = document.createElement('div');
  meals_tab.classList.add('content-tab');
  meals_tab.setAttribute('id', 'meals-tab__button');
  meals_tab.textContent = 'Our meals';
  tabs_container.appendChild(meals_tab);
};

const dynamicContentContainerLoad = () => {
  const dynamicContentContainer = document.createElement('div');
  dynamicContentContainer.setAttribute('id', 'dynamic-content__container');
  CONTENT_DIV.appendChild(dynamicContentContainer);
};

export { headerDOMLoad, tabsDOMLoad, dynamicContentContainerLoad };