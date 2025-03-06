'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import HeadingTags from "../utilities/headingTags";
import ServiceCard from "../utilities/serviceCard";
import { AppIcon, DesktopIcon, GraphicIcon, SeoIcon, WebsiteIcon } from '../utilities/icons.js';
import { mobAppContent, mobAppTitle, webDevContent, webDevTitle, seoTitle, seoContent, graphicTitle, graphicContent } from "@/contents";

const ServiceSection = () => {
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
        <section className="mt-20 lg:mt-32 px-2 md:px-4 lg:px-8">
            <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={controls}
            className="flex flex-col w-full items-center mb-20">
                <HeadingTags icon={DesktopIcon} content={"Our Digital Playground"}/>
                <hr className="border my-2 w-full"/>
                <h2 className="text-black-strong text-[25px] font-bold lg:text-[55px] text-center">What We Do</h2>
            </motion.div>

            <div ref={ref} className="mt-6">
                <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={controls}
                className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 mt-10">
                    <ServiceCard icon={WebsiteIcon} title={webDevTitle} content={webDevContent}/>
                    <ServiceCard icon={AppIcon} title={mobAppTitle} content={mobAppContent}/>
                    <ServiceCard icon={SeoIcon} title={seoTitle} content={seoContent}/>
                    <ServiceCard icon={GraphicIcon} title={graphicTitle} content={graphicContent}/>
                </motion.div>
            </div>
        </section>
    )
}

export default ServiceSection;