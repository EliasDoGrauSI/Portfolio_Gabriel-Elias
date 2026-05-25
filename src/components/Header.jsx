import React from 'react'
import '../styles/Header.css'

function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="header">
      <div className="container">
        <div className="logo">GE</div>
        <nav className="nav">
          <button onClick={() => scrollToSection('home')}>Início</button>
          <button onClick={() => scrollToSection('about')}>Sobre</button>
          <button onClick={() => scrollToSection('skills')}>Habilidades</button>
          <button onClick={() => scrollToSection('education')}>Educação</button>
          <button onClick={() => scrollToSection('contact')}>Contato</button>
        </nav>
      </div>
    </header>
  )
}

export default Header
