'use client';

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { useRef, useEffect } from 'react';
import { AnimatePresence, motion, easeOut, useAnimation, useInView } from 'framer-motion';
import { FaqArrow, FaqIcon } from '../utilities/icons';
import HeadingTags from '../utilities/headingTags';
import { faqItems } from '@/contents';

const FAQ = () => {
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

    return (
        <section ref={ref} className='py-16 px-2 md:px-4 lg:px-8'>
            <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={controls}
            className="flex flex-col w-full items-center my-20">
                <HeadingTags icon={FaqIcon} content={"FAQ"}/>
                <hr className="border my-2 w-full"/>
                <h2 className="text-black-strong text-[25px] font-bold lg:text-[55px] text-center">Because, You Need To Know</h2>
            </motion.div>
            {faqItems.map((item, index) => (
                <Disclosure key={index} className="p-2 rounded-xl mb-6 bg-white-strong/60 backdrop-blur shadow-white-light shadow-sm md:w-2/3 mx-auto">
                    {({ open }) => (
                        <div>
                            <DisclosureButton className="group py-2 flex justify-between w-full focus:outline-0">
                                <p className='text-left w-2/3 text-lg text-black-strong'>{item.q}</p>
                                <FaqArrow className="text-blue-strong size-6 transition duration-500 ease-in-out group-data-[open]:rotate-180"/>
                            </DisclosureButton>

                            <AnimatePresence>
                                {open && (
                                    <DisclosurePanel static className="text-black-light">
                                        <motion.div
                                        initial={{opacity: 0, y: -20}}
                                        animate={{opacity: 1, y: 0}}
                                        exit={{opacity: 0, y: -20}}
                                        transition={{duration: 0.5, ease: easeOut}}
                                        >
                                            {item.a}
                                        </motion.div>
                                    </DisclosurePanel>
                                )}
                            </AnimatePresence>
                        </div>
                    )}
                </Disclosure>
            ))}
        </section>
    )
}

export default FAQ;