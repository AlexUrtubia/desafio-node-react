import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";


function Navbar() {
  const {pathname} = useLocation()
    if (pathname === "/" || pathname === "/creditos" || pathname === "/archivo")
    return (
    <div className="navigation">
      <nav className="navbar navbar-expand-sm ">
        <div className="container ">
          <NavLink className="navbar-brand text-white" to="/">
            Desafío React Node
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/">
                  Inicio
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/archivo">
                  Archivo
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/creditos">
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