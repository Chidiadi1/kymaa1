'use client';

import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/contents";
import { motion } from "motion/react";
import { MdMenu } from 'react-icons/md';
import { FaTimes } from 'react-icons/fa';
import { useState, useEffect } from "react";

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false)

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="w-full relative">
            <div className={`lg:mx-auto flex justify-between items-center px-5 py-4 md:px-8 lg:px-16 bg-transparent fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled ? 'bg-white-normal' : 'bg-transparent'
        }`}>
                <Link href='/'>
                    <Image src="/logo.png" alt="logo" width={100} height={100} className="object-contain"/>
                </Link>

                <div className="border-2 border-black-extraLight lg:hidden rounded-full p-2" onClick={() => setToggleMenu((prev) => !prev)}>
                    <MdMenu className="text-2xl text-black-strong lg:hidden"/>
                </div>

                
                
                {/* DESKTOP NAV */}
                <ul className="hidden lg:flex gap-10 tracking-wide">
                    {navLinks.map((link) => (
                        <motion.li key={link.label} whileHover={{scale: 1.1}}>
                            <Link href={link.href} className="font-semibold font-montserrat text-sm text-blue-strong ">
                                {link.label}
                            </Link>
                        </motion.li>
                    ))}
                </ul>

                
                <Link href='/' className="font-semibold text-sm hidden lg:block">
                    <motion.p whileHover={{scale: 1.1}} className="bg-blue-light font-montserrat text-white-strong py-3 px-4 rounded-full">CONTACT US</motion.p>
                </Link>
            </div>

            {/* MOBILE NAV */}
            {toggleMenu && (
                <motion.nav aria-label="mobile" initial={{x: '100vw'}} animate={{x: 0}} transition={{delay: 0.1, type: 'spring'}} className="flex flex-col fixed top-0 w-full h-full z-50 bg-white-normal">
                    <div className="flex justify-end mt-5 mr-5 border-2 rounded-full mx-auto max-w-fit border-black-extraLight p-2">
                        <FaTimes className="text-2xl lg:hidden text-black-strong" onClick={() => setToggleMenu(false)}/>
                    </div>
                    <div className="flex flex-col items-center gap-10 mt-36">
                        {navLinks.map((link)=> (
                            <Link key={link.label} href={link.href} className="text-md py-2 text-black-strong font-bold font-montserrat">
                                {link.label}
                            </Link>
                        ))}
                        <Link href='/' className="text-md">
                            <motion.p whileHover={{scale: 1.1}} className="bg-blue-light text-white-strong py-4 px-5 rounded-full font-montserrat">CONTACT US</motion.p>
                        </Link>
                    </div>
                </motion.nav>
            )}
        </header>
    )
}

export default Navbar;