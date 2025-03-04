export const ce = (tagName) => {
  const element = document.createElement(tagName);
  element.__proto__.append = function (...childs) {
    Element.prototype.append.call(this, ...childs);
    return this;
  };
  return element;
};

export const div = (className, textContent) => {
  const divElement = ce("div");
  divElement.className = className;
  divElement.textContent = textContent;
  return divElement;
};

export const input = (type, placeholder) => {
  const inputElement = ce("input");
  inputElement.type = type;
  inputElement.placeholder = placeholder;
  return inputElement;
};

export const th = (textContent) => {
  const thElement = ce("th");
  thElement.textContent = textContent;
  return thElement;
};
