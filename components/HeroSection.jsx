import React from 'react'
import Image from 'next/image'

import MainImg from '../public/Confetti-Balloon.svg'
import MainImg2 from '../public/Confetti-Balloon2.svg'


const HeroSection = () => {
    return (
        <div className='bg-[#ffffff] w-full h-screen px-3 md:px-[5rem] flex justify-center relative'>
            <Image
                src={MainImg}
                alt='balloon'
                priority
                className='hidden md:block object-contain h-full w-auto absolute top-0'
            />

            <Image
                src={MainImg2}
                alt='balloon'
                priority
                className='block md:hidden object-contain w-full h-auto absolute top-0'
            />

            <div className='z-[100] md:pt-[15rem] w-full flex flex-col justify-center items-center text-white'>
                <div className='flex flex-col gap-8 items-center'>
                    <h2 className='font-montserrat text-3xl font-semibold'> - Happy - </h2>
                    <h1 className='font-hbd text-9xl md:text-[10rem] md:leading-[10rem]'>Birthday</h1>
                </div>
                <p className='bg-warna-ungu px-6 md:px-[3rem] py-2 rounded-full text-white font-montserrat font-semibold text-2xl tracking-wider'> - Bocillll Gumushhhh - </p>
                <p className='font-montserrat text-xl md:text-base pt-2'>a.k.a <b>Alya Fitri Alfayni</b></p>
            </div>
        </div>
    )
}

export default HeroSection