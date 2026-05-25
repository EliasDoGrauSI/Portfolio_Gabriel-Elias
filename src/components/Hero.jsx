import React from 'react'
import '../styles/Hero.css'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Gabriel Elias Moreira da Silva Araújo</h1>
        <p className="subtitle">Desenvolvedor Full Stack em Formação</p>
        <p className="description">
          Apaixonado por tecnologia | Front-End & Back-End | React.js | Node.js | HTML5 & CSS5
        </p>
        <div className="cta-buttons">
          <a href="#contact" className="btn btn-primary">Entrar em Contato</a>
          <a href="#about" className="btn btn-secondary">Saber Mais</a>
        </div>
      </div>
      <div className="hero-animation">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
      </div>
    </section>
  )
}

export default Hero
