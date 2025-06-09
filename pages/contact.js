import Stats from "@/components/sections/stats";
import ContactS from "@/components/sections/contact";

export default function Contact() {
    return (
      <section className="font-montserrat text-black-strong">
        <div className="px-2 md:px-4 lg:px-8 mt-24 text-center">
          <h3 className="text-3xl lg:text-6xl font-semibold">Talk to the team that gets it <span className="font-italiana italic">done</span></h3>
          <p className="text-sm lg:text-lg">Have a Project in Mind? Let's Build It Together</p>
        </div>
        <Stats />
        <ContactS />
      </section>
    )
  }