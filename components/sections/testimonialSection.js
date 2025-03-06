'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import TestimonialCard from "../utilities/testimonialCard";
import HeadingTags from "../utilities/headingTags";
import { TestimonialIcon } from "../utilities/icons";
import Button from '../utilities/button';


const TestimonialSection = () => {
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
    <section ref={ref} className="py-20 px-2 md:px-4 lg:px-8">
      <motion.div 
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
      className="flex flex-col w-full items-center my-20">
          <HeadingTags icon={TestimonialIcon} content={"Testimonials"}/>
          <hr className="border my-2 w-full"/>
          <h2 className="text-black-strong text-[25px] font-bold lg:text-[55px] text-center">Word on the Street About Us</h2>
      </motion.div>
      <TestimonialCard />

      <div className='mt-20 flex justify-center'>
        <Button content={"Get a Quote"} textColor={'#242424'} bgColor={'transparent'}/>
      </div>
    </section>
  );
};

export default TestimonialSection;
