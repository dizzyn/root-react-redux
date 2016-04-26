import React from 'react';

//Komponenty
import Item from './Item';
import Form from './Form';

export default class App extends React.Component {

  //okamžik v životním cyklu komponenty před prvním renderováním
  componentWillMount() {
    this.changeState() //úvodní načtení stavu
    this.props.store.subscribe(this.changeState.bind(this)); //aktualizace stavu
  }

  //uložíme data pro renderování do 'state', render se zavolá automaticky
  changeState() {
    this.setState({todos: this.props.store.getState()});
  }

  //vykreslíme komponenty
  render() {
    //vytvoříme pro každou todo položku její DOM vyjádření
    var items = [];
    for (var i = 0; i < this.state.todos.length; i++) {
      items.push(<Item key={i} store={this.props.store} text={this.state.todos[i]} id={i}/>);
    }

    return (<div>
              <ul>{items}</ul>
              <Form store={this.props.store}/>
            </div>);
  }
};
