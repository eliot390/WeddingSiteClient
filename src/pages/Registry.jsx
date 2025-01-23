import venmo from '../assets/images/venmo.jpg'
import trip from '../assets/images/trip.jpg'

const Registry = () => {
  return (
    <div className='flex justify-center bg-zinc-900 h-screen w-full'>
      <div className='mt-36 max-w-lg'>
        <div className='grid justify-items-center border-solid border-2 border-gold rounded px-3 py-6 bg-white'>
          <p className='text-gold tracking-wide text-center text-lg'>
          In lieu of traditional gifts, we would be delighted if you could contribute to our honeymoon fund, 
          helping us create unforgettable memories as we continue our married life together.
          </p>
          <img src={trip} className='w-2/3 mt-4'/>
          <img src={venmo} className='w-2/3 mt-4'/>
        </div>
      </div>
    </div>
  )
}

export default Registry