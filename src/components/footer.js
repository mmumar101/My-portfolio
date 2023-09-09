import React from 'react'
import logo1 from '../images/linkedin.png';
import logo2 from '../images/twitter.png';
import logo3 from '../images/simple-icons.png';
import logo4 from '../images/github.png';
import ring3 from '../images/ring1.png';
// import {FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'


const footer = () => {
  return (
    <div className='bg-[hsl(0,0%,8%)] w-full'>
       <div className='sm:w-[70%] md:w-[75%] lg:w-[70%] mx-auto'> 
        <div className='mx-2 md:flex lg:flex xl:flex justify-between'>
            <div className='mb-7 text-center md:text-start lg:text-start'>
                 <p className='font-bold text-[36px] pt-5'>Contact</p>
                 <p className='font-thin text-xs'>I would love to hear about your project and how i <br/> could help. please fill in the form, and i'll get back to you as soon as possible. </p>
            </div>

                
                <div className='md:w-[40%] lg:w-[40%] pt-5'>
                    <div className='mb-8'>
                        <p className='mb-5 ml-5'>NAME</p>
                        <hr/>
                    </div>
                 
                    <div className='mb-8'>
                        <p className='mb-5 ml-5'>EMAIL</p>
                        <hr/>  
                    </div>

                    <div className='mb-8'>
                        <p className='mb-5 ml-5'>MESSEGE</p>
                        <hr/>
                    </div>
                </div>
                <img src={ring3} alt="" className='absolute left-0 pt-25 md:pt-28 lg:pt-20 '/>
            </div>


        <div>
            <p className='text-right underline decoration-[#4ee180] mb-10 mr-2 '>SEND MESSEGE</p>
    
            <hr/>
        </div>
        
        <div className=' sm:flex sm:justify-between sm:align-middle md:flex lg:flex md:justify-between lg:justify-between justify-center mx-auto text-center'>
            <div className='pt-3'>
                <p> mohammedumar </p>
            </div>
    
            
            <div className='flex justify-center pb-6 pt-3 gap-5'>
                <a href='https://www.github.com/mmumar101'>
                    <img src={logo4} alt='github'  className='h-4 w-4 fill-white'/>
                </a>
                
                <a href='https://www.linkedin.com/in/mmumar101/'>
                    <img src={logo3} alt='icon' className='h-4 w-4 fill-white'/>
                </a>

                <a href='https://www.linkedin.com/in/mmumar101/'>
                    <img src={logo1} alt='linkedin' className='h-4 w-4 fill-white'/>
                </a>

                <a href='https://www.twitter.com/mmumarr'>
                    <img src={logo2} alt='twitter' className='h-4 w-4 fill-white'/>
                </a>
            </div> 
        </div>
    </div>

    </div>
  )
}

export default footer