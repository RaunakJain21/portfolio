import React from 'react'

function About() {
    return (
      <div>
      <div className='md:w-6/12 w-5/6 m-auto mt-10 block'>
      <div className='bg-gray-500 flex flex-row rounded-t-lg'>
        <div className='w-4 h-4 rounded-full bg-red-500 mx-1 my-2 ml-4 '></div>
        <div className='w-4 h-4 rounded-full bg-yellow-500 mx-1 my-2 '></div>
        <div className='w-4 h-4 rounded-full bg-green-400 mx-1 my-2 '></div>
        
      </div>
      <div className='bg-neutral-800 rounded-b-lg md:text-2xl text-xl p-10 w-full h-full text-white'>johnsmith $ cat aboutjohn

aboutjohn (main) <br/><br/>$ Hello! I'm John. I'm a systems engineer for Google. I studied CompSci at Harvard, I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!</div>
      </div>


{/* second block starts here */}
      <div className='md:w-6/12 w-5/6 m-auto mt-16 block'>
      <div className='bg-gray-500 flex flex-row rounded-t-lg'>
        <div className='w-4 h-4 rounded-full bg-red-500 mx-1 my-2 ml-4 '></div>
        <div className='w-4 h-4 rounded-full bg-yellow-500 mx-1 my-2 '></div>
        <div className='w-4 h-4 rounded-full bg-green-400 mx-1 my-2 '></div>
        
      </div>
      <div className='bg-neutral-800 rounded-b-lg md:text-2xl text-xl p-10 w-full h-full text-white'>johnsmith $ cat aboutjohn

aboutjohn (main) <br/><br/>$ Hello! I'm John. I'm a systems engineer for Google. I studied CompSci at Harvard, I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!</div>
      </div>

      </div>
    );
  }
  
  export default About;