import React from "react";

import '../../App.css';
import './style.css';

function Faq() {
    const toggleFAQ = (event) => {
        const question = event.currentTarget;
        const answer = question.nextElementSibling;
        const isOpen = answer.classList.contains('open');
        
        document.querySelectorAll('.faq-answer.open').forEach(item => {
            if (item !== answer) {
                item.classList.remove('open');
                item.previousElementSibling.querySelector('i').style.transform = 'rotate(0deg)';
            }
        });
        
        answer.classList.toggle('open');
        
        const icon = question.querySelector('i');
        if (icon) {
            icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
        }
    };

    return (
        <section>
            <div className="Faq fade-in">
                <h2>Często Zadawane Pytania</h2>

                <div className="faq-item">
                    <div className="faq-question" onClick={toggleFAQ}>
                        <span>Jak długo trwa stworzenie bota na zamówienie?</span>
                    </div>
                    <div className="faq-answer">
                        <p>Czas realizacji zależy od złożoności projektu. Proste boty - 2-4 dni, bardziej zaawansowane - 4-8 dni. Podamy dokładny termin po konsultacji.</p>
                    </div>
                </div>

                <div className="faq-item">
                    <div className="faq-question" onClick={toggleFAQ}>
                        <span>Czy oferujecie wsparcie techniczne po zakupie?</span>
                    </div>
                    <div className="faq-answer">
                        <p>Tak! Każdy bot otrzymuje 6 miesięcy bezpłatnego wsparcia technicznego. Oferujemy również płatne plany wsparcia długoterminowego.</p>
                    </div>
                </div>

                <div className="faq-item">
                    <div className="faq-question" onClick={toggleFAQ}>
                        <span>Czy mogę dostosować gotowego bota do swoich potrzeb?</span>
                    </div>
                    <div className="faq-answer">
                        <p>Oczywiście! Oferujemy usługi personalizacji gotowych botów. Możemy dodać nowe funkcje lub zmodyfikować istniejące.</p>
                    </div>
                </div>

                <div className="faq-item">
                    <div className="faq-question" onClick={toggleFAQ}>
                        <span>Czy po zakupie mogę dodać bota na więcej niż jeden serwer?</span>
                        <i className="fas fa-chevron-down"></i>
                    </div>
                    <div className="faq-answer">
                        <p>Standardowo, zakupiony bot jest przeznaczony do użytku na **jednym serwerze**, chyba że w umowie ustalono inaczej. Jeśli potrzebujesz bota na wiele serwerów, prosimy o kontakt w celu omówienia licencji i ewentualnych zniżek na dodatkowe instancje.</p>
                    </div>
                </div>

                <div className="faq-item">
                    <div className="faq-question" onClick={toggleFAQ}>
                        <span>Jak wygląda proces zamówienia i płatności?</span>
                        <i className="fas fa-chevron-down"></i>
                    </div>
                    <div className="faq-answer">
                        <p>Proces jest prosty: najpierw przeprowadzamy bezpłatną konsultację, aby ustalić Twoje potrzeby. Następnie przedstawiamy wycenę i harmonogram. Po akceptacji i wpłaceniu zaliczki (lub całej kwoty, w zależności od ustaleń), rozpoczynamy pracę. Płatność końcowa następuje po zaakceptowaniu gotowego bota.</p>
                    </div>
                </div>

                <div className="faq-item">
                    <div className="faq-question" onClick={toggleFAQ}>
                        <span>Co jeśli bot przestanie działać lub pojawią się błędy?</span>
                        <i className="fas fa-chevron-down"></i>
                    </div>
                    <div className="faq-answer">
                        <p>W ramach **6-miesięcznego bezpłatnego wsparcia technicznego**, gwarantujemy usunięcie wszelkich błędów i usterek, które mogą pojawić się po wdrożeniu bota. Naszym celem jest zapewnienie płynnego i bezproblemowego działania bota.</p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Faq;