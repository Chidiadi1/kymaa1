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
    <section className="bg-blue-strong px-2 py-20 lg:px-8 overflow-clip font-montserrat text-white-normal">
      <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={controls}
      className="mx-auto text-center p-2">
        <h3 className="text-3xl font-semibold lg:text-6xl">With a growing list of <span className="font-italiana italic">satisfied clients</span>, our expertise speaks for <span className="font-italiana italic">itself</span>.</h3>
      </motion.div>

      <div ref={ref} className="mt-16 lg:mt-32">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            animate={controls}
            custom={index}
            className="space-y-4"
            >
              <h3 className="text-3xl lg:text-6xl font-semibold">
                <AnimatedNumber value={stat.value} unit={stat.unit} />
              </h3>
              <p className="text-sm w-3/4 mx-auto md:text-left">{stat.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;