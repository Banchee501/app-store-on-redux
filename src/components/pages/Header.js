import { Link } from 'react';

const MainPage = () => {
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
                        <Link to class="lang-switcher__link" href="url">ua</Link>
                    </li>
                    <li class="lang-switcher__item">
                        <Link to class="lang-switcher__link" href="url">en</Link>
                    </li>
                </ul>
            </header>
       </div> 
    );
};

export default MainPage;