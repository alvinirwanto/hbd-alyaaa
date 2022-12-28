import React from 'react'

import { motion } from 'framer-motion'
import { slideIn, zoomIn } from '../utils/motion'

import Image from 'next/image'

import img1 from '../public/Foto/1.jpg'
import img2 from '../public/Foto/2.jpg'
import img3 from '../public/Foto/3.jpg'
import img4 from '../public/Foto/4.jpg'
import img5 from '../public/Foto/5.jpg'
import img6 from '../public/Foto/6.jpg'
import img7 from '../public/Foto/7.jpg'
import img8 from '../public/Foto/8.jpg'
import img9 from '../public/Foto/9.jpg'
import img10 from '../public/Foto/10.jpg'
import img11 from '../public/Foto/11.jpg'
import img12 from '../public/Foto/12.jpg'
import img13 from '../public/Foto/13.jpg'
import img14 from '../public/Foto/14.jpg'
import img15 from '../public/Foto/15.jpg'
import img16 from '../public/Foto/16.jpg'
import img17 from '../public/Foto/17.jpg'
import img18 from '../public/Foto/18.jpg'
import img19 from '../public/Foto/19.jpg'
import img20 from '../public/Foto/20.jpg'


const Foto = () => {
    return (
        <div>
            <div className='flex flex-col gap-9 text-xl text-white px-3 md:px-[5rem] py-[5rem] text-center'>
                <motion.p
                    variants={zoomIn(0.5, 0.5)}
                    initial='hidden'
                    whileInView='show'
                    className='font-medium font-montserrat text-xl'>Tak terasa waktu sudah berjalan begitu cepatt 😭😭😭</motion.p>

                <div className="w-[90vw] h-[40vh] xl:h-[50vh] overflow-hidden ">
                    <ul className="list-none h-full flex animate-[scrolling_15s_linear_infinite] md:animate-[scrollingXl_15s_linear_infinite]">
                        <li>
                            <Image
                                src={img1}
                                className='object-cover'
                            />
                        </li>
                        <li>
                            <Image
                                src={img2}
                                className='object-cover'
                            />
                        </li>
                        <li>
                            <Image
                                src={img3}
                                className='object-cover'
                            />
                        </li>
                        <li>
                            <Image
                                src={img4}
                                className='object-cover'
                            />
                        </li>
                        <li>
                            <Image
                                src={img5}
                                className='object-cover'
                            />
                        </li>
                        <li>
                            <Image
                                src={img6}
                                className='object-cover'
                            />
                        </li>
                        <li>
                            <Image
                                src={img7}
                                className='object-cover'
                            />
                        </li>
                        <li>
                            <Image
                                src={img8}
                                className='object-cover'
                            />
                        </li>
                        <li>
                            <Image
                                src={img9}
                                className='object-cover'
                            />
                        </li>
                        <li>
                            <Image
                                src={img10}
                                className='object-cover'
                            />
                        </li>



                        <li>
                            <Image
                                src={img1}
                                className='object-cover'
                            />
                        </li>
                        <li>
                            <Image
                                src={img2}
                                className='object-cover'
                            />
                        </li>
                        <li>
                            <Image
                                src={img3}
                                className='object-cover'
                            />
                        </li>
                        <li>
                            <Image
                                src={img4}
                                className='object-cover'
                            />
                        </li>
                        <li>
                            <Image
                                src={img5}
                                className='object-cover'
                            />
                        </li>
                    </ul>
                </div>

                <div className="w-[90vw] h-[40vh] xl:h-[50vh] overflow-hidden mt-4 xl:mt-[3rem]">
                    <ul className="list-none h-full flex animate-[scrollingBack_15s_linear_infinite] md:animate-[scrollingBackXl_15s_linear_infinite]">
                        <li>
                            <Image
                                src={img11}
                                className='object-cover'
                            />
                        </li>
                        <li>
                            <Image
                                src={img12}
                                className='object-cover'
                            />
                        </li>
                        <li>
                            <Image
                                src={img13}
                                className='object-cover'
                            />
                        </li>
                        <li>
                            <Image
                                src={img14}
                                className='object-cover'
                            />
                        </li>
                        <li>
                            <Image
                                src={img15}
                                className='object-cover'
                            />
                        </li>
                        <li>
                            <Image
                                src={img16}
                                className='object-cover'
                            />
                        </li>
                        <li>
                            <Image
                                src={img17}
                                className='object-cover'
                            />
                        </li>
                        <li>
                            <Image
                                src={img18}
                                className='object-cover'
                            />
                        </li>
                        <li>
                            <Image
                                src={img19}
                                className='object-cover'
                            />
                        </li>
                        <li>
                            <Image
                                src={img20}
                                className='object-cover'
                            />
                        </li>



                        <li>
                            <Image
                                src={img11}
                                className='object-cover'
                            />
                        </li>
                        <li>
                            <Image
                                src={img12}
                                className='object-cover'
                            />
                        </li>
                        <li>
                            <Image
                                src={img13}
                                className='object-cover'
                            />
                        </li>
                        <li>
                            <Image
                                src={img14}
                                className='object-cover'
                            />
                        </li>
                        <li>
                            <Image
                                src={img15}
                                className='object-cover'
                            />
                        </li>
                    </ul>
                </div>
                <motion.p
                    variants={zoomIn(0.5, 0.5)}
                    initial='hidden'
                    whileInView='show'
                    className='font-semibold font-montserrat mt-[5rem] text-2xl max-w-[900px] mx-auto'>Walaupun aku masih baru itungannya di hidup kamu, tapi semoga kehadiran aku saat ini selalu bisa bikin kamu bahagia yaa 😊</motion.p>
            </div>
        </div>
    )
}

export default Foto