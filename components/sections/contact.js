import Button from "../utilities/button";
import { motion } from 'framer-motion';

const ContactS = () => {

    return (
        <motion.div 
        initial={{x: -100, opacity: 0}}
        whileInView={{x: 0, opacity: 1}}
        viewport={{once: false}}
        transition={{ duration: 1, ease: 'easeInOut'}}
        className="mt-6 lg:mt-12 py-10 lg:py-16 px-6 lg:px-10 md:px-8 mx-3 lg:mx-6 bg-blue-strong/15 rounded-xl flex flex-col gap-6 lg:flex-row justify-between font-montserrat text-black-strong">
            <div className="lg:w-3/5">
                <h3 className="text-3xl lg:text-6xl mb-6">Your next <span className='font-italiana italic'>big move?</span> Working with <span className='font-italiana italic'>Us</span>.</h3>
                <p className="text-sm lg:text-lg">Your vision deserves the right team to bring it to life. Contact us today and let's make it happen.</p>
            </div>

            <div className='mt-10 flex items-end'>
                <Button content={"Get in touch"} textColor={'#ffffff'} bgColor={'#045fd0'}/>
            </div>
        </motion.div>
    )
}

export default ContactS;