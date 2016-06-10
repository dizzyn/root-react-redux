import { createStore } from 'redux';  //webpack sáhne pro redux do nainstalovaných NPM balíčků a zpřístupní z něj veřejnou funkci 'createStore'
import React from 'react';
import ReactDOM from 'react-dom';

//Zobrazovací komponenta
import App from './components/App';

//tohle je úvodní stav reduceru, dáme do něj dva úkoly
var initialState = ["První úkol", "Druhý úkol"];

/** Toto je náš reducer - volá se pomocí dispatch(action)
* @param Object state Aktuální state reduceru (současný stav)
* @param Object action Akce na kterou jsme zavolali dispatch() (data změny + identifikace akce)
* @return Object Vracíme nový stav
*/
function todo(state = initialState, action) { //zde využíváme 'defaultní hodnotu parametru' z ES6,
                                              // použije se při prvním zavolání reduceru, kdy je state undefined
  switch (action.type) {
    case 'ADD':
      //využijeme Spread ES6 vlastnost a vložíme pole s aktuálním stavem reduceru
      // do nového pole s novým úkolem - změna je 'immutable'
      return [...state, action.text]

    case 'REMOVE':
      //pomocí splice() odebereme prvek z pole, ktere jsem si nejprve zkopírovali
      // pomocí ES6 Spread direktivy
      var newState = [...state]
      newState.splice(action.id, 1);
      return newState;

    default:
      //Vracíme stav objektu bezezměny,
      // akce patrně byla učena pro jiný reducer
      return state
  }
}

// Vytvoříme si náš Store objekt s jediným reducerem.
// Můžeme na něm volat ouze 3 funkce:
// - subscribe, getState - pro zjištění stavu aplikace
// - dispatch - pro změnu stavu aplikace
var store = createStore(todo);


//Zobrazovací komponenta je vložena do elementu #root

/** Odebrání položky TODO listu
* @param Number Id položky k odstranění
*/
var removeItem = function(id) {
  store.dispatch({ type: 'REMOVE', id: id }); //odstraníme druhý úkol
}

/** Přidání položky TODO listu
* @param String Text
*/
var addItem = function(text) {
  store.dispatch({ type: 'ADD', text: text });
}

ReactDOM.render(<App removeItem={removeItem} addItem={addItem} store={store}/>, document.getElementById("root"));



// Toto je jediný způsob jak měnit stav aplikace. Objekt který vkládáme
// se jmenuje akce a obsahuje identifikaci a data potřebná pro provedení akce.
store.dispatch({ type: 'ADD', text: "Třetí úkol" }); //vložíme dva úkoly
store.dispatch({ type: 'ADD', text: "Čtvrtý úkol" });
store.dispatch({ type: 'REMOVE', id: 1 }); //odstraníme druhý úkol
