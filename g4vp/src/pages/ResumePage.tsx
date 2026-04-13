import './ResumePage.css'
import HeaderBlock from '../components/Header'
import Footer from '../components/Footer'
import NoiseFilter from '../components/NoiseFilter'
import NavBar from '../components/NavBar'

function ResumePage() {
  return(
    <div className="card">
      <NoiseFilter/>
      <HeaderBlock title="Resume" subtitle="Last update of resume: April 11, 2026"/>
      <div className="card-content">
        <div className="resume-sub-content">
          <object 
              data="/Gabriel_Viera_Resume.pdf" 
              type="application/pdf" 
              width="100%" 
              height="100%"
            >
              {/* This paragraph only shows if the browser can't embed the PDF */}
              <div className="pdf-fallback">
                <p>It looks like your browser doesn't support embedded PDFs.</p>
                <a href="/Gabriel_Viera_Resume.pdf" target="_blank" rel="noreferrer" className="download-btn">
                  View or Download Resume (PDF)
                </a>
              </div>
          </object>
        </div>
        <NavBar/>
        <Footer/>
      </div>
    </div> 
  );
}

export default ResumePage;
