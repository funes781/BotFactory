import { useEffect } from 'react'
import './App.css'

import Navbar from './components/Navbar/Navbar'
import Baner from './components/Baner/Baner'
import Article from './components/Article/Article'
import Bots from './components/Bots/Bots'


import Footer from './components/Footer/Footer'
import Faq from './components/Faq/Faq'
import Opinions from './components/Opinions/Opinions'

function App() {

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);


  return (
    <>
      <Navbar />
      <Baner />
      <Article />
      <Opinions />
      <Bots />
      <Faq />

      <Footer />
    </>
  )
}

export default App
