import '../css/Resume.css'
import Pdf from '../../documents/Gabriel_Viera_Resume.pdf'

function Resume() {
    return (
    <div className='resume'>
        <iframe 
        className='resume__frame' 
        src={Pdf} 
        frameborder="0" 
        title="Gabriel Viera Resume"
        
        allowFullScreen

        ></iframe>
    </div>
    )
}

export default Resume
