'use client'

import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/contents";
import { motion } from "motion/react";
import { MdMenu } from 'react-icons/md';
import { FaTimes } from 'react-icons/fa';
import { useState } from "react";

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <header className="w-full relative">
            <div className="fixed mx-3 mt-3 lg:mx-7 right-0 left-0 flex justify-between items-center px-5 py-3 md:px-8 lg:px-16 bg-white-strong/60 backdrop-blur rounded-3xl z-20">
                <Link href='/'>
                    <Image src='/logo1.png' alt="logo" width={130} height={130} className="object-contain"/>
                </Link>

                <div className="border-2 border-black-light rounded-md" onClick={() => setToggleMenu((prev) => !prev)}>
                    <MdMenu className="text-3xl text-black-light lg:hidden"/>
                </div>

                
                
                {/* DESKTOP NAV */}
                <ul className="hidden lg:flex gap-10 tracking-wide">
                    {navLinks.map((link) => (
                        <motion.li key={link.label} whileHover={{scale: 1.1}}>
                            <Link href={link.href} className="font-semibold tex-lg hover:text-[#00244e] text-black-light">
                                {link.label}
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </div>

            {/* MOBILE NAV */}
            {toggleMenu && (
                <motion.nav aria-label="mobile" initial={{x: '100vw'}} animate={{x: 0}} transition={{delay: 0.1, type: 'spring'}} className="flex flex-col fixed top-0 right-0 w-full shadow-lg h-full z-30 bg-white-strong/80 backdrop-blur border border-black-light/20">
                    <div className="flex justify-end mt-5 mr-5">
                        <FaTimes className="text-3xl lg:hidden text-black-light" onClick={() => setToggleMenu(false)}/>
                    </div>
                    <div className="flex flex-col items-center gap-10 mt-20">
                        {navLinks.map((link)=> (
                            <Link key={link.label} href={link.href} className="text-xl py-2 border-b-2 border-black-light text-black-strong font-bold">
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </motion.nav>
            )}
        </header>
    )
}

export default Navbar;