import { useState } from 'react';

const RSVP = () => {
  const guestGroups = {
    'eliot pardo': ['Eliot Pardo', 'Joanne Pardo'],
    'joanne jardo': ['Joanne Pardo', 'Eliot Pardo'],
    'cheddar': ['Cheddar', 'Colby'],
    'colby': ['Colby', 'Cheddar'],
    'kurumi': ['Kurumi Uchino Schultz']
  };
  
  const [inputName, setInputName] = useState('');
  const [group, setGroup] = useState([]);
  const [addGuest, setAddGuest] = useState({});
  const [showDiv, setShowDiv] = useState(false);

  const handleClick = () => {
    const matchedGroup = guestGroups[inputName.toLowerCase().trim()] || [];
    setGroup(matchedGroup);
    setShowDiv(true);
    setAddGuest({});
  };

  const handleAddGuest = (name) => {
    setAddGuest((prev) => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  return (
    <div className='flex justify-center bg-zinc-900 h-screen w-full'>
      <div className='mt-[calc(50%)] lg:mt-[calc(12%)] max-w-xl'>
        <div className='flex flex-col justify-items-center border-solid border-2 border-gold rounded-t-sm p-3 bg-white mx-10 lg:w-5/6'>
          <p className='text-gold tracking-wide text-center text-lg mx-[calc(10%)]'>
            Please enter the first and last name of one member of your party below.
            If you're responding for you and a guest, you'll be able to RSVP for your entire party below.
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
          <p className='font-light text-xs lg:text-sm text-center pt-1'>Ex. Stephen Strange (not Dr. Strange or Sorceror Supreme Strange)</p>
          <div className='flex justify-center my-2'>
            <button 
              class='px-4 py-2 bg-blood-red text-white rounded-lg shadow-md 
              hover:bg-dark-red focus:outline-none focus:ring-2 focus:ring-gold 
              focus:ring-opacity-75 mt-4 max-w-fit'
              onClick={handleClick}>Find Your Invitation
            </button>
          </div>
        </div>

        {group !== undefined && showDiv && (
          <div className='flex flex-col justify-items-center border-solid border-x-2 border-b-2 border-gold rounded-b-sm p-3 bg-white mx-10 lg:w-5/6'>
            {/* invited group is found */}
            {group.length > 1 ? (
              <div>
                <p className='text-gold text-center mb-2'>Great! There you are. Will you be attending?</p>
                <div className='flex flex-col text-xs lg:text-base justify-items-center mx-[calc(5%)]'>
                  {group.map((name, index) => (
                    <div className='flex flex-row justify-between'>
                      <p key={index} className='tracking-wide lg:text-lg'>{name}</p>
                      <div>
                        <input 
                          type='radio' 
                          id={`accept-${name}`}
                          name={`response-${name}`}
                          className='w-4 h-4 accent-dark-red bg-gold border-gold rounded mr-1'></input>
                        <label htmlFor={`accept-${name}`} className='text-gold'>Accepts with pleasure</label>
                        <input 
                          type='radio' 
                          id={`decline-${name}`}
                          name={`response-${name}`}
                          className='w-4 h-4 accent-dark-red bg-gold border-gold rounded ml-2 mr-1'>
                        </input>
                        <label htmlFor={`decline-${name}`} className='text-gold'>Declines with regret</label>
                      </div>
                    </div>
                  ))}
                  <div className='flex justify-center items-center mt-2'>
                    <input 
                      type='checkbox' 
                      id='checkbox' 
                      className='w-4 h-4 accent-dark-red bg-gold border-gold rounded ml-2 mr-1'>
                    </input>
                    <label for='checkbox' className='text-gold'>Valet spot request</label>
                  </div>
                </div>                
              </div>
            ) : group.length === 1 ? (
              <div>
                <p className='text-gold text-center mb-2'>Great! There you are. Will you be attending?</p>
                <div className='flex flex-col justify-items-center mx-[calc(5%)]'>
                  <div className='flex flex-row justify-between'>
                    <p key={group[0]} className='tracking-wide text-lg'>{group[0]}</p>
                    <div>
                      <input 
                        type='radio' 
                        id={`accept-${group[0]}`}
                        name={`response-${group[0]}`}
                        className='w-4 h-4 accent-dark-red bg-gold border-gold rounded mr-1'></input>
                      <label htmlFor={`accept-${group[0]}`} className='text-gold'>Accepts with pleasure</label>
                      <input 
                        type='radio' 
                        id={`decline-${group[0]}`}
                        name={`response-${group[0]}`}
                        className='w-4 h-4 accent-dark-red bg-gold border-gold rounded ml-2 mr-1'>
                      </input>
                      <label htmlFor={`decline-${group[0]}`} className='text-gold'>Declines with regret</label>
                    </div>
                  </div>
                  <div>
                    <input
                      type='checkbox'
                      id={`guest-${group[0]}`}
                      name={`additional-guest`}
                      checked={!!addGuest[group[0]]}
                      onChange={() => handleAddGuest(group[0])}
                      className='w-4 h-4 accent-dark-red bg-gold border-gold rounded mr-1 mt-2'/>
                    <label htmlFor={`guest-${group[0]}`} className="text-gold">+1</label>
                    {addGuest[group[0]] && (
                      <input
                        type='text'
                        placeholder='Enter guest name'
                        class='w-1/3 ml-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none'/>
                    )}
                    <div className='flex justify-center items-center mt-2'>
                    <input 
                      type='checkbox' 
                      id='checkbox' 
                      className='w-4 h-4 accent-dark-red bg-gold border-gold rounded ml-2 mr-1'>
                    </input>
                    <label for='checkbox' className='text-gold'>Valet spot request</label>
                  </div>
                  </div>
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