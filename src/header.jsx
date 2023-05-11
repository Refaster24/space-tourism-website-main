import logo from './assets/shared/logo.svg'
import close from './assets/shared/icon-close.svg'
import hamburger from'./assets/shared/icon-hamburger.svg'
import { useState ,useEffect } from 'react'

export default function Header(){
    const [windowWidth,setWindowWidth] =useState(window.innerWidth)
    const [state,setState] = useState(true)

    function rotate(){
      setWindowWidth(window.innerWidth)
    }

    useEffect(()=>{
      window.addEventListener('resize',rotate)
    },[])

    
    let desktopUlDisplay
    let buttonDisplay =  'none'
    let icone = hamburger
    let mobileUlDisplay= 'none'
    
    if(windowWidth <= 768){
        desktopUlDisplay = 'none'
        buttonDisplay = 'block'
        if(state === false){
            icone = close
            mobileUlDisplay = 'block'
        }
    }

    const links=(
        <>
            <li className="py-8 px-4 border-white hover:border-b-2">
                <a href="../index.html">
                    <span className="pr-2">00</span> Home
                </a>
            </li>       

            <li className="py-8 px-4 border-white hover:border-b-2">
                <a href="../destination.html">
                    <span className="pr-2">01</span> Destination
                </a>
            </li>

            <li className="py-8 px-4 border-white hover:border-b-2">
                <a href="../crew.html">
                    <span className="pr-2">02</span> Crew
                </a>
            </li>
            
            <li className="py-8 px-4 border-white hover:border-b-2">
                <a href="../technology.html">
                    <span className="pr-2">03</span> Technology
                </a>
            </li>
        </>
    )

    const mobileNav =(
        <>
    <button style={{display:buttonDisplay}} onClick={()=>setState(!state)}>
        <img src={icone} alt="nav bar icone" />
    </button>

    <ul style={{display:mobileUlDisplay}} className='absolute z-20 right-0 top-16 px-8 text-white bg-transparent backdrop-blur-md flex flex-col gap-12'>
        {links}
    </ul>
      </>
    )
    
    return(
        <header className='px-12 absolute top-6 w-full flex items-center justify-between'>
            <a href="../index.html">
            <img src={logo} alt="logo"/>
            </a>
            <nav>
                <ul style={{display:desktopUlDisplay}} className="text-white bg-transparent backdrop-blur-md flex gap-12">
                    {links}
                </ul>
                {mobileNav}
            </nav>
        </header>
    )
}