import { motion } from 'framer-motion';
import TestimonialCard from "../utilities/testimonialCard";
import HeadingTags from "../utilities/headingTags";
import { TestimonialIcon } from "../utilities/icons";
import Button from '../utilities/button';


const TestimonialSection = () => {

  return (
    <section className="py-20 px-2 md:px-4 lg:px-8">
      <motion.div 
      initial={{y: 100, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      viewport={{once: true}}
      transition={{ duration: 1, ease: 'easeInOut'}}
      className="flex flex-col w-full items-center my-20">
          <HeadingTags icon={TestimonialIcon} content={"Testimonials"}/>
          <hr className="border my-2 w-full"/>
          <h2 className="text-black-strong text-[25px] font-bold lg:text-[55px] text-center">Word on the Street About Us</h2>
      </motion.div>
      <TestimonialCard />

      <div className='mt-20 flex justify-center'>
        <Button content={"Get a Quote"} textColor={'#f0f0f0'} bgColor={'#00244e'}/>
      </div>
    </section>
  );
};

export default TestimonialSection;
