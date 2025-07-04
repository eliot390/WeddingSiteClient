import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import axios from 'axios';

const Confirm = () => {
  const [songRequest, setSongRequest] = useState('');
  const [songSubmitted, setSongSubmitted] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { guestData, groupGuests } = location.state || {};

  const handleSongRequestChange = (guest_id, song) => {
    setSongRequest((prevState) => ({
      ...prevState,
      [guest_id]: song,
    }));
  };

  const handleCelebration = () => {
    confetti({
      particleCount:100,
      spread:100,
      origin: {y:0.6}
    })
  }

  const submitSong = async () => {
    try {
      await Promise.allSettled(
        groupGuests.map((guest) =>
          axios.put(`https://weddingsiteserver-production.up.railway.app/api/v1/guests/${guest.guest_id}`, {
            song_request: songRequest[guest.guest_id],
          })
        )
      );
      setSongSubmitted(true);
      setTimeout(() => {
        navigate('/');
      }, 5000);
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
            <div className='grid justify-items-center border-solid border-2 border-gold rounded px-5 py-5 mx-6 bg-pale-gold'>
              <p className='text-gold text-center text-2xl'>Thank you for your RSVP! <br/>We are so excited to have you celebrate with us!</p>
              <p className='text-center text-lg mt-2'>
                {songSubmitted ? 'Great choice! See you soon!' : 'BTW, is there a song that will get you on the dance floor?'}
              </p>
              <div className='flex flex-col justify-center w-2/3 items-center pt-4'>
                <input
                  type='text'
                  value={songRequest[guestData.guest_id] || ''}
                  onChange={(e) => handleSongRequestChange(guestData.guest_id, e.target.value)}
                  placeholder=''
                  className='w-full p-1 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent resize-none'/>
              </div>
              <div className='flex justify-center'>
                <button
                  onClick={() => {submitSong(); handleCelebration();}}
                  className='px-4 py-2 bg-blood-red text-white rounded-lg shadow-md 
                  hover:bg-dark-red focus:outline-none focus:ring-2 focus:ring-gold 
                  focus:ring-opacity-75 mt-4 max-w-fit
                  transform active:scale-75 transition-transform'>Let's Dance! ☝🏻
                </button>
              </div>
              <div className='flex justify-center mt-6'>
                <button
                  onClick={() => navigate('/')}
                  className='px-3 py-1 bg-blood-red text-white rounded-lg shadow-md 
                  hover:bg-dark-red focus:outline-none focus:ring-2 focus:ring-gold 
                  focus:ring-opacity-75 mt-4 max-w-fit
                  transform active:scale-75 transition-transform'>Finish & Leave
                </button>
              </div>
            </div>
          ) : (
            <div className='my-auto max-w-lg'>
              <div className='grid justify-items-center border-solid border-2 border-gold rounded p-4 mx-6 bg-pale-gold'>
                <p className='text-gold tracking-wide text-center text-2xl'>
                  Thank you for letting us know. <br/> We'll miss you at the wedding, 
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