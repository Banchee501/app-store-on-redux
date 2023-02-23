import { NavLink } from "react-router-dom";

const Navbar = () => {
    let activeStyle = {
        textDecoration: "none",
      };

      return (
        <nav>
            <ul>
                <li>
                    <NavLink to="services" style={({ isActive }) => isActive ? activeStyle : null}>ПОСЛУГИ</NavLink>
                </li>
                <li>
                    <NavLink to="example" style={({ isActive }) => isActive ? activeStyle : null}>ПРИКЛАДИ</NavLink>
                </li>
                <li>
                    <NavLink to="promotion" style={({ isActive }) => isActive ? activeStyle : null}>АКЦІЇ</NavLink>
                </li>
                <li>
                    <NavLink to="catalog" style={({ isActive }) => isActive ? activeStyle : null}>КАТАЛОГ</NavLink>
                </li>
                <li>
                    <NavLink to="reviews" style={({ isActive }) => isActive ? activeStyle : null}>ВІДГУКИ</NavLink>
                </li>
                <li>
                    <NavLink to="contacts" style={({ isActive }) => isActive ? activeStyle : null}>КОНТАКТИ</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar