import Link from "next/link";
import Image from "next/image";
import { footerSocialIcons } from '@/contents';
import { footerContacts } from '@/contents';
import { navLinks } from "@/contents";


const Footer = () => {

    return(

        <footer className= "mt-24 px-2 md:px-4 lg:px-8">
            <div className="flex flex-col gap-16 lg:gap-24 lg:flex-row lg:justify-center items-center mt-6">
                <div className="lg:w-1/3 flex flex-col gap-4">
                    <Link href="/">
                        <Image src="/logo1.png" alt="logo" width={150} height={150} className="object-contain"/>
                    </Link>

                    <p className="text-black-strong">We prioritize building exceptional digital solutions that set your brand apart.</p>

                    <div className="mt-2 flex gap-5 md:gap-5">
                        {footerSocialIcons.map((icon) => (
                            <Link href={icon.href} key={icon.label} className="text-lg text-blue-strong">
                                {icon.icon}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="lg:w-1/3">
                    <h3 className="text-black-strong lg:text-lg font-extrabold">Let's Connect</h3>
                    <div className="mt-4 flex flex-col gap-3 lg:gap-6">
                        {footerContacts.map((item) => (
                            <Link href={item.href} key={item.label} className="flex items-center gap-2">
                                <span className="text-blue-strong">{item.icon}</span>
                                <span className="text-black-strong">{item.label}</span>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="lg:w-1/3">
                    <h3 className="text-black-strong lg:text-lg font-extrabold">Quick Links</h3>
                    <div className="mt-4 flex flex-col gap-3 lg:gap-6">
                        {navLinks.map((link) => (
                            <Link href={link.href} key={link.label} className="">
                                <p>{link.label}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            
            <div className="mt-16 py-6">
                    <p className="tracking-wide">&copy; 2025 Kymaa. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;