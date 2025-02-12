import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Confirm = () => {
  const [songRequest, setSongRequest] = useState('');
  const location = useLocation();
  const { guestData, groupGuests } = location.state || {};

  const handleSongRequestChange = (guest_id, song) => {
    setSongRequest((prevState) => ({
      ...prevState,
      [guest_id]: song,
    }));
  };

  const submitSong = async () => {
    try {
      await Promise.all(
        groupGuests.map((guest) =>
          axios.put(`http://localhost:8080/api/v1/guests/${guest.guest_id}`, {
            song_request: songRequest[guest.guest_id],
          })
        )
      );
    } catch (error) {
      console.error('Error updating song:', error);
      alert('Failed to update song.');
    }
  };
  

  return (
    <div className='flex justify-center bg-zinc-900 h-screen w-full'>
      {guestData ? (
        <div className='my-auto max-w-lg'>
          {guestData.rsvp_status ? (
            <div className='grid justify-items-center border-solid border-2 border-gold rounded p-4 mx-6 bg-pale-gold'>
              <p className='text-gold tracking-wide text-center text-xl'>We are excited to {guestData?.full_name} celebrate with us!</p>
              <p className='text-center'>If you would like to request a song for the DJ, please enter your submission below</p>
              <div className='flex flex-col justify-center w-2/3 items-center pt-4'>
                <input
                  type='text'
                  value={songRequest[guestData.guest_id] || ''}
                  onChange={(e) => handleSongRequestChange(guestData.guest_id, e.target.value)}
                  placeholder=''
                  className='w-full p-1 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none'/>
              </div>
              <div className='flex justify-center my-2'>
                <button
                  onClick={submitSong}
                  class='px-4 py-2 bg-blood-red text-white rounded-lg shadow-md 
                  hover:bg-dark-red focus:outline-none focus:ring-2 focus:ring-gold 
                  focus:ring-opacity-75 mt-4 max-w-fit'>Let's Dance!
                </button>
              </div>
            </div>
          ) : (
            <div className='my-auto max-w-lg'>
              <div className='grid justify-items-center border-solid border-2 border-gold rounded p-4 mx-6 bg-pale-gold'>
                <p className='text-gold tracking-wide text-center text-lg'>
                  Thank you for letting us know. We'll miss you at the wedding, 
                  but look forward to reconnecting soon!</p>
              </div>
            </div>
          )}
        </div>
      ) : (
        <p>no data</p>
      )}      
    </div>
  )
}

export default Confirm