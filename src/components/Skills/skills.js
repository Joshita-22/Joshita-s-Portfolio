import React from 'react'
import './skills.css'
import ds from '../../assets/ui-design.png'
import ml from '../../assets/website-design.png'
import fs from '../../assets/app-design.png'

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skilltitle'>What I do</span>
        <span className='skilldesc'>I am a Software Engineer with a passion for AI-driven solutions. With a strong foundation in distributed systems and machine learning, I specialize in building intelligent, scalable, and secure applications. From developing LLM-based projects to designing robust architectures, I thrive on solving complex challenges that push the boundaries of technology.</span>
        <div className='skillbars'>
            <div className='skillbar'>
                <img src={ds} alt="" className='skillbarimg'/>
                <div className='skillbartext'>
                    <h2>Distributed Systems</h2>
                    <p>Designing scalable and secure architectures for high-performance computing.</p>
                </div>
                </div>
                <div className='skillbar'>
                <img src={ml} alt="" className='skillbarimg'/>
                <div className='skillbartext'>
                    <h2>Machine Learning & AI</h2>
                    <p>Developing intelligent models with LLMs, retrieval-augmented generation (RAG), and data-driven insights for real-world applications.</p>
                </div>
                </div>
                <div className='skillbar'>
                <img src={fs} alt="" className='skillbarimg'/>
                <div className='skillbartext'>
                    <h2>Full-Stack Development</h2>
                    <p>Creating end-to-end solutions with modern web technologies and cloud integration.
                    </p>
                </div>
                </div>
                </div>   
    </section>
  )
}

export default Skills