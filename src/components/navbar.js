import Image from 'next/image'
import React from 'react'
import { DM_Sans } from "next/font/google";

const dm_sans = DM_Sans({ subsets: ["latin"] });

const Navbar = () => {
  return (
    <div className={`w-full ${dm_sans.className} drop-shadow-[10%]`}>
      <div className='my-2 mx-4 flex justify-between space-x-2'>
        <button className='bg-[#E7E7E7] text-[#DC4A2D] px-4'>Logo</button>
        

          <div className='flex place-items-center border-[0.5px] border-[#D1D1D1] pl-2 pr-4 py-1 rounded-full'>
            <div className='flex p-2 bg-[#DC4A2D] rounded-full gap-x-1'>
                
            <Image className='w-6 h-6' src='/briefcase.png' width={24} height={22} alt='Briefcase' />
            <h4 className='text-[#ffffff] font-medium text-[20px] sm:block hidden'>Jobs</h4>
            </div>
            <div className='flex ml-8 cursor-pointer'>
              <Image className='w-6 h-6' src='/message-Icon.png' width={24} height={24} alt='Message Icon' />
              <Image className='mb-5 ' src='/red_ellipse.png' width={5} height={5} alt='Message Icon' />
              <h6 className='text-[#B0B0B0] pl-1 sm:block hidden'>Messages</h6>
            </div>
            <div className='flex ml-8 gap-x-1 cursor-pointer'>
              <Image className='w-6 h-6' src='/coins-hand.png' width={24} height={24} alt='Payments Icon' />
              <h6 className='text-[#B0B0B0] sm:block hidden'>Payments</h6>
            </div>
            <div className='md:hidden '>
                
            </div>
          </div>
          <div className='flex place-items-center p-2 gap-x-2'>
              <Image className='w-6 h-6 cursor-pointer' src='/bell-icon.png' width={24} height={24} alt='Message Icon' />
              <Image className='w-6 h-6 cursor-pointer' src='/atlassian.png' width={24} height={24} alt='Message Icon' />
              <Image className='w-[10px] h-[5px] cursor-pointer' src='/down-icon.png' width={10} height={5} alt='Message Icon' />
              
          
        </div>
      </div>

    </div>
  )
}

export default Navbar