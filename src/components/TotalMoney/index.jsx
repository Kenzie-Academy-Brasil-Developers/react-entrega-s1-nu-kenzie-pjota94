import "./style.css";

export const TotalMoney = ({ listTransactions }) => {
  const total = listTransactions.reduce((acc, valueAtual) => {
    return (acc += Number(valueAtual.value));
  }, 0);

  return (
    <div className="container-total">
      <div className="organizar-Total">
        <p className="nome-Valor">Valor total:</p>
        <p className="valor-Total">$ {total}</p>
      </div>
      <span className="span-total">O valor se refere ao saldo</span>
    </div>
  );
};
