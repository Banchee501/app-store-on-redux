

import "./services.scss"

const Services = () => {

    return (
        <section className="services">
            <p className="title">НАШІ <span>ПОСЛУГИ</span></p>
            <ul className="services__items">
                <li className="item">
                    <div className="item-title">СУБЛІМАЦІЯ</div>
                    <div className="item-description">Друк на синтетичних тканинах.</div>
                    <div className="highlight"></div>
                    <button className="button more">Детальніше</button>
                    <div className="machine"></div>
                </li>
                <li className="item">
                    <div className="item-title">ЦИФРОВИЙ ДРУК</div>
                    <div className="item-description">Кращий спосіб нанесення барвистих зображень.</div>
                    <div className="highlight"></div>
                    <button className="button more">Детальніше</button>
                    <div className="printer"></div>
                </li>
                <li className="item">
                    <div className="item-title">ТЕРМОДРУК</div>
                    <div className="item-description">Перенесення малюнка на основу за допомогою термопреса.</div>
                    <div className="highlight"></div>
                    <button className="button more">Детальніше</button>
                    <div className="fever"></div>
                </li>
                <li className="item">
                    <div className="item-title">ШОВКОГРАФІЯ</div>
                    <div className="item-description">Найдешевший спосіб створення сувенірної продукції.</div>
                    <div className="highlight"></div>
                    <button className="button more">Детальніше</button>
                    <div className="machine"></div>
                </li>
                <li className="item">
                    <div className="item-title">ВИШИВКА</div>
                    <div className="item-description">Комп'ютерна вишивка - вишивка кольоровими нитками.</div>
                    <div className="highlight"></div>
                    <button className="button more">Детальніше</button>
                    <div className="machine"></div>
                </li>
            </ul>
        </section>
    )
}

export default Services;