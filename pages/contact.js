import Stats from "@/components/sections/stats";
import ContactS from "@/components/sections/contact";
import ContactForm from "@/components/utilities/contactForm";

export default function Contact() {
    return (
      <section className="font-montserrat text-black-strong">
        <div className="px-6 lg:px-8 mt-28 text-left">
          <h3 className="text-3xl lg:text-6xl font-semibold">Talk to the team that gets it <span className="font-italiana italic">done</span></h3>
          <p className="text-sm lg:text-lg mt-2">Have a Project in Mind? Let's Build It Together</p>
        </div>
        <div className="mb-28">
          <ContactForm />
        </div>
        <Stats />
        <ContactS />
      </section>
    )
  }