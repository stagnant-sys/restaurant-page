import './style.css';
import { createBodyElement } from './createElements';
import { headerDOMLoad, tabsDOMLoad, dynamicContentContainerLoad } from './page-load';
import { home_tab_content } from './home-tab';
import { meals_tab_content, createMeal } from './meals-page';

const CONTENT_DIV = document.getElementById('content');


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
  createMeal('Maki', 'De savoureux makis', 5, '../src/images/meals/maki.png');
  createMeal('Dumpling', 'Savourous dumplings', 4, '../src/images/meals/dumpling.png');
});

