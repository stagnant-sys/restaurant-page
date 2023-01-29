let createBodyElement = (elementType, elementContent, parentElement) => {
  let newElement = document.createElement(elementType);
  newElement.textContent = elementContent;
  parentElement.appendChild(newElement);
};

export { createBodyElement };