import React from 'react';

export default class Todos extends React.Component {

  handleClick() {
      this.props.store.dispatch({ type: 'REMOVE', id: this.props.id })
  }

  render() {
    return <li><button onClick={this.handleClick.bind(this)}>X</button> {this.props.text}</li>; //na místo bind() můžete použit tzv. 'Arrow functions' z ES6
  }
};
