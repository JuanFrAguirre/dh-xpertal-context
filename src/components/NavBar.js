import { NavLink } from "react-router-dom";

let links = [
  { title: "Inicio", link: "/" },
  { title: "Productos", link: "/products" },
  { title: "Contacto", link: "/contact" },
];

const NavBar = () => {
  return (
    <nav>
      <ul>
        {links.map((link, i) => (
          <li key={i}>
            <NavLink to={link.link}>{link.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
