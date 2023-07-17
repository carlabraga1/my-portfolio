
import Header from '@/components/header/header'
import "./styles/home.scss"
import { Experience } from '@/components/experience/experience'

export default function Home() {
  return (
    <main className="container" >
    <Header/>
    <Experience/>
        <div className="infos">
          <h3>Languages</h3>
          <div className="languages-info">
            <span> EN - Fluent</span>
            <span> PT-BR - Native Speaker</span>
          </div>
          <h3>Education</h3>
          <div className="educational-info">
            <span>🎓</span>
            <span>analysis and systems development - Fametro </span>
          </div>
        </div>
        <div className="buttons">
          <div className="social">

          </div>
          <button>Contact me</button>
        </div>
      
     

    </main>
  )
}
