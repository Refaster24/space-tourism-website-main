import { useEffect ,useState } from 'react'
import {technology} from '../data'

export default function Technology(){

    const [data,setData] = useState([])
    const [state, setState] = useState([])

    // I want to use the fetch XD
    
    useEffect(()=>{
        async function fetchApi(){
            const api = await technology()
            const apiData = await api
            setData(apiData)
            setState([apiData[0]])
        }
        fetchApi()
    },[])

    const spaceLaunchs=[]
    const activeState = document.querySelectorAll('#spaceLaunchs ul li')
    
    for(let i=0;i < data.length;i++){
        // everytime i click in elemnt :
        // 1- loop through every li elemnt to make the "opacity = .3" every time 
        // 2- make the the "opacity = 1" to the elemnt that i cliked 
        // 3-change the state
        function event(currentElemnt){
            setState([data[i]])
            activeState.forEach(elemnt=>{
                elemnt.style.opacity = .3
            })
            currentElemnt.target.style.opacity = 1
        }
        const numberOfSpaceLaunchs = i + 1
        spaceLaunchs.push(<li key={i} onClick={event} 
        className="cursor-pointer w-24 h-24 opacity-30 text-black text-4xl grid justify-center content-center bg-white rounded-[50%]">{numberOfSpaceLaunchs}</li>)
    }

    return (
    <main className='pt-[10em] min-h-screen grid lg:place-items-end content-center bg-cover bg-no-repeat bg-[url(".../public/assets/technology/background-technology-desktop.jpg")] max-lg:place-items-center max-lg:bg-[url(".../public/assets/technology/background-technology-tablet.jpg")]'>
          {
              state.map((e,id)=>{
                  let image = e.images.portrait
                  if (window.innerWidth <= 1024){
                    image = e.images.landscape
                  }
                return (
    <section key={id} className="flex items-center justify-end gap-36 pl-4 max-lg:flex-col-reverse lg:items-end max-lg:w-[30em] max-md:w-auto max-md:gap-7">
        <div className="basis-2/5 self-center flex space-y-4 max-lg:flex-col max-lg:text-center max-lg:my-12 max-lg:pr-0 max-md:px-4 max-md:items-center">
            <div id='spaceLaunchs' className="flex lg:flex-col  gap-4 mt-4 text-[#d0d6f9] text-2xl lg:mr-10 max-lg:justify-center">

                {spaceLaunchs.map((e,id)=>{
                    return <ul key={id}>{e}</ul>
                }
                )}

            </div>
            <div>
                <p className="text-xl text-white max-md:text-xl">
                    <span className='text-[#d0d6f9] mr-4'>02</span>
                    MEET YOUR CREW
                </p>
                <span className="block text-3xl text-[#d0d6f9]">{e.role}</span>
                <h1 className="text-[3.5em] text-white Bellefair">{e.name}</h1>
                <p className="text-xl text-[#d0d6f9] lg:w-[20em] max-md:max-w-[340px]">
                {e.description}
                </p>
            </div>

        </div>
        <div className="basis-2/5 2xl:min-w-[30vw] lg:min-w-[20vw] max-md:min-w-[250px]">
            <img src={image} alt={e.name} className='lg:h-full lg:w-full'/>        </div>
    </section>
                )
            })
        }
    </main>
    )
}