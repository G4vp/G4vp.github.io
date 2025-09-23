import './ProjectsPage.css'
import HeaderBlock from '../components/Header'
import Footer from '../components/Footer'
import NoiseFilter from '../components/NoiseFilter'
import NavBar from '../components/NavBar'

import ResumeGrid from '../components/ResumeItem'

function ProjectsPage() {
  return(
    <div className="card">
      <NoiseFilter/>
      <HeaderBlock title="Projects" subtitle="Discover some of my projects"/>
      <div className="card-content">
        <div className="projects-sub-content">
          <ResumeGrid/>
        </div>
        <NavBar/>
        <Footer/>
      </div>
    </div> 
  );
}

export default ProjectsPage;
