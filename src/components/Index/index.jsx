import "./style.css";
import logo from "./assets/NuKenzie.png";
import imagemPrincipal from "./assets/image.svg";

export const Index = ({ setIsLoggedIn }) => {
  const logout = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="div-main">
      <div className="container">
        <div className="div-text">
          <img src={logo} alt="" className="logo" />
          <p className="text-main">Centralize o controle das suas finanças</p>
          <span className="span">de forma rápida e segura</span>
          <button className="btn-iniciar" onClick={logout}>
            Iniciar
          </button>
        </div>
        <div className="div-imagem">
          <img src={imagemPrincipal} alt="" className="imagemPrincipal" />
        </div>
      </div>
    </div>
  );
};
