const Information = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-zinc-900 mt-14'>
      <div className='mt-12 lg:w-1/2 w-5/6 bg-white border-x-2 border-t-2 border-gold rounded-t-sm'>
        <p className='uppercase tracking-wide lg:text-4xl text-4xl text-center text-blood-red pt-4 bg-pale-gold'>information</p>
        <p className='tracking-wide lg:text-xl text-xl text-center bg-pale-gold pt-2 lg:pt-4'>SmogShoppe by Marvimon</p>
        <a href='https://goo.gl/maps/GxQEFx14h62n3ynx7'
           target='_blank'
           rel='noopener noreferrer'
           className='block tracking-wide lg:text-lg text-center underline font-light bg-pale-gold'>2651 S La Cienega Blvd, Los Angeles, CA 90034</a>
        <p className='uppercase tracking-wide text-3xl text-center text-blood-red pt-10 bg-pale-gold'>schedule</p>
      </div>

      <div className='flex justify-center lg:w-1/2 w-5/6'>
        <div className='grid grid-cols-2 justify-items-stretch pt-2 w-full border-x-2 border-gold pb-2 bg-pale-gold'>
          {/* ROW 1 */}
          <div className='border-solid border-r-2 border-blood-red'></div>
          <div className='border-solid border-l-2 border-blood-red pl-2 lg:p-4'>
            <div className='uppercase tracking-wide lg:text-4xl text-lg text-gold'>welcome drinks</div>
            <p className='mt-2'>5:00 - 6:00</p>
            <div className='font-light lg:text-xl lg:w-3/4 lg:mt-4 tracking-wide'>
              Mingle in the courtyard and enjoy the open bar with His & Her's custom cocktails, beer, wine, and tray passed appetizers.
            </div>
          </div>

          {/* ROW 2 */}
          <div className='border-solid border-r-2 border-blood-red pr-2 lg:p-4 text-right'>
            <div className='uppercase tracking-wide lg:text-4xl text-lg text-gold'>we still do...</div>
            <p>6:00 - 6:20</p>
            <p className='font-light lg:text-xl lg:ml-32 lg:mt-4 tracking-wide'>For those who missed it the first time.<br/>Now, with a proper kiss</p>
          </div>          
          <div className='border-solid border-l-2 border-blood-red'></div>

          {/* ROW 3 */}
          <div className='border-solid border-r-2 border-blood-red'></div>
          <div className='border-solid border-l-2 border-blood-red pl-2 lg:p-4'>
            <div className='uppercase tracking-wide lg:text-4xl text-lg text-gold'>dinner & celebration</div>
            <p>7:00 - 10:00</p>
            <div className='font-light lg:text-xl lg:w-3/4 lg:mt-4 tracking-wide'>
              Hope you didn't fill up on appetizers! Enjoy the delicious buffet spread & (Eliot-made) desserts.
            </div>
          </div>

          {/* ROW 4 */}
          {/* <div className='border-solid border-r-2 border-blood-red pr-2 lg:p-4 text-right'>
            <div className='uppercase tracking-wide lg:text-4xl text-lg text-gold'>celebration</div>
            <p>7:30 - 10:00</p>
            <div className='font-light lg:text-xl lg:ml-32 lg:mt-4 tracking-wide'>Open bar & open dance floor</div>
          </div>
          <div className='border-solid border-l-2 border-blood-red'></div> */}

          {/* ROW 5 */}
          {/* <div className='border-solid border-r-2 border-blood-red'></div>
          <div className='border-solid border-l-2 border-blood-red p-4'>
            <div className='uppercase tracking-wide lg:text-5xl text-lg text-gold'>after party</div>
            <p>10:30 -</p>
            <div className='font-light lg:text-xl lg:w-3/4 lg:mt-4 tracking-wide'>Still haven't had enough?? Join the brave and the bold across the street 
            at No Smoking Bar for some Incredible Hulk Jr's and cup ramen
            </div>
          </div> */}

        </div>
      </div>

      <div className='lg:w-1/2 w-5/6 bg-pale-gold border-x-2 border-b-2 mb-36 pb-10 border-gold'>
        <div className='flex flex-col lg:w-full'>
          <p className='uppercase tracking-wide text-3xl text-center text-blood-red pt-10 bg-pale-gold'>parking</p>
          <p className='text-center font-light px-4 lg:px-0 lg:text-xl'><span className='font-normal'>Lyft is your friend!</span>
            <br/>A limited amount of valet spots will be available, as well as street parking on La Cienega Blvd.
            <br/>Residential parking is not recommended.
          </p>
          <br/>

          <p className='uppercase tracking-wide text-3xl text-center text-blood-red pt-10 bg-pale-gold'>attire</p>
          <p className='text-center font-light px-4 lg:px-0 lg:text-xl'><span className='font-normal'>Semi-Formal</span>
            <br/>Dark colors requested. Strike a balance between elegant and comfortable!
            <br/>Think cocktail party at the Haunted Mansion 👻🧛🏻‍♂️
            <br/>(No jeans, t-shirts, etc...)
          </p>
          <br/>
            
          <p className='uppercase tracking-wide text-3xl text-center text-blood-red pt-10 bg-pale-gold'>accomodations</p>
          <p className='text-center font-light px-4 lg:px-0 lg:text-xl'>
            <span className='font-normal'>Suggested hotels near SmogShoppe</span><br/>
            <br/><span className='font-normal'>The Culver Hotel</span>
            <br/>9400 Culver Boulevard, Culver City, CA 90232
            <br/>(310) 558-9400
            <br/><a href='https://www.culverhotel.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='block tracking-wide lg:text-lg text-center underline font-light bg-pale-gold'>culverhotel.com</a>
            <br/><span className='font-normal'>Palihotel Culver City</span>
            <br/>3927 Van Buren Place, Culver City, CA 90232
            <br/>(424) 321-7000
            <br/><a href='https://www.palisociety.com/hotels/culver-city'
            target='_blank'
            rel='noopener noreferrer'
            className='block tracking-wide lg:text-lg text-center underline font-light bg-pale-gold'>palisociety.com</a>
            <br/><span className='font-normal'>The Shay by Hyatt</span>
            <br/>8801 Washington Boulevard, Culver City, CA 90232
            <br/>(424) 361-6700
            <br/><a href='https://www.hyatt.com/destination-by-hyatt/en-US/laxdi-the-shay'
            target='_blank'
            rel='noopener noreferrer'
            className='block tracking-wide lg:text-lg text-center underline font-light bg-pale-gold'>hyatt.com</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Information