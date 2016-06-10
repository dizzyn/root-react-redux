import React from 'react';

//reprezentace jediné položky listu
export default class Item extends React.Component {

  render() {
    return <li>{this.props.text} <button onClick={this.props.removeItem}>&#10006;</button></li>;
  }
};
