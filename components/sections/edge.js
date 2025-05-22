import { motion } from 'framer-motion';
import Button from '../utilities/button';
import { edgeParagraph } from '@/contents';

const Edge = () => {

    return (
        <div className="mt-20 lg:mt-40 pb-16 lg:pb-32 px-2 md:px-4 lg:px-8 w-full">
            <div className='flex flex-col'>
                <motion.div 
                initial={{y: 100, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                viewport={{once: true}}
                transition={{ duration: 1, ease: 'easeInOut'}}
                className="w-full mb-12 lg:mb-24">
                    <h2 className="text-black-strong font-montserrat text-3xl font-semibold lg:text-6xl">What Sets Us <span className="font-italiana italic">Apart</span></h2>
                </motion.div>
                <div className='md:max-w-xl  md:mx-auto md:justify-center '>
                    <motion.h3
                    initial={{x: 100, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    viewport={{once: true}}
                    transition={{ duration: 1, ease: 'easeInOut'}}
                    className='text-sm lg:text-lg text-black-strong font-montserrat'>
                        {edgeParagraph}
                    </motion.h3>

                    <div className='mt-8 lg:mt-12 flex justify-center md:justify-start'>
                        <Button content={"Get a Quote"} textColor={'#ffffff'} bgColor={'#045fd0'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edge; 