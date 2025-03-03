import React from 'react'
import './works.css'
import pr1 from '../../assets/port1.png'
import pr2 from '../../assets/port2.png'
import pr3 from '../../assets/port3.png'
import pr4 from '../../assets/port4.png'
import pr5 from '../../assets/port5.png'
import pr6 from '../../assets/port6.png'


const Works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My Portfolio</h2>
        <span className='worksdesc'>I focus on building smart, scalable, and secure solutions, bringing ideas to life through innovation and technology.</span>
        <div className='worksImgs'>
            <img src={pr1} alt="" className="worksimg"/>
            <img src={pr2} alt="" className="worksimg"/>
            <img src={pr3} alt="" className="worksimg"/>
            <img src={pr4} alt="" className="worksimg"/>
            <img src={pr5} alt="" className="worksimg"/>
            <img src={pr6} alt="" className="worksimg"/>
        </div>
        <button className='workbtn'>See More</button>
    </section>
  );
}

export default Works