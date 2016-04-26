import React from 'react';

//vytvořime formulář pro vkládání nových záznamů
export default class Form extends React.Component {

  handleSave() {
    this.props.store.dispatch({ type: 'ADD', task: this.state.newTask }); //
  }

  handleChange(event) {
    this.setState({newTask: event.target.value});
  }

  render() {
    return (<div>
              <input onChange={this.handleChange.bind(this)}/>
              <button onClick={this.handleSave.bind(this)}>Vložit</button>
            </div>);
  }
};
