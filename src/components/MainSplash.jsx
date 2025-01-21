import logo from '../assets/images/watercolor_layer.png';

const MainSplash = () => {
  return (
    <div className='flex flex-col justify-center items-center'>      
        <img src={logo} className='w-2/3'></img>
        <div className='uppercase tracking-widest text-6xl text-center text-blood-red'>
          <p>joanne</p>
          <p>+</p>
          <p>eliot</p>
        </div>
    </div>
    
  )
}

export default MainSplash