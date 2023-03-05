import { Link } from "react-router-dom";

import Header from "../header/Header";
import Navbar from "../navbar/Navbar";

import triangle from '../../../resources/triangle.svg';
import mainPhoto from '../../../resources/main-photo.png';

import "./mainPage.scss"

const MainPage = () => {
 return (
    <section className="main">
        <Header/>
        <Navbar/>
        <div className="main-description">
            <p className="main-description__title">MANSON <br></br><span>BRANDING</span><p className="filter">BRANDING</p> <br></br>WORDSHOP</p>
            <p className="main-description__subtitle">Високоякісний друк <br></br> Брендування одягу та аксесуарів</p>
            <button className='button catalog'>
                <Link to='/catalog'>КАТАЛОГ</Link>
            </button>
        </div>
        <div className="main-triangle">
            <div className="triangle">
                <img src={triangle} alt="triangle"></img>
            </div>
        </div>
        <div className="main-photo">
            <img src={mainPhoto} alt="main-img"></img>
        </div>
    </section>
 )
}

export default MainPage;