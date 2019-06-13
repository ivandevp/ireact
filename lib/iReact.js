import { EventEmitter } from 'events';

class Component extends EventEmitter {
  constructor(props) {
    super();
    this.props = props;
  }

  setState(partialState) {
    this.state = Object.assign({}, this.state, partialState);
    this.emit('updatestate', this.state);
  }
}

const iReact = {
  Component
};

export default iReact;
