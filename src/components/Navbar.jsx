import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div >
      <div className='mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='flex h-14 items-center justify-between'>
          <p className='uppercase tracking-widest text-4xl text-blood-red'>joanne + eliot</p>
            <div className='md:ml-auto'>
              <div className='flex space-x-2'>
                <Link to='/home' className='uppercase pr-4 font-light hover:underline'>h o m e</Link>
                <Link to='/schedule' className='uppercase pr-4 font-light hover:underline'>s c h e d u l e</Link>
                <Link to='/registry' className='uppercase font-light hover:underline'>r e g i s t r y</Link>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar