const COMPONENT_LIFECYCLE = {
  MOUNTING: 'COMPONENT_MOUNTING_PHASE',
  UPDATING: 'COMPONENT_UPDATING_PHASE',
  UNMOUNTING: 'COMPONENT_UNMOUNTING_PHASE'
};

let currentPhase = COMPONENT_LIFECYCLE.MOUNTING;

const iReactDOM = {
  render(element, container) {
    element.on('updatestate', () => {
      this.render(element, container);
    });

    switch (currentPhase) {
      case COMPONENT_LIFECYCLE.MOUNTING:
        if (element.componentWillMount) {
          element.componentWillMount();
        }

        container.innerHTML = element.render();

        if (element.componentDidMount) {
          element.componentDidMount();
        }

        currentPhase = COMPONENT_LIFECYCLE.UPDATING;

        break;
      case COMPONENT_LIFECYCLE.UPDATING:
        if (element.componentWillReceiveProps) {
          // TO DO: Pasar los nuevos props
          element.componentWillReceiveProps();
        }

        if (element.shouldComponentUpdate) {
          if (!element.shouldComponentUpdate()) {
            return;
          }
        }

        if (element.componentWillUpdate) {
          element.componentWillUpdate();
        }

        container.innerHTML = element.render();

        if (element.componentDidUpdate) {
          element.componentDidUpdate();
        }
        break;
      case COMPONENT_LIFECYCLE.UNMOUNTING:
        // TO DO
        break;
      default:
        break;
    }
  }
};

export default iReactDOM;
