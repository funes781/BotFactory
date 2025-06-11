import React from "react";
import '../../App.css';
import './style.css';

function Opinions() {
    return (
        <section>
            <div className="testimonials fade-in">
                <h2>Co Mówią Nasi Klienci</h2>
                <div className="testimonial-grid">
                    <div className="testimonial">
                        <p>"Niesamowity bot moderacyjny! Od kiedy go zainstalowaliśmy, problemy na serwerze praktycznie zniknęły. Automatyczne systemy działają perfekcyjnie."</p>
                        <div className="testimonial-author">
                            <div className="author-avatar">DK</div>
                            <div>
                                <strong>Dawid K.</strong>
                                <br/><small>Administrator serwera PolishRP (FiveM)</small>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial">
                        <p>"Bot muzyczny przekroczył nasze oczekiwania. Jakość dźwięku jest fantastyczna, a funkcje są bardzo intuicyjne w użyciu."</p>
                        <div className="testimonial-author">
                            <div className="author-avatar">AM</div>
                            <div>
                                <strong>Anna Mazur</strong>
                                <br/><small>Założycielka serwera PixelHeaven (Discord)</small>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial">
                        <p>"Profesjonalne podejście i szybka realizacja. Bot na zamówienie działa dokładnie tak, jak potrzebowaliśmy. Polecam!"</p>
                        <div className="testimonial-author">
                            <div className="author-avatar">LW</div>
                            <div>
                                <strong>Łukasz Wójcik</strong>
                                <br/><small>CEO serwera REDM</small>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial">
                        <p>"Najlepszy bot ticketingowy jaki widziałem! Integracja z panelem admina działa bez zarzutu."</p>
                        <div className="testimonial-author">
                            <div className="author-avatar">KS</div>
                            <div>
                                <strong>Krzysztof "Shadow" Szymański</strong>
                                <br/><small>Właściciel serwera DarkRP (FiveM)</small>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial">
                        <p>"Bot ekonomiczny zrewolucjonizował nasz serwer. Gracze uwielbiają system poziomów i nagród!"</p>
                        <div className="testimonial-author">
                            <div className="author-avatar">MJ</div>
                            <div>
                                <strong>Maja J.</strong>
                                <br/><small>Admin serwera FantasyWorld (Discord)</small>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial">
                        <p>"24/7 support i regularne aktualizacje. Warto było zainwestować w tego bota!"</p>
                        <div className="testimonial-author">
                            <div className="author-avatar">TB</div>
                            <div>
                                <strong>Tomasz Bielecki</strong>
                                <br/><small>Założyciel WildWestRP (RedM)</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Opinions;