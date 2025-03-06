import Image from "next/image";

const Section1 = () => {

    return (
        <section className="px-2 pt-5 bg-blue-strong/10">
            <div className="flex flex-col items-center py-4 lg:py-8">
                <h2 className="heading">Featured <span className="heading_italic">Projects</span></h2>
            </div>
            <div className="grid grid-cols-1 gap-6  md:grid-cols-2 w-full">
                <div className="w-full">
                    <Image src="/website snapshot3.png" width={150} height={200} alt="website snapshot" className="object-contain size-full md:col-span-1"/>
                </div>
                <div className=" grid grid-rows-2 gap-4">
                    <div className="w-full">
                        <Image src="/website snapshot1.png" width={150} height={200} alt="website snapshot" className="object-contain size-full"/>
                    </div>
                    <div className="w-full">
                        <Image src="/website snapshot2.png" width={150} height={200} alt="website snapshot" className="object-contain size-full"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section1;