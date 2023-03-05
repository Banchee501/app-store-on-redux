import { Link } from "react-router-dom";

import Header from "../Header";
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
                <div className="main-description__title">masons <span>branding</span> wordshop</div>
                <div className="main-description__subtitle">Високоякісний друк \\n Брендування одягу та аксесуарів</div>
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