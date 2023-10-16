import React, { useState } from 'react'
import logo1 from '../images/linkedin.png';
import logo2 from '../images/twitter.png';
import logo3 from '../images/simple-icons.png';
import logo4 from '../images/github.png';
import ring3 from '../images/ring1.png';
// import {FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'


const footer = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [messege, setMessege] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();

        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Mmessege:', messege);

        setName('');
        setEmail('');
        setMessege('');

        alert('Messege sent successfully!')
    }

    

  return (
    <div className='bg-[hsl(0,0%,8%)] w-full'>
       <div className='sm:w-[70%] md:w-[75%] lg:w-[70%] mx-auto'> 
        <div className='mx-2 sm:flex md:flex lg:flex xl:flex justify-between'>
            <div className='mb-7 text-center md:text-start lg:text-start'>
                 <p className='font-bold text-[36px] pt-5'>Contact</p>
                 <p className='font-thin text-xs'>I would love to hear about your project and how i <br/> could help. please fill in the form, and i'll get back to you as soon as possible. </p>
            </div>

                
                <form onSubmit={handleSubmit} className='md:w-[40%] lg:w-[40%] pt-5'>
                
                        <lebel className=' ml-5'>NAME</lebel>
                        <input type="text"
                        id='name'
                        value={name}
                        name='name'
                        onChange={(e)=>setName(e.target.value)}
                        required
                         placeholder='Enter Name' className="bg-[hsl(0,0%,8%)] w-[100%] h-10 focus:outline-none border-b-3" />
                        <hr className='mb-8'/>
                 
                
                        <lebel className=' ml-5'>EMAIL</lebel>
                        <input type="email" 
                        id='email'
                        value={email}
                        name='email'
                        onChange={(e)=>setEmail(e.target.value)}
                        required
                        placeholder='Enter Email' className="bg-[hsl(0,0%,8%)] w-[100%] h-10 focus:outline-none border-b-3" />
                        <hr className='mb-8'/>  
            

                        <lebel className=' ml-5'>MESSEGE</lebel>
                        <textarea
                        id='messege'
                        name='messege'
                        rows={3}
                        value={messege} 
                        onChange={(e)=>setMessege(e.target.value)}
                        placeholder='Enter Messege' className="bg-[hsl(0,0%,8%)] w-[100%] focus:outline-none border-b-3" />
                        <hr/>
                
                </form>


                <img src={ring3} alt="" className='absolute left-0 pt-25 md:pt-28 lg:pt-20 '/>
            </div>


        <div>
            <p className='text-right  mb-10 mr-2 '>
                <button type='submit' className='underline decoration-[#4ee180]'>SEND MESSEGE</button>
            </p>
    
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