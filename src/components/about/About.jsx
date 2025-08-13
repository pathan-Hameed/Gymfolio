import React from 'react'
import './About.css'
import Numbers from '../numbers/Numbers'

export default function About() {
  return (
    <div className='about-section'>
    <div className="about-content">
        <h1>Meet Alex</h1>
        <p className='aboutme'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam modi, eius veritatis fugit tempore optio libero? Accusamus, nobis id expedita sed unde impedit in, eum explicabo esse fuga ducimus ratione deleniti molestias ex corrupti aperiam. Distinctio temporibus ea iste aut, magnam possimus placeat corrupti est!</p>

        {/* calling the numbers component  */}
        <Numbers
        num1="2000+"
        title1="Happy Clients"
        num2="800+"
        title2="Sessions Completed"
        num3="15+"
        title3="Years of Experience"
        num4="10"
        title4="Expert Trainers"
      />

        {/* joining button  */}
        <button className='btn'>Book A Session</button>

    </div>
    </div>

  )
}
