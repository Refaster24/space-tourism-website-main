import { useEffect ,useState } from 'react'
import {crew} from '../data'

export default function Crew(){

    const [data,setData] = useState([])
    const [state, setState] = useState([])

    // I want to use the fetch XD
    
    useEffect(()=>{
        async function fetchApi(){
            const api = await crew()
            const apiData = await api
            setData(apiData)
            setState([apiData[0]])
        }
        fetchApi()
    },[])
    
    const member=[]
    const activeState = document.querySelectorAll('#member ul li')
    
    for(let i=0;i < data.length;i++){
        // everytime i click in elemnt :
        // 1- loop through every li elemnt to make the "opacity = .3" every time 
        // 2- make the the "opacity = 1" to the elemnt that i cliked 
        // 3-change the state
        function event(currentElemnt){
            activeState.forEach(elemnt=>{
                elemnt.style.opacity = .3
            })
            currentElemnt.target.style.opacity = 1
            setState([data[i]])
        }
        member.push(<li key={i} onClick={event} 
        className="cursor-pointer w-6 h-6 opacity-30 bg-white rounded-3xl"></li>)
    }

    return (

    <main className='pt-[10em] min-h-screen grid place-items-center content-end bg-cover bg-no-repeat bg-[url("./assets/crew/background-crew-desktop.jpg")] max-lg:bg-[url("./assets/crew/background-crew-tablet.jpg")]'>
          {
              state.map((e,id)=>{
                return (
    <section key={id} className="flex items-center justify-between max-lg:flex-col lg:items-end max-lg:w-[30em] max-md:w-auto max-md:flex-col-reverse">
        <div className="basis-2/5 self-center flex flex-col space-y-4 max-md:items-center max-lg:text-center max-lg:my-12 max-lg:pr-0 max-md:px-4">
            <p className="text-xl text-white max-md:text-xl">
                <span className='text-[#d0d6f9] mr-4'>02</span>
                MEET YOUR CREW
            </p>
            <span className="block text-3xl text-[#d0d6f9]">{e.role}</span>
            <h1 className="text-[3.5em] text-white Bellefair">{e.name}</h1>
            <p className="text-xl text-[#d0d6f9] lg:w-[20em] max-md:max-w-[340px]">
            {e.bio}
            </p>

            <div id='member' className="flex max-lg:justify-center gap-4 mt-4 text-[#d0d6f9] text-2xl">

                {member.map((e,id)=>{
                    return <ul key={id}>{e}</ul>
                }
                )}

            </div>
        </div>
        <div className="basis-2/5 2xl:min-w-[30vw] lg:min-w-[20vw] max-md:max-w-[250px]">
            <img src={e.images.png} alt={e.name} className='lg:h-full lg:w-full'/>
            <hr className='hidden max-md:block' />
        </div>
    </section>
                )
            })
        }
    </main>
    )
}