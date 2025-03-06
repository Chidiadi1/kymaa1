const ServiceCard = ( {icon: Icon, title, content}  ) => {

    return (
        <div className="p-4 md:p-10 border-2 rounded-xl  bg-white-strong/60 backdrop-blur flex flex-col md:flex-row gap-4 md:gap-8 text-black-strong m-auto">
            <div className="relative">
                <Icon className="size-20 md:size-30 text-blue-strong"/>
                <div className="absolute top-0 -z-10 size-12 md:p-6 bg-blue-extraLight rounded-full"></div>
            </div>
            <div className="flex flex-col gap-4">
                <h3 className="font-extrabold text-[18px] lg:text-[30px]">{title}</h3>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default ServiceCard;