const Schedule = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-zinc-900 mt-14'>
      <div className='mt-12 w-1/2 bg-white border-x-2 border-t-2 border-gold rounded-t-sm'>
        <p className='uppercase tracking-wide text-6xl text-center text-blood-red pt-4 bg-pale-gold'>schedule</p>
        <p className='tracking-wide text-xl text-center bg-pale-gold pt-10'>SmogShoppe by Marvimon</p>
        <a href='https://goo.gl/maps/GxQEFx14h62n3ynx7'
           target='_blank'
           rel='noopener noreferrer'
           className='block tracking-wide text-lg text-center underline font-light bg-pale-gold'>2651 S La Cienega Blvd, Los Angeles, CA 90034</a>
      </div>

      <div className='flex justify-center'>
        <div className='grid grid-cols-2 justify-items-stretch pt-10 w-1/2 border-x-2 border-gold pb-2 bg-pale-gold'>
          {/* ROW 1 */}
          <div className='border-solid border-r-2 border-blood-red'></div>
          <div className='border-solid border-l-2 border-blood-red p-4'>
            <div className='uppercase tracking-wide text-5xl text-gold'>welcome drinks</div>
            <p className='mt-2'>5:00 - 6:00</p>
            <div className='font-light text-xl w-3/4 mt-4 tracking-wide'>Let's all have a drink and celebrate together! Enjoy the open bar with His & Her's custom cocktails, beer & wine,
              while snacking on passed appetizers. Mingle, play games and enjoy music by DJ XXX
            </div>
          </div>

          {/* ROW 2 */}
          <div className='border-solid border-r-2 border-blood-red p-4 text-right'>
            <div className='uppercase tracking-wide text-5xl text-gold'>love story recap</div>
            <p>6:00 - 6:20</p>
            <p className='font-light text-xl ml-32 mt-4 tracking-wide'>Time for some embarrassing stories of how Joanne & Eliot met!
            </p>
          </div>          
          <div className='border-solid border-l-2 border-blood-red'></div>

          {/* ROW 3 */}
          <div className='border-solid border-r-2 border-blood-red'></div>
          <div className='border-solid border-l-2 border-blood-red p-4'>
            <div className='uppercase tracking-wide text-5xl text-gold'>dinner</div>
            <p>6:30 - 7:30</p>
            <div className='font-light text-xl w-3/4 mt-4 tracking-wide'>Buffet service by Fundamental Catering. Wedding cake by... Eliot?!
            </div>
          </div>

          {/* ROW 4 */}
          <div className='border-solid border-r-2 border-blood-red p-4 text-right'>
            <div className='uppercase tracking-wide text-5xl text-gold'>celebration</div>
            <p>7:30 - 10:00</p>
            <div className='font-light text-xl ml-32 mt-4 tracking-wide'>Open bar. Bangers by DJ XXX. Dance floor.
            </div>
          </div>
          <div className='border-solid border-l-2 border-blood-red'></div>

          {/* ROW 5 */}
          <div className='border-solid border-r-2 border-blood-red'></div>
          <div className='border-solid border-l-2 border-blood-red p-4'>
            <div className='uppercase tracking-wide text-5xl text-gold'>after party</div>
            <p>10:30 -</p>
            <div className='font-light text-xl w-3/4 mt-4 tracking-wide'>Still haven't had enough?? Join the brave and the bold across the street 
            at No Smoking Bar for some Incredible Hulk Jr's and cup ramen
            </div>
          </div>

        </div>
      </div>

      <div className='w-1/2 bg-pale-gold border-x-2 border-b-2 mb-36 pb-10 border-gold'>
        <div className='flex flex-col mx-32'>
          <p className='uppercase tracking-wide text-3xl text-center text-blood-red pt-10 bg-pale-gold'>parking</p>
          <p className='text-center font-light text-xl'>Lyft is your friend!
            <br/>There will be limited valet available, as well as street parking on La Cienega Blvd.
            <br/>Residential parking is not recommended.</p>
            <br/>
            <p className='uppercase tracking-wide text-3xl text-center text-blood-red pt-10 bg-pale-gold'>ATTIRE</p>
          <p className='text-center font-light text-xl'><span className='font-normal'>Formal</span>
            <br/>Dark colors requested. Strike a balance between elegant and comfortable. 
            <br/>Think cocktail party at the Haunted Mansion 👻🧛🏻‍♂️
            <br/>(No jeans, t-shirts, or sneakers)</p>
        </div>
      </div>
    </div>
  )
}

export default Schedule