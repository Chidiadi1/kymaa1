import { motion } from 'framer-motion';
import Stats from "@/components/sections/stats";
import ContactS from "@/components/sections/contact";
import ContactForm from "@/components/utilities/contactForm";

export default function Contact() {
    return (
      <section className="font-montserrat text-black-strong">
        <div className="mt-28 md:mt-36 flex flex-col md:flex-row md:gap-8 w-full lg:px-10 overflow-hidden">
          <div className="px-6 lg:px-8 text-left md:w-1/2">
            <motion.h3
            initial={{x: -100, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            viewport={{once: true}}
            transition={{ duration: 1, ease: 'easeInOut'}}
            className="text-3xl lg:text-6xl font-semibold">Talk to the team that gets it <span className="font-italiana italic">done.</span></motion.h3>
            <motion.p
            initial={{y: -100, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            viewport={{once: true}}
            transition={{ duration: 1, ease: 'easeInOut'}}
            className="text-sm lg:text-lg mt-2">Have a Project in Mind? Let's Build It Together.</motion.p>
          </div>
          <div className="mb-28 md:w-3/4">
            <ContactForm />
          </div>
        </div>
        <Stats />
        <ContactS />
      </section>
    )
  }