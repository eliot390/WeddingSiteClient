import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
  const location = useLocation();

  return (
    <div>
      <div className='fixed top-0 left-0 w-full z-50 mx-auto px-2 sm:px-6 lg:px-8 border-solid border-b-4 border-gold bg-white'>
        <div className='flex h-14 items-center justify-around'>
          <p className='uppercase lg:tracking-widest text-sm lg:text-4xl text-blood-red'>joanne + eliot</p>
            <div className='md:ml-auto'>
              <div className='flex space-x-2 uppercase tracking-tighter text-sm font-light lg:tracking-wide lg:text-lg'>
                <Link to='/' className={`lg:pr-4 hover:underline ${location.pathname === '/' ? 'underline' : ''}`}>h o m e</Link>
                <Link to='/rsvp' className={`lg:pr-4 hover:underline ${location.pathname === '/rsvp' ? 'underline' : ''}`}>r s v p</Link>
                <Link to='/schedule' className={`lg:pr-4 hover:underline ${location.pathname === '/schedule' ? 'underline' : ''}`}>i n f o r m a t i o n</Link>
                <Link to='/registry' className={`hover:underline ${location.pathname === '/registry' ? 'underline' : ''}`}>r e g i s t r y</Link>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar