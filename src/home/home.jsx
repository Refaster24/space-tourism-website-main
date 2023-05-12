function Home() {
  return (
    <main className='py-[10em] min-h-screen grid place-items-center bg-cover bg-no-repeat bg-[url("/assets/home/background-home-desktop.jpg")] max-lg:bg-[url("/assets/home/background-home-tablet.jpg")]'>
      <section className="flex justify-evenly max-lg:flex-col items-center max-lg:w-[30em] max-md:w-auto">
        <div className="basis-1/2 pr-10 max-lg:text-center max-lg:mb-12 max-lg:pr-0 max-md:px-4">
          <span className="text-[#d0d6f9] text-3xl max-md:text-2xl">So, you want to travel to</span>
          <h1 className="text-[10em] text-white Bellefair max-md:text-9xl max-md:mb-4">Space</h1>
          <p className="text-xl text-[#d0d6f9] max-md:w-[340px]">
          Let’s face it; if you want to go to space, you might as well genuinely go to 
          outer space and not hover kind of on the edge of it. Well sit back, and relax 
          because we’ll give you a truly out of this world experience!
          </p>
        </div>
        <a href="../destination.html">
          <button className='bg-white text-[#292929] py-[2em] px-[1em] text-5xl rounded-[50%] border-0 transition-all hover:border-[12px] hover:border-[#979797]'>Explore</button>
        </a>
      </section>
    </main>
  )
}

export default Home