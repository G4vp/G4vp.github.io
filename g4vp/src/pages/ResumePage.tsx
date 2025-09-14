import './ResumePage.css'
import HeaderBlock from '../components/Header'
import Footer from '../components/Footer'
import NoiseFilter from '../components/NoiseFilter'
import NavBar from '../components/NavBar'

function ResumePage() {
  return(
    <div className="card">
      <NoiseFilter/>
      <HeaderBlock title="Resume" subtitle="Last update of resume: Sept 25, 2025"/>
      <div className="card-content">
        <div className="resume-sub-content">
          <object data="/Gabriel_Viera_Resume.pdf" type="application/pdf" width="100%" height="100%">
          </object> 
        </div>
        <NavBar/>
        <Footer/>
      </div>
    </div> 
  );
}

export default ResumePage;
