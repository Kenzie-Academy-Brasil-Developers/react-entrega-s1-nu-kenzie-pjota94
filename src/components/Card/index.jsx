import "./style.css";
import { FaTrash } from "react-icons/fa";

export const Card = ({
  listTransactions,
  setListTransactions,
  setlistFilterEntradas,
  setlistFilterSaidas,
  setlistFilterTodos,
}) => {
  const haddleDelete = (itemRemovido) => {
    const deletar = listTransactions.filter((elem) => {
      return elem.description !== itemRemovido;
    });
    setListTransactions(deletar);
    setlistFilterTodos(deletar);
    setlistFilterEntradas(deletar);
    setlistFilterSaidas(deletar);
  };

  return (
    <>
      {listTransactions.map((card, index) =>
        card.type === "Entrada" ? (
          <li key={index} className="li-card">
            <div className="div-li-text">
              <p className="mes-salario">{card.description}</p>
              <p className="valor-salario">R$ {card.value},00</p>
              <button
                className="li-trash"
                onClick={() => haddleDelete(card.description)}
              >
                <FaTrash></FaTrash>
              </button>
            </div>
            <p className="p-li-tipoValor">{card.type}</p>
          </li>
        ) : (
          <li key={index} className="li-card-saida">
            <div className="div-li-text">
              <p className="mes-salario">{card.description}</p>
              <p className="valor-salario">R$ {card.value},00</p>
              <button
                className="li-trash"
                onClick={() => haddleDelete(card.description)}
              >
                <FaTrash></FaTrash>
              </button>
            </div>
            <p className="p-li-tipoValor">{card.type}</p>
          </li>
        )
      )}
    </>
  );
};
