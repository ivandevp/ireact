class HelloWorld {
  constructor(props) {
    this.props = props;
  }

  render() {
    return `
      <h1>Hola ${this.props.name}</h1>
    `;
  }
}

export default HelloWorld;
