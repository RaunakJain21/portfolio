import React from 'react'
import './home.css'
import pic from './images/profilepic.png';
import cc from './images/cc.png'

function Home() {
  return (
    <>
    <div className='font1 flex flex-col md:flex-row'>
       <div className='md:w-5/12 md:mr-8 md:mt-24 mt-16 flex flex-col'>
       <img className='md:float-right  w-60 h-60 p-3 m-auto md:mr-2 p- rounded-full  bg-gradient-to-r from-blue-500 to-teal-400 ' src={pic} />
       <button className='mt-5 m-auto w-30 font-bold pt-2 pb-2 pl-4 pr-4  md:mr-12 rounded-full text-black bg-white hover:bg-green-300' ><a href='https://drive.google.com/file/d/10B1qY_dKX-kjKueotJScXPL2iBOjtU_q/view?usp=sharing'>Dowload Resume</a></button>
        </div> 
    <div className=' font-light ml-1 mr-1 md:ml-0'>
       <div className='text-3xl md:text-5xl flex flex-row md:mt-16 mt-14 p-2 font-semibold ml-1 md:ml-0'>
       Hi, I'm <p className='high ml-3'> Raunak</p><span class="wave">👋</span>
        </div>
        <div className='text-2xl md:text-4xl font-medium flex flex-row p-2 ml-1 md:ml-0 '>
        I'm a Full Stack Developer.
        </div>
        <div className='md:text-xl text-lg ml-6 mt-4 ' >
<p className='p-1'>☕ &nbsp; fueled by coffee</p>
<p className='p-1'>🌎 &nbsp; based in the India</p>
<p className='p-1'>📧 &nbsp; raunakjain8979@gmail.com</p>


</div>

<div className='md:ml-14 ml-8 mb-24 md:mb-0 mt-5 text-3xl md:text-5xl flex flex-row'>
<a href='https://www.codechef.com/users/raunak_jain21'><i class="fa-solid fa-circle-user"></i></a>
<a href='https://instagram.com/raunak._jain?igshid=MzNlNGNkZWQ4Mg=='><i class="fa-brands fa-instagram ml-7"></i></a>
<a href='https://github.com/RaunakJain21'><i class="fa-brands fa-github ml-7"></i></a>
<a href='https://www.linkedin.com/in/raunak-jain-41412a238/'><i class="fa-brands fa-linkedin ml-7"></i></a>
<a href='https://twitter.com/raunak_jain2?t=_yeNe6ch2M4G4HrHIY0WzQ&s=08'><i class="fa-brands fa-twitter ml-7"></i></a>
{/* <img className='w-15 ml-7 font-bold' src={cc} /> */}
</div>

    </div>   
    </div>




     

    </>
  )
}

export default Home;