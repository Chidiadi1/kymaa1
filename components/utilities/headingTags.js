const HeadingTags = ( {content} ) => {

    return (
        <div className=" flex items-center mb-6">
            <p className="tracking-widest font-montserrat text-xs lg:text-sm text-black-strong">
                {content}
            </p>
        </div>
    )
}

export default HeadingTags;