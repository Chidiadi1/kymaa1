import clsx from "clsx";

const ServiceCard = ( {icon: Icon, title, content, className}  ) => {

    return (
        <div className={clsx("cursor-default p-4 md:p-10 rounded-xl flex flex-col md:flex-row gap-4 md:gap-8 text-black-strong m-auto hover:rotate-6 transition-transform duration-300 hover:border-4 hover:border-white-normal overflow-clip relative z-0", className)}>
            <div className="inset-0 bg-[url('/grainy.jpeg')] bg-cover bg-center opacity-10 absolute -z-20 rounded-xl"></div>
            <div>
                <Icon className="size-14 md:size-30 text-blue-strong"/>
            </div>
            <div className="flex flex-col gap-4">
                <h3 className="font-extrabold text-[18px] lg:text-[30px]">{title}</h3>
                <p className="text-md">{content}</p>
            </div>
        </div>
    )
}

export default ServiceCard;