import venmo from '../assets/images/venmo.jpg'
import trip from '../assets/images/travel-map.jpg'

const Registry = () => {
  return (
    <div className='flex justify-center bg-zinc-900 h-screen w-full'>
      <div className='my-auto max-w-lg'>
        <div className='grid justify-items-center border-solid border-2 border-gold rounded p-4 mx-6 bg-pale-gold'>
          <p className='text-gold tracking-wide text-center text-lg'>
          Your presence is our present! <br/>However, if you wish to honor us with a gift, we would gratefully accept a contribution to our 
          honeymoon fund below, helping us create unforgettable memories as we continue our married life together.
          </p>
          <img src={trip} className='lg:w-2/3 w-1/2 mt-4'/>
          <img src={venmo} className='lg:w-2/3 w-1/2 mt-4'/>
        </div>
      </div>
    </div>
  )
}

export default Registry