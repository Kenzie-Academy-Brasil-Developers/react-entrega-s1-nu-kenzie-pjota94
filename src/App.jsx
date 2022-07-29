import { useState } from "react";
import { Home } from "./components/HomePage/home";
import { Index } from "./components/Index";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [listTransactions, setListTransactions] = useState([]);
  const [listFilterEntradas, setlistFilterEntradas] = useState([]);
  const [listFilterSaidas, setlistFilterSaidas] = useState([]);
  const [listFilterTodos, setlistFilterTodos] = useState([]);
  const [item, setItem] = useState(1);

  return (
    <div className="App">
      {isLoggedIn ? (
        <Home
          setIsLoggedIn={setIsLoggedIn}
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
          listFilterEntradas={listFilterEntradas}
          setlistFilterEntradas={setlistFilterEntradas}
          listFilterSaidas={listFilterSaidas}
          setlistFilterSaidas={setlistFilterSaidas}
          listFilterTodos={listFilterTodos}
          setlistFilterTodos={setlistFilterTodos}
          setItem={setItem}
          item={item}
        ></Home>
      ) : (
        <Index setIsLoggedIn={setIsLoggedIn}></Index>
      )}
    </div>
  );
}

export default App;
