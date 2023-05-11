import { useEffect ,useState } from 'react'
import {destinations} from '../data'

export default function Destination(){

    const [data,setData] = useState([])
    const [state, setState] = useState([])

    useEffect(()=>{
        async function fetchApi(){
            const api = await destinations()
            const apiData = await api
            setData(apiData)
            setState([apiData[0]])
        }
        fetchApi()
    },[])

    const naturalSatellite=[]

    for(let i=0;i < data.length;i++){
        naturalSatellite.push(<li key={i} onClick={()=>setState([data[i]])} className="px-2 cursor-pointer hover:border-b-2 hover:border-b-white">{data[i].name}</li>)
    }

    return (
    <main className='py-[10em] min-h-screen grid place-items-center bg-cover bg-no-repeat bg-[url("./assets/destination/background-destination-desktop.jpg")] max-lg:bg-[url("./assets/destination/background-destination-tablet.jpg")]'>
          {
              state.map((e,id)=>{
                return (
    <section key={id} className="flex justify-evenly max-lg:flex-col items-center max-lg:w-[30em] max-md:w-auto">
        <div className="max-lg:w-[26em] max-md:w-[21em]">
            <p className="text-3xl text-center text-white mb-4 max-md:text-2xl">
                <span className='text-[#d0d6f9] mr-4'>01</span>
                PICK YOUR DESTINATON
            </p>

            <img src={e.images.png} alt={e.name}/>
        </div>
        <div className="basis-2/5 max-lg:text-center max-lg:my-12 max-lg:pr-0 max-md:px-4">
            <ul className="flex justify-between text-[#d0d6f9] text-2xl">

                {naturalSatellite.map((e,id)=>{
                    return <div key={id}>{e}</div>
                }
                )}

            </ul>
            <h1 className="text-9xl text-white my-4 Bellefair max-md:text-8xl max-md:mb-4">{e.name}</h1>
            <p className="text-xl text-[#d0d6f9] max-md:w-[340px]">
            {e.description}
            </p>
            <hr className='bg-[#d0d6f9] my-8'/>

            <div className="text-white flex justify-evenly">

                <div className="flex flex-col items-center">
                    <span className="">AVG. DISTANCE</span>
                    <span className="text-3xl">{e.distance}</span>
                </div>

                <div className="flex flex-col items-center">
                    <span className="">EST. TRAVEL TIME</span>
                    <span className="text-3xl">{e.travel}</span>
                </div>

            </div>

        </div>
    </section>
                )
            })
        }
    </main>
    )
}