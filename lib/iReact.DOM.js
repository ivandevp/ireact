const iReactDOM = {
  render(element, container) {
    container.innerHTML = element.render();
  }
};

export default iReactDOM;
