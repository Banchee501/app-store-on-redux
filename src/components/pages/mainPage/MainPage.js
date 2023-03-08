import { Link } from "react-router-dom";

import Header from "../header/Header";
import Navbar from "../navbar/Navbar";

import Services from "../servicesPage/Services";

import "./mainPage.scss"

const MainPage = () => {
    return (
        <>
            <section className="main">
                <div className="container">
                    <div className="triangle"></div>
                    <div className="photo"></div>
                    <Header/>
                    <Navbar/>
                    <div className="main-description">
                        <p className="main-description__title">MASONS <br></br><span className="color">BRANDING</span><span className="filter">BRANDING</span> <br></br>WORDSHOP</p>
                        <p className="main-description__subtitle">Високоякісний друк <br></br> Брендування одягу та аксесуарів</p>
                        <button className='button catalog'>
                            <Link to='/catalog'>КАТАЛОГ</Link>
                        </button>
                    </div>
                </div>
            </section>
            <Services/>
        </>
    )
}

export default MainPage;