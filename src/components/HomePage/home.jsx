import { Form } from "../Form";
import { Header } from "../Header";
import { ListCards } from "../ListCards";
import { TotalMoney } from "../TotalMoney";

import "./style.css";

export const Home = ({
  setIsLoggedIn,
  listTransactions,
  setListTransactions,
  listFilterEntradas,
  setlistFilterEntradas,
  listFilterSaidas,
  setlistFilterSaidas,
  listFilterTodos,
  setlistFilterTodos,
  setItem,
  item,
}) => {
  return (
    <div className="div-transition">
      <Header setIsLoggedIn={setIsLoggedIn}></Header>
      <div className="container-geral">
        <div className="container-left">
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            setlistFilterEntradas={setlistFilterEntradas}
            setlistFilterSaidas={setlistFilterSaidas}
            setlistFilterTodos={setlistFilterTodos}
            setItem={setItem}
            item={item}
          ></Form>
          <TotalMoney
            listTransactions={listTransactions}
            listFilterTodos={listFilterTodos}
          ></TotalMoney>
        </div>
        <div className="container-rigth">
          <ListCards
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
          ></ListCards>
        </div>
      </div>
    </div>
  );
};
