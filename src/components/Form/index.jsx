import "./style.css";

export const Form = ({
  setListTransactions,
  setlistFilterEntradas,
  setlistFilterSaidas,
  setlistFilterTodos,
  setItem,
  item,
}) => {
  const atualizarItem = () => {
    const atual = item;
    setItem(atual + 1);

    return atual;
  };

  const valoresInput = (event) => {
    event.preventDefault();
    const objPrincipal = {};
    const valores = [...event.target];
    valores.forEach((elem) => {
      if (elem.name !== "") {
        objPrincipal[elem.name] = elem.value;
        objPrincipal.id = item + 1;
      }
    });

    if (objPrincipal.type === "Saída") {
      objPrincipal.value = Number(objPrincipal.value * -1);
    }

    setListTransactions((oldListTransactions) => [
      ...oldListTransactions,
      objPrincipal,
    ]);
    setlistFilterEntradas((oldFilterEntradas) => [
      ...oldFilterEntradas,
      objPrincipal,
    ]);
    setlistFilterSaidas((oldFilterSaidas) => [
      ...oldFilterSaidas,
      objPrincipal,
    ]);
    setlistFilterTodos((oldFilterTodos) => [...oldFilterTodos, objPrincipal]);
  };

  return (
    <form className="form" onSubmit={valoresInput}>
      <label className="label-descricao">Descrição</label>
      <input
        required
        name="description"
        type="text"
        placeholder="Digite aqui sua descrição"
        className="input-descricao"
      />
      <span className="span-input">Ex: Compra de roupas</span>
      <div className="container-inputs">
        <div className="box1-input">
          <label className="label-valor">Valor</label>
          <input
            name="value"
            required
            type="number"
            placeholder="R$"
            className="input-valor"
          />
        </div>
        <div className="box2-input">
          <label className="label-tipo">Tipo de Valor</label>
          <select name="type" id="" className="select-tipo">
            <option value="Entrada">Entrada</option>
            <option value="Saída">Saída</option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="btn-form"
        onClick={() => atualizarItem()}
      >
        Inserir Valor
      </button>
    </form>
  );
};
