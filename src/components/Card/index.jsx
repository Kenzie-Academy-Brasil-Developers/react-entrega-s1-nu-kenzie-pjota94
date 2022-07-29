import "./style.css";
import { FaTrash } from "react-icons/fa";

export const Card = ({
  setListTransactions,
  setlistFilterEntradas,
  setlistFilterSaidas,
  setlistFilterTodos,
  listTransactions,
  listFilterEntradas,
  listFilterSaidas,
  listFilterTodos,
}) => {
  const haddleDelete = (clicado) => {
    const deletarGeral = listTransactions.filter((elem) => {
      return clicado !== elem.id;
    });
    const deletarTodos = listFilterTodos.filter((elem) => {
      return clicado !== elem.id;
    });
    const deletarEntradas = listFilterEntradas.filter((elem) => {
      return clicado !== elem.id;
    });
    const deletarSaidas = listFilterSaidas.filter((elem) => {
      return clicado !== elem.id;
    });
    setListTransactions(deletarGeral);
    setlistFilterTodos(deletarTodos);
    setlistFilterSaidas(deletarSaidas);
    setlistFilterEntradas(deletarEntradas);
  };

  return (
    <>
      {listTransactions.map((card, index) =>
        card.type === "Entrada" ? (
          <li key={index} className="li-card" id={index}>
            <div className="div-li-text">
              <p className="mes-salario">{card.description}</p>
              <p className="valor-salario">R$ {card.value},00</p>
              <button
                id={card.id}
                className="li-trash"
                onClick={() => haddleDelete(card.id)}
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
                id={card.id}
                className="li-trash"
                onClick={() => haddleDelete(card.id)}
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
