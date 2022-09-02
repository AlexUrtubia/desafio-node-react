import { useLocation } from "react-router-dom";

function Footer() {
  const { pathname } = useLocation();
  if (pathname === "/" || pathname === "/creditos")
    return (
      <footer class="text-center text-white">
          <div class="text-center">
            Contacto alex.urtubia.contreras@gmail.com
          </div>
      </footer>
      );
  return null;
}

export default Footer;
