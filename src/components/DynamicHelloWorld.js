import iReact from '../../lib/iReact';

class HelloWorld extends iReact.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  handleChange(event) {
    alert('Evento del input');
  }

  render() {
    return `
      <input type="text" onchange="${this.handleChange}" value="${this.state.name}" />
      <h1>Hola ${this.state.name}</h1>
    `;
  }
}

export default HelloWorld;
