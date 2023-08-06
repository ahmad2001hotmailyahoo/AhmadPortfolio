import React from 'react'

function ProjectCard(props) {
  return (
    <article className='projectCard'>
        <img src={props.img}></img>
        <br/>
        <span className='projectCard_name'>{props.name}</span>
        <br/>
        <span className='projectCard_description'>{props.discription}</span>
    </article>
  )
}

export default ProjectCard