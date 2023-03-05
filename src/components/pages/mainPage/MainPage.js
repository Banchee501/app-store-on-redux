import { Link } from "react-router-dom";

import Header from "../header/Header";
import Navbar from "../Navbar";

import triangle from '../../../resources/triangle.svg';
import mainPhoto from '../../../resources/main-photo.png';

import "./mainPage.scss"

const MainPage = () => {
 return (
    <div className="component">
        <div className="main-background"></div>
        <Header/>
        <Navbar/>
        <div className="main">
            <div className="main-description">
                <p className="main-description__title">masons <span>branding</span> wordshop</p>
                <p className="main-description__subtitle">Високоякісний друк \\n Брендування одягу та аксесуарів</p>
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
        </div>
    </div>
 )
}

export default MainPage;