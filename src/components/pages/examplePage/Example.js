

import "./example.scss";

import exampleProduct from "../../../resources/example-product.png"

const Example = () => {

    return (
        <section className="example">
            <p className="title"><span>ПРИКЛАДИ</span> ДРУКУ</p>
            <p className="subtitle">Це може бути на тобі</p>
            <div className="carousel">
                <div className="prev"></div>
                <ul className="example__items">
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
                </ul>
                <div className="next"></div>
            </div>
        </section>
    )
}

export default Example;