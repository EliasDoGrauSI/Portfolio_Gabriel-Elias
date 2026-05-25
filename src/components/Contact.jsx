import React from 'react'
import '../styles/Contact.css'

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Vamos Conversar!</h2>
        <p className="contact-subtitle">Aberto a novas oportunidades e colaborações</p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <h3>📧 Email</h3>
              <a href="mailto:g.elias190607@gmail.com">g.elias190607@gmail.com</a>
            </div>
            
            <div className="info-card">
              <h3>📱 Telefone</h3>
              <a href="tel:+5524981175319">(24) 98117-5319</a>
            </div>
            
            <div className="info-card">
              <h3>💼 Social</h3>
              <div className="social-links">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>
          
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Seu Nome" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Seu Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Sua Mensagem" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Enviar Mensagem</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
