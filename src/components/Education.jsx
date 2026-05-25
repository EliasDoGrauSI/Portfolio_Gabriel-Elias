import React from 'react'
import '../styles/Education.css'

function Education() {
  const education = [
    {
      institution: 'Faculdade/Universidade',
      course: 'Sistema de Informação (Cursando)',
      year: '2024 - Presente'
    },
    {
      institution: 'Gloria Roussim CIEP 295',
      course: 'Ensino Médio Completo',
      year: 'Concluído'
    },
    {
      institution: 'Cursos Online',
      course: 'Pacote Office Completo',
      year: 'Certificado'
    }
  ]

  return (
    <section className="education" id="education">
      <div className="container">
        <h2>Educação</h2>
        <div className="education-timeline">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-content">
                <h3>{edu.course}</h3>
                <p className="institution">{edu.institution}</p>
                <p className="year">{edu.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
