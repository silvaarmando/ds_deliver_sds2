import './styles.css'
import { ReactComponent as YouTubeIcon } from './youtube.svg'
import { ReactComponent as LinkedinIcon } from './linkedin.svg'
import { ReactComponent as InstagramIcon } from './instagram.svg'

function Footer() {
  return (
    <footer className="main-footer">
      Aplicação desenvolvida durante a 2ª edição do Evento Semana DevSuperior
      <div className="footer-icons">
        <a href="https://www.youtube.com/c/devsuperior" className="">
          <YouTubeIcon />
        </a>
        <a href="https://www.linkedin.com/school/devsuperior/">
          <LinkedinIcon />
        </a>
        <a href="https://www.instagram.com/devsuperior.ig">
          <InstagramIcon />
        </a>
      </div>
    </footer>
  )
}

export default Footer