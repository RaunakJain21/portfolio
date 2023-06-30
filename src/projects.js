import project1 from './images/project1.png'
import React from 'react'

function Projects() {
  return (
    <>
    <div className='flex md:flex-row flex-col'>
      <div className=' md:w-3/6 w-6/6 flex justify-center flex-col mt-12'> 
    <img className='' src={project1} />
    <div className='md:text-4xl text-2xl font-semibold m-auto'>Project 1</div> 
    <div className='md:t-2xl text-lg m-auto rounded-full bg-white text-black border-4 md:px-5 px-2 md:py-2 py-1 border-black mt-4'><a href=''><i className='fa fa-safari'></i>  Live Demo</a></div>
   <div className='md:t-2xl text-lg  m-auto rounded-full bg-white text-black border-4 md:px-5 px-2 md:py-2 py-1 border-black mt-1'> <a href=''><i class="fa-solid fa-code"></i>  Source Code</a></div>
    </div>


    <div className=' md:w-3/6 w-6/6 flex justify-center flex-col mt-12'> 
    <img className='' src={project1} />
    <div className='md:text-4xl text-2xl font-semibold m-auto'>Project 2</div> 
    <div className='md:t-2xl text-lg m-auto rounded-full bg-white text-black border-4 md:px-5 px-2 md:py-2 py-1 border-black mt-4'><a href=''><i className='fa fa-safari'></i>  Live Demo</a></div>
   <div className='md:t-2xl text-lg  m-auto rounded-full bg-white text-black border-4 md:px-5 px-2 md:py-2 py-1 border-black mt-1'> <a href=''><i class="fa-solid fa-code"></i>  Source Code</a></div>
    </div>
    </div>

     <div className='flex md:flex-row flex-col'>
      <div className=' md:w-3/6 w-6/6 flex justify-center flex-col mt-12'> 
    <img className='' src={project1} />
    <div className='md:text-4xl text-2xl font-semibold m-auto'>Project 3</div> 
    <div className='md:t-2xl text-lg m-auto rounded-full bg-white text-black border-4 md:px-5 px-2 md:py-2 py-1 border-black mt-4'><a href=''><i className='fa fa-safari'></i>  Live Demo</a></div>
   <div className='md:t-2xl text-lg  m-auto rounded-full bg-white text-black border-4 md:px-5 px-2 md:py-2 py-1 border-black mt-1'> <a href=''><i class="fa-solid fa-code"></i>  Source Code</a></div>
    </div>


    <div className=' md:w-3/6 w-6/6 flex justify-center flex-col mt-12'> 
    <img className='' src={project1} />
    <div className='md:text-4xl text-2xl font-semibold m-auto'>Project 4</div> 
    <div className='md:t-2xl text-lg m-auto rounded-full bg-white text-black border-4 md:px-5 px-2 md:py-2 py-1 border-black mt-4'><a href=''><i className='fa fa-safari'></i>  Live Demo</a></div>
   <div className='md:t-2xl text-lg  m-auto rounded-full bg-white text-black border-4 md:px-5 px-2 md:py-2 py-1 border-black mt-1'> <a href=''><i class="fa-solid fa-code"></i>  Source Code</a></div>
    </div>
    </div>
    </>
  )
}

export default Projects