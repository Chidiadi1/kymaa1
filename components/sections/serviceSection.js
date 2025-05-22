import { motion } from 'framer-motion';
import HeadingTags from "../utilities/headingTags";
import ServiceCard from "../utilities/serviceCard";
import { AppIcon, GraphicIcon, SeoIcon, WebsiteIcon } from '../utilities/icons.js';
import { mobAppContent, mobAppTitle, webDevContent, webDevTitle, seoTitle, seoContent, graphicTitle, graphicContent } from "@/contents";

const ServiceSection = () => {

    return (
        <section className="mt-24 lg:mt-40 px-2 md:px-4 lg:px-8 py-8 overflow-clip">
            <motion.div
            initial={{y: 100, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            viewport={{once: true}}
            transition={{ duration: 1, ease: 'easeInOut'}}
            className="flex flex-col w-full items-center mb-10">
                <HeadingTags content={"OUR DIGITAL PLAYGROUND"}/>
                <h2 className="text-black-strong font-montserrat text-3xl font-bold lg:text-6xl text-center">What We Do</h2>
            </motion.div>

            <div className="mt-6">
                <motion.div
                initial={{x: 100, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                viewport={{once: true}}
                transition={{ duration: 1, ease: 'easeInOut'}}
                className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 mt-10">
                    <ServiceCard icon={WebsiteIcon} title={webDevTitle} content={webDevContent} className="bg-gradient-to-l"/>
                    <ServiceCard icon={AppIcon} title={mobAppTitle} content={mobAppContent} className="bg-gradient-to-l"/>
                    <ServiceCard icon={SeoIcon} title={seoTitle} content={seoContent} className="bg-gradient-to-r"/>
                    <ServiceCard icon={GraphicIcon} title={graphicTitle} content={graphicContent} className="bg-gradient-to-r"/>
                </motion.div>
            </div>
        </section>
    )
}

export default ServiceSection;