class Component {
  constructor(props) {
    this.props = props;
  }

  setState(partialState) {
    this.state = Object.assign({}, this.state, partialState);
  }
}

const iReact = {
  Component
};

export default iReact;
