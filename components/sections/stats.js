'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';


const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start((i) => ({
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          duration: 1,
          delay: i * 1, // Stagger animations
        },
      }));
    }
  }, [isInView, controls]);

  const stats = [
    {
      value: 90,
      unit: '%',
      text: 'Clients experience a 90% boost in conversions after we design and optimize their website.',
    },
    {
      value: 150,
      unit: '+',
      text: 'Over 150 satisfied clients trust us to elevate their digital presence.',
    },
    {
      value: 200,
      unit: '+',
      text: 'Successfully delivered over 200 projects, bringing ideas to life with precision.',
    },
  ];

  const AnimatedNumber = ({ value, unit }) => {
    const numberControls = useAnimation();
    const [animatedValue, setAnimatedValue] = useState(0);

    useEffect(() => {
      if (isInView) {
        numberControls.start({
          value: value,
          transition: {
            duration: 3,
            ease: 'easeInOut',
            onUpdate: (latest) => {
              setAnimatedValue(Math.round(latest));
            },
          },
        });
      }
    }, [isInView, value, numberControls]);

    return (
      <motion.span animate={numberControls}>{animatedValue}{unit}</motion.span>
    );
  };

  return (
    <section className="bg-blue-strong px-2 py-16 mt-10 lg:px-8 relative z-0 overflow-clip">
      <div className="inset-0 bg-[url('/grains.jpeg')] bg-cover bg-center opacity-10 absolute -z-20"></div>
      <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={controls}
      className="flex flex-col text-center">
        <h3 className="text-white-strong text-[25px] font-bold lg:text-[55px]">Proven Results, Measurable Success</h3>
        <p className="text-white-light lg:mt-4">With a growing list of satisfied clients, our expertise speaks for itself.</p>
      </motion.div>
      <div ref={ref} className="mt-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              animate={controls}
              custom={index}
              className="space-y-4"
            >
              <div className="text-5xl lg:text-8xl font-bold text-blue-extraLight">
                <AnimatedNumber value={stat.value} unit={stat.unit} />
              </div>
              <p className="text-lg text-white-light">{stat.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;