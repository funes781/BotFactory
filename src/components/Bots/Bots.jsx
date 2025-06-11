import React from "react";
import { FaShieldVirus } from "react-icons/fa";
import { GiMusicSpell } from "react-icons/gi";
import { MdAdminPanelSettings } from "react-icons/md";

import '../../App.css';
import './style.css';

function Bots() {

    return (
        <section>
            <div className="bots-section fade-in">
                <h2>&#129302; Nasze Boty  &#129302;</h2>
                <div className="grid">
                    <div className="card">
                        <div className="icon">
                            <FaShieldVirus />
                        </div>

                        <h3>GuardianBot</h3>
                        <p>Zaawansowany bot moderacyjny z automatycznymi systemami ochrony serwera.</p>
                        <ul className="features">
                            <li>Automatyczna moderacja</li>
                            <li>System ostrzeżeń</li>
                            <li>Ochrona przed Spamem</li>
                            <li>Logi moderacyjne</li>
                        </ul>
                        <a href="#" className="btn btn-primary">Zobacz Więcej</a>
                    </div>

                    <div className="card">
                        <div className="icon">
                            <GiMusicSpell />
                        </div>
                        <h3>DJ Bot</h3>
                        <p>Wysokiej jakości bot muzyczny z obsługą playlist i efektów dźwiękowych.</p>
                        <ul className="features">
                            <li>Odtwarzanie z YouTube</li>
                            <li>Kolejki muzyczne</li>
                            <li>Efekty audio</li>
                            <li>Sterowanie głosowe</li>
                        </ul>
                        <a href="#" className="btn btn-primary">Zobacz Więcej</a>
                    </div>

                    <div className="card">
                        <div className="icon">
                            <MdAdminPanelSettings />
                        </div>
                        <h3>Admin Tool</h3>
                        <p>Bot administrator</p>
                        <ul className="features">
                            <li>Wykrywanie nieodpowiednich słów</li>
                            <li>Ochrona przed spamem</li>
                            <li>Ochrona przed botami</li>
                            <li>Whitelista/Blacklista użytkowników </li>
                        </ul>
                        <a href="#" className="btn btn-primary">Zobacz Więcej</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Bots;