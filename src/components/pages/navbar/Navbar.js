import { NavLink } from "react-router-dom";

import './navbar.scss'

const Navbar = () => {
    let activeStyle = {
        textDecoration: "none",
      };

      return (
        <nav className="nav">
            <ul className="nav-list">
                <li className="nav-list__item">
                    <NavLink to="main" style={({ isActive }) => isActive ? activeStyle : null}>ГОЛОВНА</NavLink>
                </li>
                <li className="nav-list__item">
                    <NavLink to="services" style={({ isActive }) => isActive ? activeStyle : null}>ПОСЛУГИ</NavLink>
                </li>
                <li className="nav-list__item">
                    <NavLink to="example" style={({ isActive }) => isActive ? activeStyle : null}>ПРИКЛАДИ</NavLink>
                </li>
                <li className="nav-list__item">
                    <NavLink to="promotion" style={({ isActive }) => isActive ? activeStyle : null}>АКЦІЇ</NavLink>
                </li>
                <li className="nav-list__item">
                    <NavLink to="catalog" style={({ isActive }) => isActive ? activeStyle : null}>КАТАЛОГ</NavLink>
                </li>
                <li className="nav-list__item">
                    <NavLink to="reviews" style={({ isActive }) => isActive ? activeStyle : null}>ВІДГУКИ</NavLink>
                </li>
                <li className="nav-list__item">
                    <NavLink to="contacts" style={({ isActive }) => isActive ? activeStyle : null}>КОНТАКТИ</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;