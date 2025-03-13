import { motion } from 'framer-motion';
import HeadingTags from "../utilities/headingTags";
import ServiceCard from "../utilities/serviceCard";
import { AppIcon, DesktopIcon, GraphicIcon, SeoIcon, WebsiteIcon } from '../utilities/icons.js';
import { mobAppContent, mobAppTitle, webDevContent, webDevTitle, seoTitle, seoContent, graphicTitle, graphicContent } from "@/contents";

const ServiceSection = () => {

    return (
        <section className="mt-24 lg:mt-40 px-2 md:px-4 lg:px-8 overflow-clip">
            <motion.div
            initial={{y: 100, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            viewport={{once: true}}
            transition={{ duration: 1, ease: 'easeInOut'}}
            className="flex flex-col w-full items-center mb-20">
                <HeadingTags icon={DesktopIcon} content={"Our Digital Playground"}/>
                <hr className="border my-2 w-full"/>
                <h2 className="text-black-strong text-[25px] font-bold lg:text-[55px] text-center">What We Do</h2>
            </motion.div>

            <div className="mt-6">
                <motion.div
                initial={{x: 100, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                viewport={{once: true}}
                transition={{ duration: 1, ease: 'easeInOut'}}
                className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 mt-10">
                    <ServiceCard icon={WebsiteIcon} title={webDevTitle} content={webDevContent} className="bg-[#ede0ea]"/>
                    <ServiceCard icon={AppIcon} title={mobAppTitle} content={mobAppContent} className="bg-[#dcddf6]"/>
                    <ServiceCard icon={SeoIcon} title={seoTitle} content={seoContent} className="bg-[#e2e5ed]"/>
                    <ServiceCard icon={GraphicIcon} title={graphicTitle} content={graphicContent} className="bg-[#c7c5cb]"/>
                </motion.div>
            </div>
        </section>
    )
}

export default ServiceSection;