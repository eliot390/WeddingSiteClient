import { useState } from 'react';

const RSVP = () => {
  const guestGroups = {
    'eliot pardo': ['Eliot Pardo', 'Joanne Pardo'],
    'joanne jardo': ['Joanne Pardo', 'Eliot Pardo'],
    'cheddar': ['Cheddar', 'Colby'],
    'colby': ['Colby', 'Cheddar']
  };
  // const [enteredName, setEnteredName] = useState('');
  // const [group, setGroup] = useState(undefined); // Null means no check has been made yet

  // const handleCheckGuest = () => {
  //   // Find the group associated with the entered name
  //   const matchedGroup = guestGroups[enteredName.trim()] || null;
  //   setGroup(matchedGroup || null);
  // };

  // return (
  //   <div className='flex justify-center bg-zinc-900 h-screen w-full'>
  //     <div className='mt-48 max-w-xl'>
  //       <div className='flex flex-col justify-items-center border-solid border-2 border-gold rounded p-3 bg-white'>
  //         <p className='text-gold tracking-wide text-center text-lg mx-[calc(10%)]'>
  //           Please enter the first and last name of one member of your party below.
  //           If you're responding for you and a guest, you'll be able to RSVP for your entire party on the next page.
  //         </p>
  //         <div className='flex justify-center mt-4'>
  //           <input
  //             type='text'
  //             value={enteredName}
  //             onChange={(e) => setEnteredName(e.target.value)}
  //             placeholder='Enter your name'
  //             className='border-2 border-gold rounded p-2 w-2/3 text-gray-800'
  //           />
  //         </div>
  //         <div className='flex justify-center mt-4'>
  //           <button
  //             onClick={handleCheckGuest}
  //             className='px-4 py-2 bg-blood-red text-white rounded-lg shadow-md 
  //             hover:bg-dark-red focus:outline-none focus:ring-2 focus:ring-gold 
  //             focus:ring-opacity-75 max-w-fit'
  //           >
  //             Find Your Invitation
  //           </button>
  //         </div>
  //       </div>
  //       {group !== undefined && (
  //         <div className='mt-6 p-4 border-2 border-gold rounded bg-white'>
  //           {group ? (
  //             <div>
  //               <p className='text-gray-800'>The following members are on the guest list:</p>
  //               <ul className='list-disc ml-6 mt-2'>
  //                 {group.map((name) => (
  //                   <li key={name} className='text-gold'>{name}</li>
  //                 ))}
  //               </ul>
  //               <div className='mt-4'>
  //                 <input
  //                   type='radio'
  //                   id='accept'
  //                   name='response'
  //                   className='w-4 h-4 accent-dark-red bg-gold border-gold rounded mr-1'
  //                 />
  //                 <label htmlFor='accept' className='text-gold'>Accepts with pleasure</label>
  //                 <input
  //                   type='radio'
  //                   id='decline'
  //                   name='response'
  //                   className='w-4 h-4 accent-dark-red bg-gold border-gold rounded ml-2 mr-1'
  //                 />
  //                 <label htmlFor='decline' className='text-gold'>Declines with regret</label>
  //               </div>
  //             </div>
  //           ) : (
  //             <p className='text-red-600'>Sorry, the name you entered is not on the guest list.</p>
  //           )}
  //         </div>
  //       )}
  //     </div>
  //   </div>
  // );
  const [inputName, setInputName] = useState('');
  const [group, setGroup] = useState(undefined);
  const [showDiv, setShowDiv] = useState(false);
  const handleClick = () => {
    const matchedGroup = guestGroups[inputName.toLowerCase().trim()] || null;
    setGroup(matchedGroup || null);
    setShowDiv(true);
  };

  return (
    <div className='flex justify-center bg-zinc-900 h-screen w-full'>
      <div className='mt-48 max-w-xl'>
        <div className='flex flex-col justify-items-center border-solid border-2 border-gold rounded-t-sm p-3 bg-white'>
          <p className='text-gold tracking-wide text-center text-lg mx-[calc(10%)]'>
            Please enter the first and last name of one member of your party below.
            If you're responding for you and a guest, you'll be able to RSVP for your entire party on the next page.
          </p>
          <div class='flex flex-col justify-center items-center pt-4'>
            <input
              type='text'
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              rows='1'
              placeholder='First and Last Name'
              class='w-4/6 p-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none'/>
          </div>
          <p className='font-light text-sm text-center pt-1'>Ex. Stephen Strange (not Dr. Strange or Sorceror Supreme Strange)</p>
          <div className='flex justify-center'>
            <button 
              class='px-4 py-2 bg-blood-red text-white rounded-lg shadow-md 
              hover:bg-dark-red focus:outline-none focus:ring-2 focus:ring-gold 
              focus:ring-opacity-75 mt-4 max-w-fit'
              onClick={handleClick}>Find Your Invitation
            </button>
          </div>
        </div>

        {group !== undefined && showDiv && (
          <div className='flex flex-col justify-items-center border-solid border-x-2 border-b-2 border-gold rounded-b-sm p-3 bg-white'>
            {group ? (
              <div>
                <p className='text-gold text-center'>Great! There you are. Will you be attending?</p>
                <div className='flex flex-col justify-items-center mx-[calc(10%)]'>
                  <div className='flex flex-row justify-between mt-4'>
                    <div>
                      {group.map((name) => (
                        <p key={name} className='tracking-wide text-lg'>{name}</p>
                      ))}
                    </div>
                    <div>
                      <input 
                        type='radio' 
                        id='accept'
                        name='response'
                        className='w-4 h-4 accent-dark-red bg-gold border-gold rounded mr-1'></input>
                      <label htmlFor='accept' className='text-gold'>Accepts with pleasure</label>
                      <input 
                        type='radio' 
                        id='decline'
                        name='response'
                        className='w-4 h-4 accent-dark-red bg-gold border-gold rounded ml-2 mr-1'>
                      </input>
                      <label htmlFor='decline' className='text-gold'>Declines with regret</label>
                    </div>
                  </div>
                </div>
                <div className='flex justify-center items-center'>
                  <input 
                    type='checkbox' 
                    id='checkbox' 
                    className='w-4 h-4 accent-dark-red bg-gold border-gold rounded ml-2 mr-1'>
                  </input>
                  <label for='checkbox' className='text-gold'>Valet request</label>
                </div>
              </div>
            ) : (
              <p className='text-gold text-center'>Hmm... Guest not found. Did you enter it correctly?</p>
            )}

            <div className='flex justify-center'>
              <button 
                className='px-4 py-2 bg-blood-red text-white rounded-lg shadow-md 
                hover:bg-dark-red focus:outline-none focus:ring-2 focus:ring-gold 
                focus:ring-opacity-75 mt-4 max-w-fit'>Continue</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default RSVP