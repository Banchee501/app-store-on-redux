import { Link } from "react-router-dom";

import Header from "../header/Header";
import Navbar from "../navbar/Navbar";

import "./mainPage.scss"

const MainPage = () => {
 return (
    <section className="main">
        <div className="container">
            <Header/>
            <Navbar/>
            <div className="main-description">
                <p className="main-description__title">MASONS <br></br><span>BRANDING</span><p className="filter">BRANDING</p> <br></br>WORDSHOP</p>
                <p className="main-description__subtitle">Високоякісний друк <br></br> Брендування одягу та аксесуарів</p>
                <button className='button catalog'>
                    <Link to='/catalog'>КАТАЛОГ</Link>
                </button>
            </div>  
            <div className="triangle"></div>
            <div className="photo"></div>
        </div>
    </section>
 )
}

export default MainPage;