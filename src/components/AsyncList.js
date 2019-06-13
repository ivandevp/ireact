import iReact from '../../lib/iReact';

class AsyncHelloWorld extends iReact.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      loading: false
    };
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(resp => resp.json())
      .then(({ results }) => {
        this.setState({
          pokemons: results
        });
      })
      .catch(error => {
        console.log('error', error);
      });
  }

  componentDidUpdate() {
    const pokemons = document.querySelectorAll('p.pokemon');
    pokemons.forEach(pokemon => {
      pokemon.style.border = '1px solid blue';
    });

    if (!this.state.loading) {
      this.setState({
        loading: true
      });
    }
  }

  render() {
    return `
      <div class="pokemons" style="border: 2px dashed ${
        this.state.loading ? 'green' : 'red'
      };">
        ${this.state.pokemons
          .map(pokemon => `<p class="pokemon">${pokemon.name}</p>`)
          .join('<br />')}
      </div>
    `;
  }
}

export default AsyncHelloWorld;
