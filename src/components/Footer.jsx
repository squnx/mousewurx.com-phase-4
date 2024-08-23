import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="copyright text-center">
          <p><span>Copyright</span> © 2009–{(new Date().getFullYear())} ::<Link to="/"><strong className="px-1 sitename">mousewurx</strong></Link>:: <span>All Rights Reserved</span></p>
        </div>
        <div className="social-links d-flex justify-content-center">
          {/* <a href=""><i className="bi bi-twitter-x"></i></a>
          <a href=""><i className="bi bi-facebook"></i></a>
          <a href=""><i className="bi bi-instagram"></i></a> */}
          <a href="https://www.linkedin.com/in/ivansong/" title="LinkedIn" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
          {/* <a href="http://mousewurx.com/song/ivan/IvanSong.pdf" title="Iven's Resume" target='_blank'><i className="bi bi-file-earmark-person"></i></a> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer