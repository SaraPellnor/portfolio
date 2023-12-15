import "./Header.css"
import  loggo  from "../../assets/loggo.png";

const Header = () => {
  return (
    <div className="header">
        <img src={loggo} alt="logga" />
    </div>
  )
}

export default Header