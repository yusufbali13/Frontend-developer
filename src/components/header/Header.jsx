import Nav from "../nav/Nav";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerRight">
        <h3>
          <span className="steve">Yusuf </span>
          Frontend Developer
        </h3>
      </div>
      <Nav />
    </div>
  );
};

export default Header;
