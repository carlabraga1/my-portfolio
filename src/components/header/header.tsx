
import Image from 'next/image'
import "./header.scss"

export default function Header(){
    return(
        <div className="header">
        
           <div>
             <h1>Hi, I&apos;m Carla Braga!🖐️</h1>
             <h2>FRONTEND DEVELOPER</h2>
           </div>
        <Image
             src="/Eu.png"
             alt="Vercel Logo"
             width={325}
             height={277}
             priority
           />
     </div>
    )
}