import React from 'react';

//formulář pro vkládání nových záznamů
export default class Form extends React.Component {

  render() {
    var input; //sem si uložíme odkaz na input

    //V props je uložena funkce na přidávání úkolů
    var addItem = this.props.addItem;

    return (<div>
              <input ref={function(ref) {
                input = ref; //uložíme si referenci na tuto komponentu pro pozdější použití
              }}/>
              <button onClick={function() {
                 addItem(input.value); //vytáhneme data z inputu (máme jej uložen) a odešleme je
                 input.value = ""; //vyprázdníme input
                }}>Vložit</button>
            </div>);
  }
};
