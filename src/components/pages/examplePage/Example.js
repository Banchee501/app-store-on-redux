import Slider from "react-slick";

import "./example.scss";

import exampleProduct from "../../../resources/example-product.png"

const Example = () => {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <section className="example">
            <p className="title"><span>ПРИКЛАДИ</span> ДРУКУ</p>
            <p className="subtitle">Це може бути на тобі</p>
            <div className="carousel">
                <ul className="example__items">
                    <Slider {...settings}>
                        <li className="item">
                            <img className="item-photo" src={exampleProduct} alt="product"></img>
                        </li>
                        <li className="item">
                            <img className="item-photo" src={exampleProduct} alt="product"></img>
                        </li>
                        <li className="item">
                            <img className="item-photo" src={exampleProduct} alt="product"></img>
                        </li>
                        <li className="item">
                            <img className="item-photo" src={exampleProduct} alt="product"></img>
                        </li>
                        <li className="item">
                            <img className="item-photo" src={exampleProduct} alt="product"></img>
                        </li>
                    </Slider>
                </ul>
            </div>
        </section>
    )
}

export default Example;