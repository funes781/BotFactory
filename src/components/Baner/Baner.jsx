import React from "react";

import '../../App.css';
import './style.css';

function Baner() {

    return (
        <section>
            <div className="baner">
                <div className="baner-content">
                    <h1> ,,Od Idei do Działania``</h1>

                    <p>Oferujemy gotowe rozwiązania i boty na zamówienie, które usprawnią zarządzanie serwerem, zwiększą zaangażowanie i zapewnią rozrywkę.</p>

                    <div className="baner-buttons">
                        <a href="#gotowe-boty" className="button button-primary" aria-label="Przejdź do Sklepu">
                            Przejdź do Sklepu
                        </a>
                        <a href="#na-zamowienie" className="button button-secondary" aria-label="Zamów Bota dla siebie">
                            Zamów Bota dla siebie!
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Baner;