import React from 'react';

//Komponenty
import Item from './Item';
import Form from './Form';

export default class App extends React.Component {

  //uložíme data pro renderování do 'state', render se zavolá automaticky
  updateState() {
    this.setState({todos: this.props.store.getState()});
  }

  //okamžik v životním cyklu komponenty před prvním renderováním
  componentWillMount() {
    this.updateState() //úvodní načtení stavu
    this.props.store.subscribe(this.updateState.bind(this)); //aktualizace stavu
  }

  render() {
    //V props je uložena funkce na odebírání úkolů
    var removeItem = this.props.removeItem;

    //vytvoříme pro každou todo položku její DOM vyjádření
    var items = this.state.todos.map(function(todo, id) {
      return <Item key={id} text={todo} removeItem={function() { removeItem(id) }}/>
    });

    //vykreslíme komponenty
    return (<div>
              <ul>{items}</ul>
              <Form addItem={this.props.addItem}/>
            </div>);
  }
};
