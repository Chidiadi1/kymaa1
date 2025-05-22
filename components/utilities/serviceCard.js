import clsx from "clsx";

const ServiceCard = ( {icon: Icon, title, content, className}  ) => {

    return (
        <div className={clsx("cursor-default p-4 md:p-10 rounded-3xl flex flex-col md:flex-row gap-4 md:gap-8 text-black-strong m-auto hover:rotate-6 transition-transform duration-300 hover:border-4 hover:border-white-normal from-white-normal to-blue-strong/5", className)}>
            {/* <div className="inset-0 bg-[url('/grainy.jpeg')] bg-cover bg-center opacity-10 absolute -z-20 rounded-xl"></div> */}
            <div>
                <Icon className="size-14 md:size-30 text-blue-strong"/>
            </div>
            <div className="flex font-montserrat flex-col gap-4">
                <h3 className="font-semibold text-lg lg:text-3xl">{title}</h3>
                <p className="text-sm">{content}</p>
            </div>
        </div>
    )
}

export default ServiceCard;