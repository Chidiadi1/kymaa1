'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FaArrowRight } from "react-icons/fa";
import HeroSectionOrbit from "../utilities/heroSectionOrbit";

const HeroSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
        controls.start(() => ({
            opacity: 1,
            y: 1,
            x: 1,
            transition: {
            duration: 2,
            ease: 'easeInOut',
            },
        }));
        }
    }, [isInView, controls]);

    return(
        <section className=" px-2 lg:px-5 flex flex-col items-center relative justify-center w-full  h-screen bg-gradient-to-t from-[#ffffff] to-blue-strong/10 overflow-clip">
            <div className="items-center h-auto pb-20">
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

                <div ref={ref} className="text-center pt-48">
                    <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                     className= "bg-gradient-to-r from-blue-light to-blue-strong inline-flex flex-col lg:flex-row gap-5 bg-clip-text">
                        <h3 className= "text-transparent font-extrabold text-black-strong text-3xl lg:text-6xl  lg:border-r-4 tracking-wide">Seamless Digital Solutions.</h3>
                        <h3 className= "text-transparent font-extrabold text-black-strong text-3xl lg:text-6xl tracking-wide">Crafted for Your Success.</h3>
                    </motion.div>
                </div>
                <div className="text-center my-7 mx-3 lg:my-14 flex justify-center  ">
                    <motion.h2
                    initial={{ opacity: 0, x: 100 }}
                    animate={controls}
                    className="text-black-light text-lg lg:text-xl items-center tracking-wide w-full max-w-screen-md">We are your go-to agency for high-performing websites and mobile apps, graphic design, and strategic SEO services. We collaborate closely with you to deliver tailored solutions that drive growth and set you apart.</motion.h2>
                </div>
                <motion.button
                whileHover={{scale: 1.1, backgroundColor:'transparent', borderColor:'#00244e', color:'#00244e'}}
                initial={{ opacity: 0, x: -100 }}
                animate={controls}
                className="mx-auto flex items-center gap-3 text-lg lg:text-xl border rounded-xl bg-blue-strong text-white-strong py-3 px-5 lg:px-7 lg:py-4 tracking-wider "
                 >Get a free consultation<span><FaArrowRight className="-rotate-45"/></span></motion.button>
            </div>
        </section>
    )
}

export default HeroSection;