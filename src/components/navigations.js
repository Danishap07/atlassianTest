import React from 'react'

const Navigations = () => {
    return (
        <div className='w-full border-[1px] border-[#E7E7E7] md:space-x-[72px] sm:space-x-[50px] space-x-[20px] md:px-[50px] sm:px-[35px]'>
            <a href="#" className='font-[600] text-[#DC4A2D] text-[16px] sm:text-[20px] leading-[27px] underline underline-offset-8'>Job preview</a>
            <a href="#" className='font-[500] text-[#888888] text-[16px] sm:text-[20px] leading-[27px]'>Applicants</a>
            <a href="#" className='font-[500] text-[#888888] text-[16px] sm:text-[20px] leading-[27px]'>Match</a>
            <a href="#" className='font-[500] text-[#888888] text-[16px] sm:text-[20px] leading-[27px]'>Messages</a>
        </div>
    )
}

export default Navigations