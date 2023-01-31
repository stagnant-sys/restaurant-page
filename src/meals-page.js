const CONTENT_DIV = document.getElementById('content');
const dynamicContentContainer= document.querySelector('.dynamic-content__container');

const meals_tab_content = (div) => {
  const meals_page_content = document.createElement('div');
  meals_page_content.classList.add('meals-page__content-wrapper');
  div.appendChild(meals_page_content);
};

let createMeal = (name, description, price, image) => {
  const meals_page_content = document.querySelector('.meals-page__content-wrapper');
  const meal_container = document.createElement('div');
  meal_container.classList.add('meal-container');
  meals_page_content.appendChild(meal_container);

  const meal_image = document.createElement('img');
  meal_image.classList.add('meal-image');
  meal_image.src = image;
  meal_container.appendChild(meal_image);

  const meal_name = document.createElement('div');
  meal_name.classList.add('meal-name');
  meal_name.textContent = name;
  meal_container.appendChild(meal_name);

  const meal_desc = document.createElement('div');
  meal_desc.classList.add('meal-description');
  meal_desc.textContent = description;
  meal_container.appendChild(meal_desc);

  const meal_price = document.createElement('div');
  meal_price.classList.add('meal-price');
  meal_price.textContent = '$ ' + price;
  meal_container.appendChild(meal_price);
};

export { meals_tab_content, createMeal };