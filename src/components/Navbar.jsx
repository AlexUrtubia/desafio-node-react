import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";


function Navbar() {
  const {pathname} = useLocation()
    if (pathname === "/" || pathname === "/creditos" || pathname === "/archivo") 
    return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Desafío React Node
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Inicio
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/archivo">
                  Archivo
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/creditos">
                  Créditos
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
  return null;
}

export default Navbar;