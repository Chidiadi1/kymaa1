import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaqArrow, FaqIcon } from '../utilities/icons';
import HeadingTags from '../utilities/headingTags';
import { faqItems } from '@/contents';

const FAQ = () => {

    return (
        <section className='py-16 px-2 md:px-4 lg:px-8 font-montserrat'>
            <motion.div 
            initial={{y: 100, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            viewport={{once: true}}
            transition={{ duration: 1, ease: 'easeInOut'}}
            className="flex flex-col w-full items-center mt-16 lg:mt-20 mb-16 lg:mb-28">
                <HeadingTags content={"FAQ"}/>
                <h2 className="text-black-strong text-3xl font-semibold lg:text-6xl text-center">Because, You Need To Know</h2>
            </motion.div>
            {faqItems.map((item, index) => (
                <Disclosure key={index} className="p-2 mb-6 border-b-2 border-blue-strong/10 md:w-2/3 mx-auto">
                    {({ open }) => (
                        <div>
                            <DisclosureButton className="group py-2 flex justify-between w-full focus:outline-0">
                                <p className='text-left w-2/3 text-sm lg:text-lg text-black-strong'>{item.q}</p>
                                <FaqArrow className="text-black-strong text-lg transition duration-500 ease-in-out group-data-[open]:rotate-180"/>
                            </DisclosureButton>

                            <AnimatePresence>
                                {open && (
                                    <DisclosurePanel static className="text-black-light text-sm">
                                        <motion.div
                                        initial={{opacity: 0, y: -20}}
                                        animate={{opacity: 1, y: 0}}
                                        exit={{opacity: 0, y: -20}}
                                        transition={{duration: 0.5, ease: 'easeInOut'}}
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