import React from 'react'
import ahmad_photo from '../assests/ahmad_hoto.jpeg'
import cplusplus from '../assests/c-.png'
import c from '../assests/letter-c.png'
import html from '../assests/html.png'
import css from '../assests/css.png'
import js from '../assests/js-file.png'
import react from '../assests/react.png'
import node from '../assests/node-js.png'
import python from '../assests/python.png'


function HomePage() {
  return (
    <section className='home'>
        <article className='home__article'>
            <span className='home__header'>
                Ahmad Zaheer
            </span>
            <div className='home__article__image'>
                <img src={ahmad_photo}>
            </img>
            </div>
        </article>

        <span className='home__expert__header'>
                Technologies Stack
        </span>


        <article className='home__expert'>

            <div className='home__expert__picture'>
                <img src={c}/>
            </div>

            <div className="home__expert__picture">
                <img src={cplusplus} />
            </div>

            <div className="home__expert__picture">
                <img src={html} />
            </div>

            <div className="home__expert__picture">
                <img src={css} />
            </div>
            <div className="home__expert__picture">
                <img src={js} />
            </div>

            <div className="home__expert__picture last-2">
                <img src={react}/>
            </div>

            <div className="home__expert__picture last-1">
                <img src={node}/>
            </div>

            <div className="home__expert__picture last">
                <img src={python}/>
            </div>
        </article>
    </section>
  )
}

export default HomePage