import './ProjectsPage.css'
import HeaderBlock from '../components/Header'
import Footer from '../components/Footer'
import NoiseFilter from '../components/NoiseFilter'
import NavBar from '../components/NavBar'

import ProjectGrid from '../components/ProjectGrid'

function ProjectsPage() {
  return(
    <div className="card">
      <NoiseFilter/>
      <HeaderBlock title="Projects" subtitle="Discover some of my projects"/>
      <div className="card-content">
        <div className="projects-sub-content">
          <ProjectGrid/>
        </div>
        <NavBar/>
        <Footer/>
      </div>
    </div> 
  );
}

export default ProjectsPage;
