import { SectionTitle } from "../sectionTittle/section-title"
import "./information.scss"



export function Info(){
    return(
        <div className="infos">
        <SectionTitle text="Languages"/>
        <div className="languages-info">
          <span> English - Advanced</span>
          <span> Portuguese-BR - Native Speaker</span>
        </div>
       <SectionTitle text="Education"/>
        <div className="educational-info">
          <span>🎓</span>
          <span>analysis and systems development - Fametro </span>
        </div>
      </div>
    )
}