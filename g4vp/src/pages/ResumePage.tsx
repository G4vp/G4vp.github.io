import './ResumePage.css'
import HeaderBlock from '../components/Header'
import Footer from '../components/Footer'
import NoiseFilter from '../components/NoiseFilter'

function ResumePage() {
  return(
    <div className="card">
      <NoiseFilter/>
      <HeaderBlock title="Resume" subtitle="Last update of resume: Sept 25, 2025"/>
      <div className="card-content">
        <Footer/>
      </div>
    </div> 
  );
}

export default ResumePage;
