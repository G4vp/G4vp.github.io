import './App.css'
import HeaderBlock from './components/Header'
import SeparatorBlock from './components/Separator'
import GabrielPhoto from './assets/Cuadrado.jpg'
import Tools from './components/ToolTag'

const HomePage = () => {
  return (
    <div className="card">
      <HeaderBlock title="About" subtitle="Gabriel Viera [G4vp]"/>
      <div className="card-content">
          <img src={GabrielPhoto} alt="PhotoOfMe" className="my_picture"/>
          <SeparatorBlock title="Who am I?"/>
          <div className="sub-content">
            <text className="content-text"> I'm a 21-year-old  software engineering student from Puerto Rico
            who is always trying to  learn new things about computers. I really 
            enjoy building cool things  and solving programming problems. I'm 
            currently very focused on learning low-level programming and 
            electronics.I have a background in various areas of software, such as 
            cloud computing, backend  development, frontend development, computer 
            architecture, cybersecurity, web applications, robotics, game 
            development, and competitive  programming. :)
            Thanks for stopping by! If anything here caught your interest or if 
            we share similar passions, feel free to reach out to me on LinkedIn. 
            I’d love to connect!</text></div>
          <SeparatorBlock title="Skills"/>
          <Tools/> 
          <SeparatorBlock title="Links"/>
      </div>
    </div> 
  );
};

function App() {
  return (
    HomePage() 
  )
}

export default App
