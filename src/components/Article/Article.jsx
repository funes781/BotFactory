import React from "react";

import '../../App.css';
import './style.css';

function Article() {
    return (
        <section>
            <div className="article fade-in">
                <h2>Jak Działamy?</h2>

                <div className="process-steps">
                    <div className="step">
                        <div className="step-number">1</div>
                        <h3>Konsultacja</h3>
                        <p>Poznajemy Twoje potrzeby i wymagania dotyczące bota Discord</p>
                    </div>
                    <div className="step">
                        <div className="step-number">2</div>
                        <h3>Projektowanie</h3>
                        <p>Tworzymy szczegółowy plan funkcjonalności i architektury bota</p>
                    </div>
                    <div className="step">
                        <div className="step-number">3</div>
                        <h3>Tworzenie</h3>
                        <p>Programujemy bota zgodnie z ustalonymi wymaganiami</p>
                    </div>
                    <div className="step">
                        <div className="step-number">4</div>
                        <h3>Wdrożenie</h3>
                        <p>Instalujemy i konfigurujemy bota na Twoim serwerze</p>
                    </div>
                    <div className="step">
                        <div className="step-number">5</div>
                        <h3>Wsparcie</h3>
                        <p>Zapewniamy długoterminowe wsparcie techniczne i aktualizacje</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Article;