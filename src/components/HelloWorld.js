import iReact from '../../lib/iReact';

class HelloWorld extends iReact.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name
    };
  }

  render() {
    this.setState({
      name: 'Laboratoria'
    });

    return `
      <h1>Hola ${this.state.name}</h1>
    `;
  }
}

export default HelloWorld;
