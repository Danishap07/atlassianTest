import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='border-[#E7E7E7] border-[1px] px-[50px] py-6'>
            <div className="flex place-items-center gap-x-3">
                <Image className='w-10 h-10 cursor-pointer' src='/atlas-icon.png' width={40} height={40} alt='Atlassian Icon' />
                <h6 className='font-[500] text-[#4F4F4F] text-[20px] leading-[27px] '>Atlassian</h6>
            </div>
            <div className='grid grid-cols-2 pt-6'>
                <div className='space-y-6'>
                    <div className='space-y-2'>
                        <h6 className='font-[500] text-[#6E6D6D] text-[14px] leading-[18.9px] '>Company size</h6>
                        <h6 className='font-[500] text-[#3D3D3D] text-[16px] leading-[21.6px] '>1k - 2k Employees</h6>
                    </div>
                    <div className='space-y-2'>
                        <h6 className='font-[500] text-[#6E6D6D] text-[14px] leading-[18.9px] '>Sector</h6>
                        <h6 className='font-[500] text-[#3D3D3D] text-[16px] leading-[21.6px] '>Information Technology, Infrastructure</h6>
                    </div>
                    <div className='space-y-2'>
                        <h6 className='font-[500] text-[#6E6D6D] text-[14px] leading-[18.9px] '>Founded In</h6>
                        <h6 className='font-[500] text-[#3D3D3D] text-[16px] leading-[21.6px] '>2019</h6>
                    </div>
                </div>
                <div className='space-y-6'>
                    <div className='space-y-2'>
                        <h6 className='font-[500] text-[#6E6D6D] text-[14px] leading-[18.9px] '>Type</h6>
                        <h6 className='font-[500] text-[#3D3D3D] text-[16px] leading-[21.6px] '>Private</h6>
                    </div>
                    <div className='space-y-2'>
                        <h6 className='font-[500] text-[#6E6D6D] text-[14px] leading-[18.9px] '>Funding</h6>
                        <h6 className='font-[500] text-[#3D3D3D] text-[16px] leading-[21.6px] '>Bootstrapped</h6>
                    </div>
                    <div className='space-y-2'>
                        <h6 className='font-[500] text-[#6E6D6D] text-[14px] leading-[18.9px] '>Founded By</h6>
                        <h6 className='font-[500] text-[#3D3D3D] text-[16px] leading-[21.6px] '>Scott Farquhar, Mike Cannon-Brookes</h6>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer