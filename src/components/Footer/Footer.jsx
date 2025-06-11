import React from 'react';
import { DiGithubBadge } from "react-icons/di";
import { FaDiscord } from "react-icons/fa";

import '../../App.css';
import './style.css';

function Footer() {

    return (
        <footer>
            <div className='footer'>
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>BotFactory</h3>
                        <p>Profesjonalne boty Discord dla każdego serwera. Tworzymy rozwiązania, które działają.</p>
                    </div>
                    <div className="footer-section">
                        <h3>Usługi</h3>
                        <ul>
                            <li><a href="#gotowe-boty">Gotowe Boty</a></li>
                            <li><a href="#na-zamowienie">Boty na Zamówienie</a></li>
                            <li><a href="#funkcje">Funkcje</a></li>
                            <li><a href="#kontakt">Wsparcie</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Informacje</h3>
                        <ul>
                            <li><a href="#">Polityka Prywatności</a></li>
                            <li><a href="#">Regulamin Usług</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Cennik</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Kontakt</h3>
                        <p>kontakt@botfactory.pl</p>
                        <p>discord.gg/botfactory</p>
                        <p>Dostępni 24/7</p>
                    </div>
                </div>

                <div className="social-icons">
                    <a href="#" className="social-icon">
                        <FaDiscord />
                    </a>
                    <a href="#" className="social-icon">
                       <DiGithubBadge />
                    </a>
                </div>

                <hr className='break-line'/>

                <div>
                    <p>&copy; 2025 BotFactory. Wszystkie prawa zastrzeżone.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;