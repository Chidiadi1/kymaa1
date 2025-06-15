import { companyProfile } from '@/contents';
import { motion } from 'framer-motion';
/* import TestimonialCard from "../utilities/testimonialCard";
import HeadingTags from "../utilities/headingTags"; */


const CompanyProfile = () => {

  return (
    <section className="py-20 lg:py-40 px-4 lg:px-8 font-montserrat text-black-strong">
        {companyProfile.map((card) => {
            <div key={card.point}>
                <div>
                    <h3>{card.point}</h3>
                    <p>{card.text}</p>
                </div>
            </div>
        })}
    </section>
  );
};

export default CompanyProfile;