import './HomePage.css'
import HeaderBlock from '../components/Header'
import SeparatorBlock from '../components/Separator'
import GabrielPhoto from '../assets/Cuadrado.jpg'
import Tools from '../components/ToolTag'
import Footer from '../components/Footer'
import NoiseFilter from '../components/NoiseFilter'
import NavBar from '../components/NavBar'

const HomePage = () => {
  return (
    <div className="card">
      <NoiseFilter/>
      <HeaderBlock title="About" subtitle="Gabriel Viera [G4vp]"/>
      <NavBar/> 
      <div className="card-content">
          <img src={GabrielPhoto} alt="PhotoOfMe" className="my_picture"/>
          {/*<SeparatorBlock title="Who am I?"/>*/}
          <div className="home-sub-content">
            <p className="content-text">
            I'm a 21-year-old  software engineering student from Puerto Rico
            who is always trying to  learn new things about computers. I really 
            enjoy building cool things  and solving programming problems. I'm 
            currently very focused on learning low-level programming and 
            electronics.
            <br/> 
            <br/> 
            I have a background in various areas of software, such as 
            cloud computing, backend  development, frontend development, computer 
            architecture, cybersecurity, web applications, robotics, game 
            development, and competitive  programming. :)
            <br/>
            <br/> 
            Thanks for stopping by! If anything here caught your interest or if 
            we share similar passions, feel free to reach out to me on LinkedIn. 
            I’d love to connect!
            </p>
          </div>
          <SeparatorBlock title="Skills"/>
          <div className="home-sub-content">
            <Tools/> 
          </div>
          <SeparatorBlock title="Links"/>
          <div className="home-sub-content">
            <ul className="socials-list">
              <li className="socials-list-item">
                X<a href="https://github.com/G4vp"> Github</a>
              </li>
              <li className="socials-list-item">
                X<a href="https://www.linkedin.com/in/gabriel-a-viera/"> Linked-In
                </a>
              </li>
              <li className="socials-list-item">
                X<a href="https://g4vp.itch.io/"> Itch.io</a>
              </li>
            </ul> 
          </div>
        <Footer/>
      </div>
    </div> 
  );
};

export default HomePage;
