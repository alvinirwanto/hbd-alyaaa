import React, { useState } from 'react'

import { motion } from 'framer-motion'
import { slideIn, zoomIn } from '../utils/motion'

import { BsArrowDown } from 'react-icons/bs'

const Cake = () => {
    const [show, setShow] = useState(false)

    return (
        <div className='h-full w-full flex flex-col items-center py-[5rem]'>
            <div className={show ? 'block text-center' : 'hidden'}>
                <h2 className='font-hbd text-white text-5xl md:text-7xl'>Selamat Ulang Tahun</h2>
                <p className='font-white text-xl text-white font-montserrat'> - yang ke - </p>
                <p className='text-9xl text-white font-bold font-montserrat'>22</p>
                <p className='font-white text-xl text-white font-montserrat mt-9 font-semibold'>Sayanggg 🤗💓💕</p>


                <div className='flex flex-col justify-center items-center text-white opacity-50 animate-bounce mt-8'>
                    <p>Scroll</p>
                    <BsArrowDown />
                </div>
            </div>

            <div className="block py-4">
                <div className="relative scale-125 xl:scale-150 mt-[10rem]">
                    <div className="relative left-[-120px] xl:left-[-120px] top-[100px]">
                        <div className="plate"></div>
                        <div className="cream"></div>
                        <div className="candle cursor-pointer" onClick={() => { setShow(!show) }}></div>
                        <div className="flame" >
                            <div className="one">+</div>
                            <div className="two">+</div>
                            <div className="three">+</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={show ? 'hidden' : 'block mt-[15rem]'}>
                <motion.p
                    variants={zoomIn(0.5, 0.5)}
                    initial='hidden'
                    whileInView='show'
                    className='text-white text-xl font-semibold font-montserrat'>Tiup lilinnya ... <br />
                    Tiup lilinnya ... <br />
                    Tiup lilinnya sekarang juga ... <br />
                    Sekarang juga ... <br />
                    Sekarang juga ... <br /><br /><br />

                    <span className='font-medium opacity-80 text-base'>(Klik apinya buat niupp)</span>

                </motion.p>
            </div>

            <div className={show ? 'block mt-[15rem] px-4' : 'hidden'}>
                <motion.p
                    variants={zoomIn(0.5, 0.5)}
                    initial='hidden'
                    whileInView='show'
                    className='text-white text-xl font-medium font-montserrat max-w-[900px] mx-auto'>
                    Ternyata bocill yang satu ini udah tuaa yaa wkwkw <br /><br />

                    Selamat ulang tahun orang yang paling gumusshhhh, lucuuu kayak bocilll, dan orang paling spesial di hidup akuu ... <br /><br />

                    Semoga panjang umur, sehat selalu, dilancarkan rezeki nya, dilancarkan segala urusannya, dilancarkan BAB nya, dan lancar semuanyaa ... <br /><br />

                    Semoga segala keinginannya tercapai, dipermudah segala urusannya, dan dapat beguna bagi keluarga, agama, nusa dan bangsa, bumi, tata surya, galaksi, dan alam semesta ... <br /><br />


                    <b>Aamiin ...</b>
                </motion.p>

                <motion.p
                    variants={zoomIn(0.5, 0.5)}
                    initial='hidden'
                    whileInView='show'
                    className='text-white font-montserrat mt-[5rem] text-2xl font-bold'>I LOVE YOUUUU 🤗😘🥰💓💖💕</motion.p>


                <motion.p
                    variants={zoomIn(0.5, 0.5)}
                    initial='hidden'
                    whileInView='show'
                    className='text-white italic font-montserrat opacity-80 mt-[10rem]'>Maaf yaa kue nya cuma bisa dalam bentuk codingan 😭😭😭</motion.p>
            </div>
        </div >
    )
}

export default Cake