import React from 'react'

const About = ({image="https://via.placeholder.com/215", aboutText}) => {
  return (
    <aside>
    <img src={image} alt='blog logo'/>
    <p>{aboutText}</p>
    </aside>

  )
}

export default About