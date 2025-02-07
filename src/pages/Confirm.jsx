import React from 'react'

const Confirm = () => {
  return (
    <div className='flex justify-center bg-zinc-900 h-screen w-full'>
      <div className='my-auto max-w-lg'>
        <div className='grid justify-items-center border-solid border-2 border-gold rounded p-4 mx-6 bg-pale-gold'>
          <p className='text-gold tracking-wide text-center text-xl'>We are excited to have you celebrate with us!</p>
          <p className='text-center'>If you would like to request a song for the DJ, please enter your submission below</p>
          <div className='flex flex-col justify-center w-2/3 items-center pt-4'>
            <input
              type='text'
              rows='1'
              className='w-full p-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent'/>
          </div>
          <div className='flex justify-center my-2'>
            <button 
              class='px-4 py-2 bg-blood-red text-white rounded-lg shadow-md 
              hover:bg-dark-red focus:outline-none focus:ring-2 focus:ring-gold 
              focus:ring-opacity-75 mt-4 max-w-fit'>Let's Dance!
            </button>
          </div>
        </div>
      </div>

      <div className='my-auto max-w-lg'>
        <div className='grid justify-items-center border-solid border-2 border-gold rounded p-4 mx-6 bg-pale-gold'>
          <p className='text-gold tracking-wide text-center text-lg'>
            Thank you for letting us know. We'll miss you at the wedding, 
            but look forward to reconnecting soon!</p>
        </div>
      </div>
    </div>
  )
}

export default Confirm