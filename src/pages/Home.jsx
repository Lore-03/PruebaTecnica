import React from 'react';
import { Link } from 'react-router-dom';
import apple1 from '../assets/apple1.jpg';
import apple2 from '../assets/apple2.jpg';
import hp from '../assets/hp.jpg';
import hp2 from '../assets/hp2.jpg';
import hp3 from '../assets/hp3.jpg';
import apple3 from '../assets/apple3.jpg';
import dell1 from '../assets/dell1.jpg';
import dell2 from '../assets/dell2.jpg';
import dell3 from '../assets/dell3.jpg';

const Home = () => {
    return (
        <div>
            <div className="header">
                <h1>DevSpark</h1>
                <p>Su crecimiento profesional y el desarrollo empieza con nosotros.</p>
            </div>

            <nav className="navbar">
                <Link to="/chatbot">ChatBot</Link>
            </nav>

            <div className="container">
                <div className="product-grid">
                    <div className="product-card">
                        <img src={apple1} alt="iMac" />
                        <h3>iMac</h3>
                        <ul className="product-details">
                            <li>Capacidad de Disco <br /><strong>Estado Sólido SSD 256GB</strong></li>
                        </ul>
                    </div>
                    <div className="product-card">
                        <img src={apple2} alt="MacBook Pro" />
                        <h3>MacBook Pro</h3>
                        <ul className="product-details">
                            <li>Chip <br /><strong>M3</strong></li>
                            <li>Precio <br /><strong>$7.189.000</strong></li>
                        </ul>
                    </div>
                    <div className="product-card">
                        <img src={apple3} alt="Mac Mini" />
                        <h3>Mac Mini</h3>
                        <ul className="product-details">
                            <li>Chip <br /><strong>M2</strong></li>
                            <li>Precio <br /><strong>$2.189.000</strong></li>
                        </ul>
                    </div>
                    <div className="product-card">
                        <img src={hp} alt="HP Celeron J4025" />
                        <h3>HP Celeron J4025</h3>
                        <ul className="product-details">
                            <li>Memoria RAM <br /><strong>4GB</strong></li>
                            <li>Almacenamiento <br /><strong>HDD 1TB</strong></li>
                            <li>Pantalla <br /><strong>FHD</strong></li>
                        </ul>
                    </div>
                    <div className="product-card">
                        <img src={hp2} alt="HP Pavilion" />
                        <h3>Portátil HP Pavilion</h3>
                        <ul className="product-details">
                            <li>Procesador <br /><strong>Intel Core i5</strong></li>
                            <li>Memoria RAM <br /><strong>8GB</strong></li>
                            <li>Almacenamiento <br /><strong>256GB SSD</strong></li>
                        </ul>
                    </div>
                    <div className="product-card">
                        <img src={hp3} alt="HP Pavilion Táctil" />
                        <h3>Portátil Táctil HP Pavilion</h3>
                        <ul className="product-details">
                            <li>Procesador <br /><strong>Intel Core i5 1235U</strong></li>
                            <li>Memoria RAM <br /><strong>8GB</strong></li>
                            <li>Almacenamiento <br /><strong>512GB SSD</strong></li>
                        </ul>
                    </div>
                    <div className="product-card">
                        <img src={dell1} alt="Dell Inspiron 3520" />
                        <h3>Dell Inspiron 3520</h3>
                        <ul className="product-details">
                            <li>Procesador <br /><strong>Intel Core i7 1255U</strong></li>
                            <li>Memoria RAM <br /><strong>16GB</strong></li>
                            <li>Almacenamiento <br /><strong>512GB SSD</strong></li>
                        </ul>
                    </div>
                    <div className="product-card">
                        <img src={dell2} alt="Dell Latitude 3410" />
                        <h3>Dell Latitude 3410</h3>
                        <ul className="product-details">
                            <li>Procesador <br /><strong>Intel Core i5</strong></li>
                            <li>Memoria RAM <br /><strong>8GB</strong></li>
                            <li>Almacenamiento <br /><strong>1TB HDD</strong></li>
                        </ul>
                    </div>
                    <div className="product-card">
                        <img src={dell3} alt="Dell Vostro 3681" />
                        <h3>Dell Vostro 3681</h3>
                        <ul className="product-details">
                            <li>Procesador <br /><strong>Intel Core i3</strong></li>
                            <li>Memoria RAM <br /><strong>4GB</strong></li>
                            <li>Almacenamiento <br /><strong>1TB HDD</strong></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
