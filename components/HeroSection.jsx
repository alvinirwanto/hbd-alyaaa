import React from 'react'
import Image from 'next/image'

import { motion } from 'framer-motion'
import { slideIn, zoomIn } from '../utils/motion'


import MainImg from '../public/Confetti-Balloon-White.svg'
import MainImg2 from '../public/Confetti-Balloon-White2.svg'
import MainImg3 from '../public/Confetti-Balloon3.svg'


const HeroSection = () => {
    return (
        <div className='w-full h-full md:h-screen px-3 md:px-[5rem] flex flex-col items-center relative'>
            <Image
                src={MainImg}
                alt='balloon'
                priority
                className='hidden md:block object-contain h-full w-auto absolute top-0'
            />


            {/* Just in Mobile */}
            <motion.div
                variants={slideIn('down', 0.5, 0.5)}
                initial='hidden'
                whileInView='show'
            >
                <Image
                    src={MainImg2}
                    alt='balloon'
                    priority
                    className='block md:hidden object-contain w-full h-auto'
                />
            </motion.div>

            <motion.div
                variants={zoomIn(0.9, 0.5)}
                initial='hidden'
                whileInView='show'
                className='z-[100] xl:absolute bottom-10 w-full flex flex-col justify-center items-center text-white mb-[5rem] md:mb-0'>
                <div className='flex flex-col gap-8 items-center'>
                    <h2 className='font-montserrat text-3xl font-semibold'> - Happy - </h2>
                    <h1 className='font-hbd text-9xl md:text-[10rem] md:leading-[10rem]'>Birthday</h1>
                </div>
                <p className='bg-warna-ungu px-6 md:px-[3rem] py-2 rounded-full text-white font-montserrat font-semibold text-2xl tracking-wider'> - Bocillll Gumushhhh - </p>
                <p className='font-montserrat text-xl md:text-base pt-2'>a.k.a <b>Alya Fitri Alfayni</b></p>
            </motion.div>

            {/* Just in Mobile */}
            <motion.div
                variants={slideIn('up', 0.5, 0.5)}
                initial='hidden'
                whileInView='show'
            >
                <Image
                    src={MainImg3}
                    alt='balloon'
                    priority
                    className='block md:hidden object-contain w-full h-auto'
                />
            </motion.div>
        </div>
    )
}

export default HeroSection