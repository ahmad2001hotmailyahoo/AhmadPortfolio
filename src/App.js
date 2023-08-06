import React, {useState,useEffect} from 'react';
import HomePage from './view/HomePage';
import AboutUsPage from './view/AboutUsPage';
import './App.css';
import Footer from './components/Footer';
import ProjectPage from './view/ProjectPage';

function App() {

  const [animate, setAnimate] = useState(false);

  const handleScroll = () => {
    const contentElement = document.getElementById('about');
    const windowHeight = window.innerHeight;

    if (contentElement) {
      const contentTop = contentElement.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (contentTop < windowHeight * 0.75) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
          <nav className='nav__bar'>
        <ul>
            <li>
                <a href="/" className='link'>Home</a>
            </li>
            <li>
                <a href="#about" className='link'>About</a>
            </li>
            <li>
                <a href="#sdfasdf" className='link'>Contact</a>
            </li>
            <li>
                <a href="/about" className='link'>Projects</a>
            </li>
        </ul>
    </nav>
      <section id="home">
        <HomePage/>
      </section>
      <br/>
      <br/>
      {/* {`about ${animate ? 'animate' : ''}`} */}
      <section className="about" id="about">
        <AboutUsPage />
        <div className='button-bar'>
          <a href='#home' className='primary button'>Go Back To Home</a>
          <a href='#projects' className='secondary button'>See my Projects</a>
        </div>
      </section>

      {/* <div className="spacer" /> */}

      <br/>
      <br/>

      <div id='projects'>
        <span className='projectPageHeader'>My Projects</span>
        <ProjectPage/>
      </div>
      <Footer />
    </>
  );
}

export default App;
