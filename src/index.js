import './style.css';
import { headerDOMLoad, tabsDOMLoad, dynamicContentContainerLoad, footerDOMLoad } from './page-load';
import { home_tab_content } from './home-tab';
import { meals_tab_content, createMeal } from './meals-page';

const CONTENT_DIV = document.getElementById('content');
const image_path = './images/meals/';
const lorem_ipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

headerDOMLoad();  // Load static content of the page
tabsDOMLoad();
dynamicContentContainerLoad();
footerDOMLoad();
const HOME_TAB_BUTTON = document.getElementById('home-tab__button');
const MEALS_TAB_BUTTON = document.getElementById('meals-tab__button');
const dynamicContentContainer = document.getElementById('dynamic-content__container');

// Load home tab on startup
home_tab_content(dynamicContentContainer);
HOME_TAB_BUTTON.classList.add('selected');

// Create dynamic content when a tab is clicked
HOME_TAB_BUTTON.addEventListener('click', () => {
  HOME_TAB_BUTTON.classList.add('selected');
  MEALS_TAB_BUTTON.classList.remove('selected');
  dynamicContentContainer.textContent = '';
  home_tab_content(dynamicContentContainer);
});
MEALS_TAB_BUTTON.addEventListener('click', () => {
  MEALS_TAB_BUTTON.classList.add('selected');
  HOME_TAB_BUTTON.classList.remove('selected');
  dynamicContentContainer.textContent = '';
  meals_tab_content(dynamicContentContainer);
  createMeal('Gyoza', 'Our finest steamed dumpling filled with a minced pork stuffing.', 4, image_path + 'dumpling.png');
  createMeal('Maki', 'Juicy rice rolled in seaweed, complete with your choice of filling (crab, tuna, salmon, vegetables).', 5, image_path + 'maki.png');
  createMeal('Egg Nigiri', 'A delicious nigiri topped with a slice of omelette.', 3, image_path + 'nigiri-egg.png');
  createMeal('Salmon Nigiri', 'An exquisite nigiri topped with salmon sashimi.', 4, image_path + 'nigiri-salmon.png');
  createMeal('Squid Nigiri', 'A luscious nigiri topped with fresh squid.', 3, image_path + 'nigiri-squid.png');
  createMeal('Sashimi', 'A yummy selection of our best sashimis (bonito, salmon, bluefin tuna).', 9, image_path +'sashimi.png');
  createMeal('Shrimp tempura', 'Lightly battered and deep fried shrimps.', 7, image_path + 'tempura.png');
  createMeal('Wasabi', 'Get your tongue lit up with our authentic wasabi paste, ready to accompany any of our meals.', 1, image_path + 'wasabi.png');
  createMeal('Pudding', 'End your meal on a sweet note with our delicious pudding.', 5, image_path + 'pudding.png');
});

