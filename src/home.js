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
       <button className=' mt-5 m-auto w-30 h-10 p-3  md:mr-12 rounded-full text-black bg-white' >Dowload Resume</button>
        </div> 
    <div className=' font-light ml-1 mr-1 md:ml-0'>
       <div className='text-3xl md:text-5xl flex flex-row md:mt-16 mt-14 p-2 font-semibold ml-1 md:ml-0'>
       Hi, I'm <p className='high ml-3'> Raunak</p><p className='animate'> ✋</p>
        </div>
        <div className='text-2xl md:text-4xl font-medium flex flex-row p-2 ml-1 md:ml-0'>
        I'm a Full Stack Developer.
        </div>
        <div className='md:text-xl text-lg ml-6 mt-4 ' >
<p className='p-1'>☕ &nbsp; fueled by coffee</p>
<p className='p-1'>🌎 &nbsp; based in the India</p>
<p className='p-1'>📧 &nbsp; raunakjain8979@gmail.com</p>


</div>

<div className='md:ml-14 ml-8 mb-24 md:mb-0 mt-5 text-3xl md:text-5xl flex flex-row'>
<a href=''><i class="fa-solid fa-circle-user"></i></a>
<a href=''><i class="fa-brands fa-instagram ml-7"></i></a>
<a href=''><i class="fa-brands fa-github ml-7"></i></a>
<a href=''><i class="fa-brands fa-linkedin ml-7"></i></a>
<a href=''><i class="fa-brands fa-twitter ml-7"></i></a>
{/* <img className='w-15 ml-7 font-bold' src={cc} /> */}
</div>

    </div>   
    </div>




     

    </>
  )
}

export default Home;