'use client';

import { motion } from 'framer-motion';
import { FaArrowRight } from "react-icons/fa";
import HeroSectionOrbit from "../utilities/heroSectionOrbit";
import Image from 'next/image';
import Button from '../utilities/button';
import { AngleArrow } from '../utilities/icons';

const HeroSection = () => {
    
    return(
        <section className=" px-2 lg:px-5 flex flex-col items-center relative justify-center w-full bg-gradient-to-t from-[#ffffff] to-blue-strong/10 overflow-clip">
            <div className="items-center h-auto">
                <div className="size-[420px] hero_section_ring"></div>
                <div className="size-[620px] hero_section_ring"></div>
                <div className="size-[820px] hero_section_ring"></div>
                <div className="size-[1020px] hero_section_ring"></div>
                <div className="size-[1220px] hero_section_ring"></div>

                <HeroSectionOrbit size={700} rotation={45} orbitDuration={'30s'}>
                    <div className="size-20 rounded-full bg-blue-strong"></div>
                </HeroSectionOrbit>
                <HeroSectionOrbit size={500} rotation={180} orbitDuration={'40s'}>
                    <div className="size-8 bg-blue-extraLight"></div>
                </HeroSectionOrbit>
                <HeroSectionOrbit size={500} rotation={90} orbitDuration={'40s'}>
                    <div className="size-40 rounded-full bg-blue-extraLight"></div>
                </HeroSectionOrbit>
                <HeroSectionOrbit size={650} rotation={45} orbitDuration={'60s'}>
                    <div className="size-24 rounded-full bg-blue-strong"></div>
                </HeroSectionOrbit>
                <HeroSectionOrbit size={750} rotation={90} orbitDuration={'40s'}>
                    <div className="size-16 rounded-full bg-blue-extraLight"></div>
                </HeroSectionOrbit>

                
                <motion.div
                initial={{x: -100, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                viewport={{once: true}}
                transition={{ duration: 1, ease: 'easeInOut'}}
                className='relative text-center pt-48 w-2/3 mx-auto'
                >
                    <h1 className= "font-extrabold text-black-strong text-4xl md:text-6xl lg:text-8xl tracking-wide">Seamless digital <span className='italic'>solutions</span> crafted for <span className='italic'>your success</span></h1>
                    <div className='absolute -bottom-7 md:-bottom-20 lg:-bottom-24 lg:right-0 w-full'>
                        <img src='/line.png' alt="line" width={250} height={130} className="w-full object-contain"/>
                    </div>
                </motion.div>

                <div className="text-center mt-20 md:mt-24 lg:mt-40 mx-4 flex justify-center  ">
                    <motion.h2
                    initial={{x: 100, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    viewport={{once: true}}
                    transition={{ duration: 1, ease: 'easeInOut'}}
                    className="text-black-light text-md lg:text-xl items-center tracking-wide w-full max-w-screen-sm">We are your go-to digital agency. We collaborate closely with you to deliver tailored solutions that drive growth and set you apart.</motion.h2>
                </div>
                <motion.button
                initial={{x: -100, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                viewport={{once: true}}
                transition={{ duration: 1, ease: 'easeInOut'}}
                className="mx-auto mt-20 flex items-center gap-3 text-md lg:text-lg border rounded-full bg-blue-light text-white-strong py-5 px-5 lg:px-7 lg:py-6 tracking-wider"
                 >Free consultation<span><FaArrowRight className="-rotate-45"/></span></motion.button>
            </div>
        </section>
    )
}

export default HeroSection;