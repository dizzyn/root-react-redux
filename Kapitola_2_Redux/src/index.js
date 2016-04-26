import { createStore } from 'redux'; //ES6 import module

//tohle je úvodní stav reduceru, dáme do něj dva úkoly
var initialState = ["První úkol", "Druhý úkol"];

/** Toto je náš reducer - volá se pomocí dispatch(action)
* @param Object state Aktuální state reduceru (současný stav)
* @param Object action Akce na kterou jsme zavolali dispatch() (data změny + identifikace akce)
* @return Object Vracíme nový stav
*/
function todo(state = initialState, action) { //zde využíváme 'defaultní hodnotu parametru' z ES6
  switch (action.type) {
    case 'ADD':
      //využijeme Spread ES6 vlastnost a vložíme pole s aktuálním stavem reduceru
      // do nového pole s novým úkolem - změna je 'immutable'
      return [...state, action.task]

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
let store = createStore(todo);

// Naše opravdu jednoduchá zobrazovací komponenta vypisuje do konzole a do stránky
// aktuální stav aplikace
store.subscribe(function() {
  var state = store.getState();
  console.log("Nový stav:", state);
  document.body.innerHTML = "Aktuální stav:<br/>- " + state.join("<br/>- ")
})

// Toto je jediný způsob jak m%enit stav aplikace. Objekt který vkládáme
// se jmenuje akce a obsahuje identifikaci a data potřebná pro provedení akce.
store.dispatch({ type: 'ADD', task: "Třetí úkol" }); //vložíme dva úkoly
store.dispatch({ type: 'ADD', task: "Čtvrtý úkol" });
store.dispatch({ type: 'REMOVE', id: 1 }); //odstraníme druhý úkol
