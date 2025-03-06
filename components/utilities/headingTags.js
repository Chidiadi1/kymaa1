
const HeadingTags = ( {icon: Icon, content} ) => {

    return (
        <div className=" flex items-center">
            <p className="flex items-center gap-2 px-3 py-2 text-[10px] lg:text-sm text-white-strong bg-blue-extraLight rounded-2xl">
                <span className="text-[20px] lg:text-[24px]"><Icon /></span>
                {content}
            </p>
        </div>
    )
}

export default HeadingTags;