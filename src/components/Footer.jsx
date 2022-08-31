import { useLocation } from "react-router-dom";

function Footer() {
  const {pathname} = useLocation()
  if (pathname === "/" || pathname === "/creditos") 
    return (
    <div className="footer">
      <footer class="py-3 bg-dark fixed-bottom">
        <div class="container">
          <p class="m-0 text-center text-white">
            Contacto en alex.urtubia.contreras@gmail.com
          </p>
        </div>
      </footer>
    </div>
  );
  return null;
}

export default Footer;