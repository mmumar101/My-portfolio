import React from 'react'
import logo1 from '../images/clock.png'
import logo2 from '../images/Fylo.png'
import logo3 from '../images/game.png'
import logo4 from '../images/timer.png'
import logo5 from '../images/todo.png'
import logo6 from '../images/dictionary.png'


const projects = () => {
  return (
    <div className='w-[90%] md:w-[75%] lg:w-[70%] mx-auto'>
        <div className='flex justify-between items-center'>
              <p className='font-bold text-[2.2rem]'>Projects</p>
            
              <a href='mailto:mmumar101@gmail.com'>
              <button className='border-b-2 border-[#4ee180] uppercase text-sm tracking-[1px]'>Contact me</button>
              </a>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 '>
                  {/*DICTIONARY APP */}
               <div className='mt-4 '>
                  <div className='mb-4'>
                    <img src={logo6} alt='Dictionary' className='h-25 w-25'/>
                    {/* <iframe title='Analog' src='https://mmumar101.github.io/My-Fylo-Landing-Page/ width={500} height={500]'></iframe> */}
                  </div>
                  <div className='text-[22px] font-bold'>DICTIONARY APP</div>

                  <div className='flex gap-5 pt-2'>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JavaScript</p>
                    <p>React</p>
                  </div>

                  <div className='flex font-500 gap-7 py-6'>
                    <a href='https://mmumar101.github.io/Dictionary/' className='border-b-2 border-[#4ee180]'>VIEW PROJECT</a>
                    <a href='https://github.com/mmumar101/Dictionary' className='border-b-2 border-[#4ee180]'>VIEW CODE</a>
                  </div>
              </div>


                {/*TODO APP */}
                <div className='mt-4'>
                  <div className='mb-4'>
                    <img src={logo5} alt='Todo' className='h-25 w-25'/>
                    {/* <iframe title='Analog' src='https://mmumar101.github.io/My-Fylo-Landing-Page/ width={500} height={500]'></iframe> */}
                  </div>
                  <div className='text-[22px] font-bold'>TODO APP</div>

                  <div className='flex gap-5 pt-2'>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JavaScript</p>
                    <p>React</p>
                  </div>

                  <div className='flex font-500 gap-7 py-6'>
                    <a href='https://mmumar101.github.io/Todo-App/' className='border-b-2 border-[#4ee180]'>VIEW PROJECT</a>
                    <a href='https://github.com/mmumar101/Todo-App' className='border-b-2 border-[#4ee180]'>VIEW CODE</a>
                  </div>
              </div>

              {/* ANALOG CLOCK */}
              <div className='mt-4 pr-4'>
                  <div className='mb-4'>
                    <img src={logo1} alt="clock" className='h-25 w-25'/>
                    {/* <iframe title='Analog' src='https://mmumar101.github.io/My-Fylo-Landing-Page/ width={400} height={400]'></iframe> */}
                  </div>
                  <div className='text-[22px] font-bold'>ANALOG CLOCK</div>

                  <div className='flex gap-5 pt-2'>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JavaScript</p>
                  </div>

                  <div className='flex font-500 gap-7 py-6'>
                    <a href='https://mmumar101.github.io/Analog-Clock-Face-Amination/' className='border-b-2 border-[#4ee180]'>VIEW PROJECT</a>
                    <a href='https://github.com/mmumar101/Analog-Clock-Face-Amination' className='border-b-2 border-[#4ee180]'>VIEW CODE</a>
                  </div>
              </div>

               {/*FYLO LANDING PAGE  */}
              <div className='mt-4'>
                  <div className='mb-4'>
                    <img src={logo2} alt='Fylo' className='h-25 w-25'/>
                    {/* <iframe title='Analog' src='https://mmumar101.github.io/My-Fylo-Landing-Page/ width={500} height={500]'></iframe> */}
                  </div>
                  <div className='text-[22px] font-bold'>FYLO LANDING PAGE</div>

                  <div className='flex gap-5 pt-2'>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JavaScript</p>
                    <p>React</p>
                  </div>

                  <div className='flex font-500 gap-7 py-6'>
                    <a href='https://mmumar101.github.io/My-Fylo-Landing-Page/' className='border-b-2 border-[#4ee180]'>VIEW PROJECT</a>
                    <a href='https://github.com/mmumar101/My-Fylo-Landing-Page' className='border-b-2 border-[#4ee180]'>VIEW CODE</a>
                  </div>
              </div>

              {/* WHAKE A MOLE GAME */}
              <div className='mt-4 pr-4'>
                  <div className='mb-4'>
                    <img src={logo3} alt='game' className='h-25 w-25'/>
                    {/* <iframe title='Analog' src='https://mmumar101.github.io/My-Fylo-Landing-Page/ width={500} height={500]'></iframe> */}
                  </div>
                  <div className='text-[22px] font-bold'>WHAKE A MOLE GAME</div>

                  <div className='flex gap-5 pt-2'>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JavaScript</p>
                  </div>

                  <div className='flex font-500 gap-7 py-6'>
                    <a href='https://mmumar101.github.io/Whack-a-Mole-Game/' className='border-b-2 border-[#4ee180]'>VIEW PROJECT</a>
                    <a href='https://github.com/mmumar101/Whack-a-Mole-Game/' className='border-b-2 border-[#4ee180]'>VIEW CODE</a>
                  </div>
              </div>

              {/* COUNT DOWN TIMER */}
              <div className='mt-4'>
                  <div className='mb-4'>
                    <img src={logo4} alt='timer' className='h-25 w-25'/>
                    {/* <iframe title='Analog' src='https://mmumar101.github.io/My-Fylo-Landing-Page/ width={500} height={500]'></iframe> */}
                  </div>
                  <div className='text-[22px] font-bold'>COUNT DOWN TIMER</div>

                  <div className='flex gap-5 pt-2'>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JavaScript</p>
                  </div>

                  <div className='flex font-500 gap-7 py-6'>
                    <a href='https://mmumar101.github.io/Count-Down-Timer/' className='border-b-2 border-[#4ee180]'>VIEW PROJECT</a>
                    <a href='https://github.com/mmumar101/Count-Down-Timer' className='border-b-2 border-[#4ee180]'>VIEW CODE</a>
                  </div>
              </div>
             
        </div>
        
    </div>
  )
}

export default projects