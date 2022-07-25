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
  const haddleDelete = (event) => {
    const deletarGeral = listTransactions.filter((elem) => {
      return elem.description !== event.currentTarget.id;
    });
    const deletarTodos = listFilterTodos.filter((elem) => {
      return elem.description !== event.currentTarget.id;
    });
    const deletarEntradas = listFilterEntradas.filter((elem) => {
      return elem.description !== event.currentTarget.id;
    });
    const deletarSaidas = listFilterSaidas.filter((elem) => {
      return elem.description !== event.currentTarget.id;
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
          <li key={index} className="li-card">
            <div className="div-li-text">
              <p className="mes-salario">{card.description}</p>
              <p className="valor-salario">R$ {card.value},00</p>
              <button
                id={card.description}
                className="li-trash"
                onClick={haddleDelete}
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
                id={card.description}
                className="li-trash"
                onClick={haddleDelete}
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
