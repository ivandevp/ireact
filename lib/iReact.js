import { EventEmitter } from 'events';

const attributesMap = {
  className: 'class'
};

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

const createElement = (type, props, ...children) => {
  if (typeof type === 'function') {
    if (type.toString().indexOf('class') > -1) {
      return new type().render();
    }

    return type();
  }

  const domEl = document.createElement(type);

  Object.entries(props || {}).forEach(([attribute, value]) => {
    if (attribute.startsWith('on')) {
      domEl.addEventListener(attribute.substr(2).toLowerCase(), value);
    } else if (attribute === 'style') {
      Object.keys(value).forEach(styleName => {
        domEl.style[styleName] = value[styleName];
      });
    } else {
      const attributeName = attributesMap[attribute] || attribute;
      domEl.setAttribute(attributeName, value);
    }
  });

  children.forEach(child => {
    let childDomEl;

    if (typeof child === 'string') {
      childDomEl = document.createTextNode(child);
    } else if (child instanceof HTMLElement) {
      childDomEl = child;
    }

    domEl.appendChild(childDomEl);
  });

  return domEl;
};

const iReact = {
  Component,
  createElement
};

export default iReact;
