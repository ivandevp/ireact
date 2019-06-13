import iReactDOM from '../lib/iReact.DOM';
import HelloWorld from './components/HelloWorld';

iReactDOM.render(
  new HelloWorld({ name: 'Ivan' }),
  document.querySelector('#root')
);
