import iReact from '../../lib/iReact';

class HelloWorld extends iReact.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        name: 'Laboratoria'
      });
    }, 3000);
  }

  render() {
    return `
      <h1>Hola ${this.state.name}</h1>
    `;
  }
}

export default HelloWorld;
