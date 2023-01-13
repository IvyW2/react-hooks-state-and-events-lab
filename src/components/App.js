import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react"; 

function App() {
  const [isDark, setIsDark] = useState(false);

  function handleDarkMode () {
    setIsDark (!isDark)
  }

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  

  return (
    // The className determines the state - Dark or Light
    // If className is true the App is dark else App is light
    <div className={isDark ? "App dark": "App light"}>
      <header>
        <h2>Shopster</h2>
        
        <button onClick= {handleDarkMode}>{!isDark ? "Dark Mode": 'Light Mode'}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;






