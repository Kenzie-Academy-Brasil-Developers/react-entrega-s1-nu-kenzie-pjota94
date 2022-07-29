import { Card } from "../Card";
import noCard from "../Index/assets/NoCard.jpg";

import "./style.css";

export const ListCards = ({
  listTransactions,
  setListTransactions,
  listFilterEntradas,
  listFilterSaidas,
  listFilterTodos,
  setlistFilterEntradas,
  setlistFilterSaidas,
  setlistFilterTodos,
  setItem,
  item,
}) => {
  const filtrarEntradas = () => {
    const filtro = listFilterEntradas.filter((elem) => {
      return elem.type === "Entrada";
    });
    setListTransactions(filtro);
  };
  const filtrarSaidas = () => {
    const filtro = listFilterSaidas.filter((elem) => {
      return elem.type === "Saída";
    });
    setListTransactions(filtro);
  };
  const filtrarTodos = () => {
    const todos = listFilterTodos.map((elem) => {
      return elem;
    });
    setListTransactions(todos);
  };
  return (
    <>
      <div className="container-buttons">
        <p className="texto-resumo">Resumo Financeiro</p>
        <div className="buttons-filtros">
          <button className="button-todos" onClick={filtrarTodos}>
            Todos
          </button>
          <button className="button-entradas" onClick={filtrarEntradas}>
            Entradas
          </button>
          <button className="button-despesas" onClick={filtrarSaidas}>
            Despesas
          </button>
        </div>
      </div>
      <ul className="ul-cards">
        {listTransactions.length !== 0 ? (
          <Card
            listTransactions={listTransactions}
            listFilterTodos={listFilterTodos}
            listFilterEntradas={listFilterEntradas}
            listFilterSaidas={listFilterSaidas}
            setListTransactions={setListTransactions}
            setlistFilterEntradas={setlistFilterEntradas}
            setlistFilterSaidas={setlistFilterSaidas}
            setlistFilterTodos={setlistFilterTodos}
            setItem={setItem}
            item={item}
          ></Card>
        ) : (
          <>
            <p className="text-noCard">
              Você ainda não possui nenhum lançamento
            </p>
            <img src={noCard} alt="" className="img-noCard" />
          </>
        )}
      </ul>
    </>
  );
};
