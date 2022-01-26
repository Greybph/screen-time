import gsap from "gsap"
import { useEffect, useRef } from 'react'
import animations from '../styles/animations.css'
import HeroDark from '../components/HeroDark'

export function links() {
  return [{rel: 'stylesheet', href: animations}]
}
  
  function Index() {

    return (    
        <div className="flex flex-col items-center justify-center mt-96">
          <HeroDark />
        </div>
    )
  }
  
  export default Index
  

// https://langmobile.com/en/