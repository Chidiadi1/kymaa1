import { motion } from 'framer-motion';
import HeadingTags from "@/components/utilities/headingTags";
import TeamCard from "@/components/utilities/teamCard";


export default function AboutUS() {
    return (
      <section className="font-montserrat text-black-strong">
        <div className="mt-28 md:mt-36 px-4 lg:px-8 overflow-hidden">
            <div className="flex flex-col lg:flex-row lg:items-center gap-5">
                <motion.h1
                initial={{y: -100, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                viewport={{once: false}}
                transition={{ duration: 1, ease: 'easeInOut'}}
                className="text-3xl lg:text-6xl font-semibold">We build <span className="font-italiana italic">digital solutions</span> that help brands do more, better.</motion.h1>
                <motion.p
                initial={{x: 100, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                viewport={{once: false}}
                transition={{ duration: 1, ease: 'easeInOut'}}
                className="text-sm lg:text-lg">We're a team of strategists, designers, and developers who care about helping businesses grow with intention. From consultation to launch, we focus on what actually moves the needle. We take the time to understand what makes your brand different, and build solutions that connect, convert, and grow with you.</motion.p>
            </div>
        </div>

        <motion.div 
        initial={{y: 100, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        viewport={{once: true}}
        transition={{ duration: 1, ease: 'easeInOut'}}
        className="flex flex-col w-full items-center mt-16 lg:mt-28 mb-12 lg:mb-20">
            <HeadingTags content={"THE TEAM"}/>
            <h2 className="text-black-strong font-montserrat text-3xl font-semibold lg:text-6xl text-center">Few of Us</h2>
        </motion.div>
        <div>
          <TeamCard />
        </div>
      </section>
    )
  }