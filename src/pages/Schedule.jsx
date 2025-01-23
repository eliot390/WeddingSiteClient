const Schedule = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-zinc-900 mt-14'>
      <div className='mt-12 w-1/2 bg-white border-x-2 border-t-2 border-gold rounded-t-sm'>
        <p className='uppercase tracking-wide text-6xl text-center text-blood-red pt-4 bg-pale-gold'>schedule</p>
      </div>      
      <div className='flex justify-center'>
        <div className='grid grid-cols-2 justify-items-stretch pt-5 w-1/2 border-x-2 border-b-2 border-gold rounded-b-sm pb-2 mb-6 bg-pale-gold'>
          <div className='border-solid border-r-2 border-gold'></div>
          <div className='border-solid border-l-2 border-gold p-4'>
            <div className='uppercase tracking-wide text-6xl text-blood-red'>welcome drinks</div>
            <p className='mt-2'>5:00 - 6:00</p>
            <div className='font-light text-xl w-3/4 mt-4 tracking-wide'>Let's all have a drink and celebrate together! Enjoy the open bar with His & Her's custom cocktails, beer & wine,
              while snacking on passed appetizers from Fundamental Catering. Mingle, play games and enjoy music by DJ XXX
            </div>
          </div>
          <div className='border-solid border-r-2 border-gold p-4 text-right'>
            <div className='uppercase tracking-wide text-6xl text-blood-red'>love story recap</div>
            <p>6:00 - 6:20</p>
            <p className='font-light text-xl ml-32 mt-4 tracking-wide'>Listen a short retelling of how Joanne & Eliot met.
            </p>
          </div>          
          <div className='border-solid border-l-2 border-gold'></div>
          <div className='border-solid border-r-2 border-gold'></div>
          <div className='border-solid border-l-2 border-gold p-4'>
            <div className='uppercase tracking-wide text-6xl text-blood-red'>dinner</div>
            <p>6:30 - 7:30</p>
            <div className='font-light text-xl w-3/4 mt-4 tracking-wide'>Let's all have a drink and celebrate together! Enjoy the open bar with His & Her's custom cocktails, beer & wine,
              while snacking on passed appetizers from Fundamental Catering. Mingle, play games and enjoy music by DJ XXX
            </div>
          </div>
          <div className='border-solid border-r-2 border-gold p-4 text-right'>
            <div className='uppercase tracking-wide text-6xl text-blood-red'>celebration</div>
            <p>7:30 - 10:00</p>
            <div className='font-light text-xl ml-32 mt-4 tracking-wide'>Let's all have a drink and celebrate together! Enjoy the open bar with His & Her's custom cocktails, beer & wine,
              while snacking on passed appetizers from Fundamental Catering. Mingle, play games and enjoy music by DJ XXX
            </div>
          </div>
          <div className='border-solid border-l-2 border-gold'></div>
        </div>
      </div>
    </div>
  )
}

export default Schedule