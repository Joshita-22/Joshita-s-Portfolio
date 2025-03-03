import React from 'react'
import './inro.css'
import bg from '../../assets/Image2.png'
import btnimg from '../../assets/hireme.png'
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introtext'>I'm < span className='introname'>Joshita</span><br/>Software Developer</span>
            <p className='intropara'>A problem solver at heart and a software developer by passion.<br/> I thrive on building innovative, intelligent, and scalable solutions,<br/>always eager to tackle new challenges and push the <br/>boundaries of technology.</p>
            <Link><button className='btn'><img src={btnimg} alt="" className='btnimg'/>Hire Me</button></Link>
        </div>
        <img src={bg} alt=" " className='bg'/>

    </section>
  )
}

export default Intro