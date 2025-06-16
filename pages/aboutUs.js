import { motion } from 'framer-motion';
import HeadingTags from "@/components/utilities/headingTags";
import TeamCard from "@/components/utilities/teamCard";
import { ourEdge } from '@/contents';
import CompanyProfile from '@/components/sections/companyProfile';


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
                className="text-sm lg:text-lg">Kymaa Digital Agency is a team of strategists, designers, and developers who care about helping businesses grow with intention. From consultation to launch, we focus on what actually moves the needle. We take the time to understand what makes your brand different, and build solutions that connect, convert, and grow with you.</motion.p>
            </div>
        </div>

        <motion.div 
        initial={{y: 100, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        viewport={{once: true}}
        transition={{ duration: 1, ease: 'easeInOut'}}
        className="flex flex-col w-full items-center mt-28 lg:mt-48 mb-10 lg:mb-20">
            <HeadingTags content={"THE TEAM"}/>
            <h2 className="text-3xl font-semibold lg:text-6xl text-center">Few of Us</h2>
        </motion.div>
        <div>
          <TeamCard />
        </div>

        <div className='flex flex-col px-4 lg:px-8 mt-28 lg:mt-40'>
          <motion.h2
          initial={{y: 100, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          viewport={{once: false}}
          transition={{ duration: 1, ease: 'easeInOut'}}
          className="text-xl lg:text-4xl font-semibold mb-6 lg:mb-10">Why clients stick <span className='font-italiana italic'>with us</span>.
          </motion.h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-32'>
            {ourEdge.map((item) => (
                <motion.div key={item.point}
                initial={{y: 100, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                viewport={{once: false}}
                transition={{ duration: 1, ease: 'easeInOut'}}
                className='flex gap-2 w-4/5'>
                  <div className='bg-blue-light p-2 rounded-full h-fit text-center'>
                    <span className='text-white-strong size-6'>{item.icon}</span>
                  </div>
                  <div className='text-sm lg:text-lg'>
                    <h3 className='font-semibold mb-2'>{item.point}</h3>
                    <p>{item.text}</p>
                  </div>
                </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-28 lg:mt-32">
          <CompanyProfile />
        </div>
      </section>
    )
  }