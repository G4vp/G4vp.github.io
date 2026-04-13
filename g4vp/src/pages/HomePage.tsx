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
              Hi! I'm Gabriel. I use Arch and Neovim, btw. 
              Thank you for stopping by. I'm a software engineer 
              from Puerto Rico who loves building things and is always seeking to 
              learn new concepts about computers and the universe. 
              <br/>
              <br/>
              Currently, I'm very focused on researching ways to optimize 
              Retrieval-Augmented Generation (RAG) by finding hidden relationships 
              inside the embeddings using math and linear algebra. 
              <br/>
              <br/>
              I also love working on electronics and robotics projects by doing my own 
              CAD designs, programming, 3D printing, and circuits. 
              <br/> 
              <br/> 
              I have a background in various areas of software engineering, such as 
              software design, cloud computing, full-stack development, computer 
              architecture, operating systems, 
              cybersecurity, web applications, robotics, game 
              development, machine learning, and competitive programming. :)
              <br/>
              <br/> 
              So yeah, I use Arch, btw.
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
