import React from 'react'
import '../styles/Skills.css'

function Skills() {
  const skills = [
    {
      category: 'Front-End',
      technologies: ['HTML5', 'CSS5', 'React.js', 'JavaScript']
    },
    {
      category: 'Back-End',
      technologies: ['Node.js', 'Express', 'JavaScript']
    },
    {
      category: 'Ferramentas & Outros',
      technologies: ['Git', 'GitHub', 'VSCode', 'Pacote Office']
    }
  ]

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2>Habilidades Técnicas</h2>
        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-card">
              <h3>{skillGroup.category}</h3>
              <div className="tech-list">
                {skillGroup.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
