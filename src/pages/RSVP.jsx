const RSVP = () => {
  return (
    <div className='flex justify-center bg-zinc-900 h-screen w-full'>
      <div className='mt-48 max-w-xl'>
        <div className='flex flex-col justify-items-center border-solid border-2 border-gold rounded p-3 bg-white'>
          <p className='text-gold tracking-wide text-center text-lg'>
            Please enter the first and last name of one member of your party below.<br/>
            If you're responding for you and a guest, you'll be able to RSVP for your entire party on the next page.
          </p>
          <div class="flex flex-col justify-center items-center pt-4">
            <textarea
              id="name"
              name="name"
              rows="1"
              placeholder="First and Last Name"
              class="w-4/6 p-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none"/>
          </div>
          <p className='font-light text-sm text-center pt-1'>Ex. Stephen Strange (not Dr. Strange or Sorceror Supreme Strange)</p>
          <div className='flex justify-center'>
            <button 
              class="px-4 py-2 bg-blood-red text-white rounded-lg shadow-md 
              hover:bg-dark-red focus:outline-none focus:ring-2 focus:ring-gold 
              focus:ring-opacity-75 mt-4 max-w-fit">Continue
            </button>
          </div>          
        </div>
      </div>
    </div>
  )
}

export default RSVP