import React from 'react'

function About() {
    return (
      <div className=' font-mono'>
      <div className='md:w-6/12 w-5/6 m-auto mt-10 block'>
      <div className='bg-gray-500 flex flex-row rounded-t-lg'>
        <div className='w-4 h-4 rounded-full bg-red-500 mx-1 my-2 ml-4 '></div>
        <div className='w-4 h-4 rounded-full bg-yellow-500 mx-1 my-2 '></div>
        <div className='w-4 h-4 rounded-full bg-green-400 mx-1 my-2 '></div>
        
      </div>
      <div className='bg-neutral-800 rounded-b-lg md:text-2xl text-xl p-10 w-full h-full text-white'><p className=' text-green-400'>$Hello Everyone</p>

<br/>I'm Raunak Jain. I'm a fullstack developer having good knowledge in Frontend Development. I am currently pursuing my B-Tech in Computer Science from KIET Group of Institutions, Ghaziabad.<br/><br/> I love to explore the nature and always try to do something for the betterment of society. I am a guy who always comes with a solution rather than a problem. I always believe in team work as people says more minds equals to more refined solutions. </div>
      </div>


{/* second block starts here */}
      <div className='md:w-6/12 w-5/6 m-auto mt-16 block'>
      <div className='bg-gray-500 flex flex-row rounded-t-lg'>
        <div className='w-4 h-4 rounded-full bg-red-500 mx-1 my-2 ml-4 '></div>
        <div className='w-4 h-4 rounded-full bg-yellow-500 mx-1 my-2 '></div>
        <div className='w-4 h-4 rounded-full bg-green-400 mx-1 my-2 '></div>
        
      </div>
      <div className='bg-neutral-800 rounded-b-lg md:text-2xl text-xl p-10 w-full h-full text-white'>
      <p className=' text-green-400 text-3xl'>Skills</p>
      <br/>
<div className=' flex flex-row justify-between mr-14'>
      <ul className=' list-none leading-10'>
    
        <li>Javascript</li>
        <li>CSS</li>
        <li>React Js</li>
        <li>Tailwind CSS</li>
        <li>Node Js </li>
        
      </ul>


      <ul className=' list-none leading-10'>
    
        <li>Express Js</li>
        <li>MongoDB</li>
        <li>C++</li>
        <li>C</li>
        <li>Python</li>
        
      </ul>
      </div>
      </div>
      </div>


{/* second block starts here */}
<div className='md:w-6/12 w-5/6 m-auto mt-16 block'>
      <div className='bg-gray-500 flex flex-row rounded-t-lg'>
        <div className='w-4 h-4 rounded-full bg-red-500 mx-1 my-2 ml-4 '></div>
        <div className='w-4 h-4 rounded-full bg-yellow-500 mx-1 my-2 '></div>
        <div className='w-4 h-4 rounded-full bg-green-400 mx-1 my-2 '></div>
        
      </div>
      <div className='bg-neutral-800 rounded-b-lg md:text-2xl text-xl p-10 w-full h-full text-white'>
      <p className=' text-green-400 text-3xl'>Hobbies</p>
      <br/>

      <ul className=' list-none leading-10'>
    
        <li>🎥 Movies</li>
        <li>🏏 Cricket</li>
        <li>🎮 Gaming</li>
        <li>🏊 Swimming</li>
        <li>🚊 Travelling</li>
        
      </ul>
      </div>
      </div>



      <div className='md:w-6/12 w-5/6 m-auto mt-16 block'>
      <div className='bg-gray-500 flex flex-row rounded-t-lg'>
        <div className='w-4 h-4 rounded-full bg-red-500 mx-1 my-2 ml-4 '></div>
        <div className='w-4 h-4 rounded-full bg-yellow-500 mx-1 my-2 '></div>
        <div className='w-4 h-4 rounded-full bg-green-400 mx-1 my-2 '></div>
        
      </div>
      <div className='bg-neutral-800 rounded-b-lg md:text-2xl text-xl p-10 w-full h-full text-white'>
      <p className=' text-green-400 text-3xl'>Extra-Curricular</p>
      <br/>

      <ul className=' list-disc leading-10 ml-5'>
    
        <li>Coordinator at Mycin Innovation Club</li>
        <li>Coordinator at Newton School Coding Club KIET</li>
        <li>Member at Google Developer Student Clubs KIET</li>
       
        
      </ul>
      </div>
      </div>


      </div>
    );
  }
  
  export default About;