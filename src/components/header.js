import React from 'react'
import photo from '../images/result.png'
// import {FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import logo1 from '../images/github.png';
import logo2 from '../images/simple-icons.png';
import logo3 from '../images/linkedin.png';
import logo4 from '../images/twitter.png';
// import ring from '../images/simple-icons-ring.svg'
//import group1 from '../images/group-26-copy.png'




const header = () => {
  return (
    <div className='mx-auto md:w-[75%] lg:w-[70%] w-[95%]'>
        <div className='md:flex lg:flex xl:flex justify-between mx-auto'>
              <div className='pt-4 text-center '>
                  <p className='font-bold'> mohammedumar </p>
              </div>
                      
              <div className='bg-[#151515] lg:w-50 justify-center items-center'>
                  <div className='flex lg:justify-end md:justify-end justify-between md:gap-8 lg:gap-8 pt-4 mx-14 w-30 '>
                    <a href='https://github.com/mmumar101'>
                    <img src={logo1}  alt='github' className=' h-4 w-4 fill-white'/>
                    </a>

                    <a href='https://linkedin.com/mmumar101/'>
                    <img src={logo2} alt='secondIcon' className='h-4 w-4 fill-white'/>
                    </a>

                    <a href='https://linkedin.com/mmumar101/'>
                    <img src={logo3} alt='linkedin' className=' h-4 w-4 fill-white'/>
                    </a>

                    <a href='https://twitter.com/mmumarr'>
                    <img src={logo4} alt='twitter' className=' h-4 w-4 fill-white'/>
                    </a>
                  </div> 
                  
                  <div className=''>  
                  {/* <img src={group1} alt='' className='h-20 w-20' />       */}
                    <img src={photo} alt='' className=' resize-both lg:w-80 h-80 pt-14 mx-auto'/>
                    {/* <img src={ring} alt='' className='relative pl-5 '/> */}
                  </div>
              </div>              
        </div>

                {/* INTRODUCTION */}
             <div className='flex flex-col-reverse md:flex-row lg:flex-row mx-auto text-center md:text-left lg:text-left xl:text-left xl:absolute lg:absolute md:absolute top-14 '>   
                  <div className=''>
                      <p className=' font-bold text-3xl md:text-5xl lg:text-5xl mt-8 mb-8 md:tracking-[7px] lg:tracking-[7px]'>Nice to meet you! <br/>I'm <u className='underline decoration-[#4ee180]'>Mohammed Umar.</u></p>
                      <p className='text-sm'>Based in Nigeria, i'm a front-end developer <br/> passionate about building accessible web apps <br/> that users love.</p>
                      <button className='mt-6 text-[#4ee180] border-b-2 border-[#4ee180] focus:font-bold'>CONTACT ME</button>
                 </div>      
             </div>
             <hr className='mt-8 mb-7 '/>            
               
    </div>
  )
}

export default header