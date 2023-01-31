let createBodyElement = (elementType, elementClass, elementContent, parentElement) => {
  let newElement = document.createElement(elementType);
  newElement.classList.add(elementClass);
  newElement.textContent = elementContent;
  parentElement.appendChild(newElement);
};

export { createBodyElement };