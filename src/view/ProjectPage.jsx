import React from 'react'
import ProjectCard from '../components/ProjectCard'
import portFolio from '../assests/portfolio.png'
import tictac from '../assests/tictactoe.png'
import calculor from '../assests/calculator.png'


function ProjectPage() {
  return (
    <div className='projectPage'>
        <div className='projectCard'>
            <ProjectCard 
                name="PortFolio" 
                img={portFolio}
                discription="This project included all my skills and projects"
            />
        </div>
        <div className='projectCard'>
            <ProjectCard 
                name="calculatorApp" 
                img={calculor}
                discription="This project included all my skills and projects"
            />
        </div>
        <div className='projectCard'>
            <ProjectCard 
                name="TicTacToe" 
                img={tictac}
                discription="This project included all my skills and projects"
                />
        </div>
    </div>
  )
}

export default ProjectPage