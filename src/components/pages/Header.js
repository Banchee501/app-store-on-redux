import { Link } from "react-router-dom";

const Header = () => {
    return (
       <div className="main">
            <header className="header">
                <form className="search-form">
                    <input className="input"></input>
                    <button class="button"></button>
                </form>
                <div className="logo"></div>
                <ul class="lang-switcher">
                    <li class="lang-switcher__item">
                        <Link to="/main" class="lang-switcher__link" href="url">ua</Link>
                    </li>
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
       </div> 
    );
};

export default Header;