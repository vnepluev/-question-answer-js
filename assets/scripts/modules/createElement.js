const createElement = (tag, options) => {
  const el = document.createElement(tag);
  Object.assign(el, options);
  return el;
};

export default createElement;
