import logo from '../assets/images/watercolor_layer.png';
import { Link } from 'react-router-dom';

const MainSplash = () => {
  return (
    <div className='flex flex-col justify-center items-center'>      
        <img src={logo} className='w-2/3'></img>
        <div className='uppercase tracking-widest text-6xl text-center text-blood-red'>
          <p>joanne</p>
          <p className='text-gold'>+</p>
          <p>eliot</p>
        </div>
        <p className='uppercase tracking-widest text-xl font-light mt-8'>october 5, 2025</p>
        <div className='flex flex-col justify-center items-center mt-12'>
          <Link to='/rsvp'>
            <div className='border-solid border-2 border-gold p-3 uppercase text-2xl text-gold tracking-widest'>rsvp by july 1, 2025</div>
          </Link>
        </div>
    </div>
    
  )
}

export default MainSplash