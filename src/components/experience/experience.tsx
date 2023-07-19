import Image from "next/image"
import { SectionTitle } from "../sectionTittle/section-title"
import "./experience.scss"

export function Experience(){
    return(
        <div className="experience">

        <SectionTitle text="About Me"/>
        <p>I'm Carla Braga and since I was very young, technology has always been part of my life and has become my great passion. 
            I am currently studying Systems Analysis and Development at Fametro and I have knowledge in technologies such as HTML, CSS, JavaScript, React JS, React Native. I'm always looking to learn more, deepen my knowledge and explore new technologies.</p>
            <SectionTitle text=" My Experience"/>
        <div className="experience-time">
            <div className="experience-language">
            <Image
             src="/JS ICON.png"
             alt="JS Logo"
             width={50}
             height={50}
             priority
           />
            <div className="experience-unit">
                <div className="experience-measure measure-1"> 
                    <span>1 year</span>                
                </div>
            </div>
            </div>
            <div className="experience-language">
            <Image
             src="/React icon.webp"
             alt=" React Logo"
             width={50}
             height={50}
             priority
           />
            <div className="experience-unit">
                <div className="experience-measure measure-2"> 
                <span>1 year</span>                
                </div>
            </div>
            </div>
            <div className="experience-language">
            <Image
             src="/typescript icon.png"
             alt="Type Logo"
             width={50}
             height={50}
             priority
           />
            <div className="experience-unit">
                <div className="experience-measure measure-3"> 
                <span>5 months</span>                
                </div>
            </div>
            </div>
            <div className="experience-language">
            <Image
             src="/python logo.avif"
             alt="Type Logo"
             width={50}
             height={50}
             priority
           />
            <div className="experience-unit">
                <div className="experience-measure measure-4" >
                    <span>2 months</span>                 
                </div>
            </div>
            </div>

        </div>
        </div>
    )
}