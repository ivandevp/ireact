const iReactDOM = {
  render(element, container) {
    element.on('updatestate', () => {
      this.render(element, container);
    });

    container.innerHTML = element.render();
  }
};

export default iReactDOM;
