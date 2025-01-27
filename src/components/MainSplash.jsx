import backdrop from '../assets/images/marble.png';
import { Link } from 'react-router-dom';

const MainSplash = () => {
  return (
    <div className='flex flex-col items-center bg-zinc-900 h-screen w-full'>
      <img src={backdrop} className='relative w-2/3'/>
      <div className='absolute top-80 flex flex-col justify-center items-center border-solid border-2 border-gold rounded bg-pale-gold p-10'>
        <div className='uppercase tracking-widest text-6xl text-center text-blood-red'>
          <p>joanne</p>
          <p className='text-gold'>+</p>
          <p>eliot</p>
        </div>
        <p className='uppercase tracking-widest text-xl font-light mt-8'>october 5, 2025</p>
        <div className='flex flex-col justify-center items-center mt-12'>
          <Link to='/rsvp'>
            <div className='border-solid border-2 border-gold p-3 uppercase text-2xl text-gold tracking-widest'>rsvp by august 1, 2025</div>
          </Link>
        </div>
      </div>
      <div className='absolute top-[calc(80%)] w-3/5 border-t-2 border-gold text-white'>
        <div className='flex flex-row justify-around uppercase text-center'>
          <p>boy meets girl <br/> <span className='normal-case'>box step-ups at the gym</span></p>
          <p>1st date <br/> <span className='normal-case'>bad Thai food take-out</span></p>
          <p>the moment <br/> <span className='normal-case'>a weekend in Joshua Tree</span></p>
          <p>she said yes! <br/> <span className='normal-case'>fireworks (or gunshots?) in Hawaii </span></p>
        </div>
      </div>
    </div>
  )
}

export default MainSplash