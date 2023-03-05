import { Link } from "react-router-dom";

import logo from "../../../resources/logo.png"

import "./header.scss"

const Header = () => {
    return (
        <header className="header">
            <form className="search-form">
                <input className="search-form__input">

                </input>
            </form>
            <div className="logo">
                <img src={logo} alt="logo"></img>
            </div>
            <ul class="lang-switcher">
                <li class="lang-switcher__item">
                    <Link to="/main" class="lang-switcher__link" href="url">ua</Link>
                </li>
                <p>|</p>
                <li class="lang-switcher__item">
                    <Link to="/main" class="lang-switcher__link" href="url">en</Link>
                </li>
            </ul>
            <button className='button basket'>
                <Link to="/main" class="basket__link" href="url"></Link>
            </button>
            <button className='button profile'>
                <Link to="/main" class="profile__link" href="url"></Link>
            </button>
            <button className='button favorites'>
                <Link to="/main" class="favorites__link" href="url"></Link>
            </button>
        </header>
    );
};

export default Header;