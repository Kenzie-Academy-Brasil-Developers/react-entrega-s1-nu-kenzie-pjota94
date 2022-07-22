import "./style.css";
import logo from "../Index/assets/NuKenziePreto.png";

export const Header = ({ setIsLoggedIn }) => {
  const login = () => {
    setIsLoggedIn(false);
  };
  return (
    <header className="header">
      <img src={logo} alt="" className="img-logo" />
      <button className="btn-inicio" onClick={login}>
        Inicio
      </button>
    </header>
  );
};
