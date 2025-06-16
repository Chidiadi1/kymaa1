import { companyProfileText } from '@/contents';


const CompanyProfile = () => {

  return (
    <section className="px-4 lg:px-8 font-montserrat text-black-strong">
        {companyProfileText.map((card, index) => (
            <div key={card.point} className="bg-gradient-to-t from-[#ffffff] to-white-strong mb-12 rounded-xl px-4 py-6 md:px-12 md:py-20 sticky top-16"
            style={{
              top: `calc(90px + ${index * 35}px`
            }}
            >
                <div className="flex flex-col gap-4 md:flex-row">
                    <h3 className="text-3xl lg:text-6xl font-semibold md:w-1/2">{card.point}</h3>
                    <p className="text-sm lg:text-lg md:w-1/2">{card.text}</p>
                </div>
            </div>
        ))}
    </section>
  );
};

export default CompanyProfile;