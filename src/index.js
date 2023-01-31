import './style.css';
import { createBodyElement } from './createElements';
import { headerDOMLoad, tabsDOMLoad, dynamicContentContainerLoad } from './page-load';
import { home_tab_content } from './home-tab';
import { meals_tab_content, createMeal } from './meals-page';

const CONTENT_DIV = document.getElementById('content');
const image_path = './images/meals/';
const lorem_ipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

headerDOMLoad();  // Load static content of the page
tabsDOMLoad();
dynamicContentContainerLoad();
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
  createMeal('Dumpling', lorem_ipsum, 4, image_path + 'dumpling.png');
  createMeal('Maki', lorem_ipsum, 5, image_path + 'maki.png');
  createMeal('Egg Nigiri', lorem_ipsum, 3, image_path + 'nigiri-egg.png');
  createMeal('Salmon Nigiri', lorem_ipsum, 3, image_path + 'nigiri-salmon.png');
  createMeal('Squid Nigiri', lorem_ipsum, 3, image_path + 'nigiri-squid.png');
  createMeal('Sashimi', lorem_ipsum, 9, image_path +'sashimi.png');
  createMeal('Tempura', lorem_ipsum, 7, image_path + 'tempura.png');
  createMeal('Wasabi', lorem_ipsum, 1, image_path + 'wasabi.png');
  createMeal('Pudding', lorem_ipsum, 5, image_path + 'pudding.png');
});

