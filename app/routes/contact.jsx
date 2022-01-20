import { useEffect, useRef, useState} from "react"
import gsap from 'gsap'

function contact() {
  const boxRef = useRef()
  const smBoxRef = useRef()
  const btnRef = useRef()
  const tl = useRef()
  const q = gsap.utils.selector(boxRef)
  const [count, setCount] = useState(0)

  const onEnter = ({currentTarget}) => {
    gsap.to(currentTarget, {backgroundColor: 'green'})
  }
  
  // useEffect(() => {
    
  //  btnRef.current.addEventListener('mouseenter', () => {
  //   tl.current = gsap.timeline()
  //   .to(q('.box'), {rotate: '360'})
  //   .to(q('.ball'), {x :100})

  // })

  // ,[])

  console.log("render")
  return (
    <div className="m-20" >
      <div className="box" ref={boxRef} >
        <div className="flex items-center justify-center w-10 h-10 bg-transparent border-2 border-black box">
        </div>
        <div className="w-5 h-5 border-2 border-red-600 rounded-full ball" onMouseEnter={onEnter}></div>

      </div>
      <button ref={btnRef}>CLICK</button>
    </div>
  )
}

export default contact
