import React from 'react'
import '../styles/About.css'

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2>Sobre Mim</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Olá! Sou Gabriel Elias Moreira da Silva Araújo, desenvolvedor em formação cursando 
              Sistema de Informação. Tenho experiência em desenvolvimento web com foco em 
              Front-End e Back-End.
            </p>
            <p>
              Sou apaixonado por criar soluções digitais elegantes e funcionais. Possuo 
              conhecimentos sólidos em HTML5, CSS5, React.js, Node.js e Express, com 
              disposição para aprender novas tecnologias e enfrentar novos desafios.
            </p>
            <p>
              Quando não estou codificando, estou estudando para aprimorar minhas habilidades 
              e contribuir para a comunidade dev.
            </p>
          </div>
          <div className="about-highlights">
            <div className="highlight-card">
              <h3>Formação</h3>
              <p>Cursando Sistema de Informação</p>
            </div>
            <div className="highlight-card">
              <h3>Idiomas</h3>
              <p>Português Nativo | Inglês Básico</p>
            </div>
            <div className="highlight-card">
              <h3>Certificações</h3>
              <p>Pacote Office Completo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
