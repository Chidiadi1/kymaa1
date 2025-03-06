const Button = ( {content, textColor, bgColor} ) => {

    return (
        <button className=" flex items-center focus:outline-0">
            <p className="flex items-center px-5 py-4 text-md lg:text-xl border border-black-light rounded-3xl" style={{
                        color: `${textColor}`, backgroundColor: `${bgColor}`
                    }}>
                {content}
            </p>
        </button>
    )
}

export default Button;