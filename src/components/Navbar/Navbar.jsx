import React from "react";

import '../../App.css';
import './style.css';

function Navbar() {

    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 30px rgba(0,0,0,0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        }
    });

    return (
        <section id="navbar">
            <div className="navbar">
                <div className="nav-container">
                    <div className="logo">
                        BotFactory
                    </div>
                    <ul className="nav-links">
                        <li><a href="#gotowe-boty">Gotowe Boty</a></li>
                        <li><a href="#na-zamówienie">Boty na Zamówienie</a></li>
                        <li><a href="#funkcje">Funkcje</a></li>
                        <li><a href="#cennik">Cennik</a></li>
                        <li><a href="#kontakt">Kontakt</a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Navbar;