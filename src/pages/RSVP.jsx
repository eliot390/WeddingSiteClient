import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RSVP = () => {
  const [fullName, setFullName] = useState('');
  const [guestData, setGuestData] = useState([]);
  const [groupGuests, setGroupGuests] = useState([]);
  const [error, setError] = useState('');
  const [rsvpStatus, setRsvpStatus] = useState({});
  const [valetRequest, setValetRequest] = useState({});
  const [valetCount, setValetCount] = useState(0);
  const [plusOne, setPlusOne] = useState({});
  const [plusOneName, setPlusOneName] = useState('');
  const [shortComment, setShortComment] = useState('');
  const navigate = useNavigate();

  const fetchGuestData = async () => {
    if (!fullName.trim()) {
      setError('Please enter a name.');
      return;
    }

    try {
      const response = await axios.get(`https://weddingsiteserver-production.up.railway.app/api/v1/guests/name?full_name=${encodeURIComponent(fullName)}`);

      const guest = response.data;
      setGuestData(guest);
      setError('');

      if (guest.group_pairing) {
        const groupResponse = await axios.get(`https://weddingsiteserver-production.up.railway.app/api/v1/guests/group/${guest.group_pairing}`);
        setGroupGuests(groupResponse.data);
      } else {
        setGroupGuests([]);
      }

      const valetResponse = await axios.get('https://weddingsiteserver-production.up.railway.app/api/v1/guests/valet/count');
      setValetCount(valetResponse.data.count);

    } catch (err) {
      setError('Hmm... Guest not found. Did you enter it correctly?');
      setGuestData(null);
      setGroupGuests([]);
    }
  };

  const handleRSVPChange = (guest_id, status) => {
    setRsvpStatus((prevState) => ({
      ...prevState,
      [guest_id]: status,
    }));
  };

  const handleValetChange = (guest_id, valet) => {
    setValetRequest((prevState) => ({
      ...prevState,
      [guest_id]: valet,
    }));
  };

  const handlePlusOneChange = (guest_id, plusOne) => {
    setPlusOne((prevState) => ({
      ...prevState,
      [guest_id]: plusOne,
    }));

    if(!plusOne) {
      setPlusOneName((prevState) => ({
        ...prevState,
        [guest_id]: ''
      }));
    }
  };

  const handlePlusOneNameChange = (guest_id, poName) => {
    setPlusOneName((prevState) => ({
      ...prevState,
      [guest_id]: poName,
    }));
  };

  const handleCommentChange = (guest_id, comment) => {
    setShortComment((prevState) => ({
      ...prevState,
      [guest_id]: comment,
    }));
  };

  const submitRSVP = async () => {
    try {
      await Promise.all(
        groupGuests.map((guest) =>
          axios.put(`https://weddingsiteserver-production.up.railway.app/api/v1/guests/${guest.guest_id}`, {
            rsvp_status: rsvpStatus[guest.guest_id] || false,
            valet_request: valetRequest[guest.guest_id] || false,
            short_comment: shortComment[guest.guest_id] || '',
            plus_one: plusOne[guest.guest_id] || false,
            guest_name: plusOneName[guest.guest_id] || '',
          })
        )
      );

      const updatedGuests = groupGuests.map((guest) => ({
        ...guest,
        rsvp_status: rsvpStatus[guest.guest_id] || false,
        valet_request: valetRequest[guest.guest_id] || false,
      }));

      const updatedGuestData = {
        ...guestData,
        rsvp_status: rsvpStatus[guestData.guest_id] || false,
        valet_request: valetRequest[guestData.guest_id] || false,
      };

      navigate('/confirm', {state: {guestData:updatedGuestData, groupGuests: updatedGuests}});
    } catch (error) {
      console.error('Error updating RSVP:', error);
      alert('Failed to update RSVP.');
    }
  };

  return (
    <div className='flex justify-center bg-zinc-900 h-screen w-full'>
      <div className='mt-[calc(50%)] lg:mt-[calc(5%)] max-w-xl'>
        <div className='flex flex-col justify-items-center border-solid border-2 border-gold rounded-t-sm p-2 bg-white mx-10 lg:w-5/6'>
          <p className='text-gold tracking-wide text-center text-lg mx-[calc(5%)]'>
            Please enter the first and last name of one member of your party below.
            If you're responding for you and a guest, you'll be able to RSVP for your entire party below.
          </p>
          <div className='flex flex-col justify-center items-center pt-4'>
            <input
              type='text'
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder='First and Last Name'
              className='w-4/6 p-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none'/>
          </div>
          <p className='font-light text-xs lg:text-sm text-center pt-1'>Ex. Stephen Strange (not Dr. Strange or Sorceror Supreme Strange)</p>
          <div className='flex justify-center my-2'>
            <button 
              onClick={fetchGuestData} 
              className='px-4 py-2 bg-blood-red text-white rounded-lg shadow-md 
              hover:bg-dark-red focus:outline-none focus:ring-2 focus:ring-gold 
              focus:ring-opacity-75 mt-4 max-w-fit
              transform active:scale-95 transition-transform'>Find Your Invitation
            </button>
          </div>
          
          {error && <p className='text-gold text-center text-lg my-4'>{error}</p>}

          {groupGuests.length > 0 && (
            <div className='flex flex-col justify-items-center border-solid border-t-2 border-gold p-3 bg-white mx-2 '>
              <p className='text-gold text-center mb-2'>Great, there you are!</p>
              <ul className='flex flex-col text-xs lg:text-base justify-items-center mx-[calc(5%)] mb-5'>
                {groupGuests.sort((a,b) => a.guest_id - b.guest_id).map((guest) => (
                  <li key={guest.guest_id} className='p-1'>
                    <p className='tracking-wide text-center text-lg lg:text-2xl mt-1'>{guest.full_name}</p>

                    {/* RSVP Radio Buttons */}
                    <div className='flex flex-row justify-evenly mt-1'>
                      <label>
                        <input
                          type='radio'
                          name={`rsvp-${guest.guest_id}`}
                          value='true'
                          checked={rsvpStatus[guest.guest_id] === true}
                          className='w-4 h-4 accent-dark-red bg-gold border-gold rounded mr-1'
                          onChange={() => handleRSVPChange(guest.guest_id, true)}/>Accepts with pleasure 🥳
                      </label>
                      <label>
                        <input
                          type='radio'
                          name={`rsvp-${guest.guest_id}`}
                          value='false'
                          checked={rsvpStatus[guest.guest_id] === false}
                          className='w-4 h-4 accent-dark-red bg-gold border-gold rounded mr-1'
                          onChange={() => handleRSVPChange(guest.guest_id, false)}/>Declines with regret 😔
                      </label>
                    </div>

                    {/* Single Guest / Plus One */}
                    {groupGuests.length === 1 && (
                      <div className='flex flex-row justify-evenly mt-1'>
                        <p className='text-right mr-10'>And Guest:</p>
                        <div className='flex flex-row justify-evenly mt-1'>
                          <label className='mr-4'>
                            <input
                              type='radio'
                              name={`plusOne-${guest.guest_id}`}
                              value='true'
                              checked={plusOne[guest.guest_id] === true}
                              className='w-4 h-4 accent-dark-red bg-gold border-gold rounded mr-1'
                              onChange={() => handlePlusOneChange(guest.guest_id, true)}/>Yes
                          </label>
                          <label>
                            <input
                              type='radio'
                              name={`plusOne-${guest.guest_id}`}
                              value='false'
                              checked={plusOne[guest.guest_id] === false}
                              className='w-4 h-4 accent-dark-red bg-gold border-gold rounded mr-1'
                              onChange={() => handlePlusOneChange(guest.guest_id, false)}/>No
                          </label>
                        </div>
                      </div>
                    )}

                    {plusOne[guest.guest_id] && (
                      <div>
                        <div className='flex flex-col justify-center items-center pt-4'>
                        <input
                          type='text'
                          value={plusOneName[guest.guest_id] || ''}
                          onChange={(e) => handlePlusOneNameChange(guest.guest_id, e.target.value)}
                          placeholder='First and Last Name'
                          className='w-4/6 p-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none'/>
                        </div>
                      </div>
                      
                    )}
                  </li>
                ))}
              </ul>

              {/* Valet Radio Buttons */}
              {valetCount <= 26 ? (
                <div className='flex flex-row justify-center border-t pt-5'>
                  <p className='mr-5'>Valet Request:</p>
                  <div>
                    <label className='mr-4'>
                      <input
                        type='radio'
                        name={`valet-${guestData.guest_id}`}
                        value='true'
                        checked={valetRequest[guestData.guest_id] === true}
                        className='w-4 h-4 accent-dark-red bg-gold border-gold rounded mr-1'
                        onChange={() => handleValetChange(guestData.guest_id, true)}/>Yes
                    </label>
                    <label>
                      <input
                        type='radio'
                        name={`valet-${guestData.guest_id}`}
                        value='false'
                        checked={valetRequest[guestData.guest_id] === false}
                        className='w-4 h-4 accent-dark-red bg-gold border-gold rounded mr-1'
                        onChange={() => handleValetChange(guestData.guest_id, false)}/>No
                    </label>
                  </div>
                </div>
              ) : (
                <div className='flex flex-row justify-center border-t pt-5'>
                  <p className='text-center w-5/6'>🚕 Sorry, valet is full! Please consider Lyft, as street parking on La Cienega is limited.</p>
                </div>
              )}

              {/* Comment Input */}
              {guestData && (
                <div className='flex flex-col items-center mt-5'>
                  <label>Leave a short comment:</label>
                  <input
                    type='text'
                    value={shortComment[guestData.guest_id] || ''}
                    onChange={(e) => handleCommentChange(guestData.guest_id, e.target.value)}
                    placeholder=''
                    className='w-4/6 p-1 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none'/>
                </div>
              )}

              {/* Submit Button */}
              <div className='flex justify-center'>
                <button
                  onClick={submitRSVP}
                  className='px-4 py-2 bg-blood-red text-white rounded-lg shadow-md 
                  hover:bg-dark-red focus:outline-none focus:ring-2 focus:ring-gold 
                  focus:ring-opacity-75 mt-4 max-w-fit'>Continue</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RSVP;