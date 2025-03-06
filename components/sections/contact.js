import Button from "../utilities/button";

const Contact = () => {

    return (
        <div className="mt-10 py-10 lg:py-16 px-6 md:px-8 lg:px-8 mx-3 lg:mx-6 bg-blue-extraLight relative z-0 rounded-xl flex flex-col gap-6 lg:items-center">
            <div className="inset-0 bg-[url('/grains.jpeg')] bg-cover bg-center opacity-10 absolute -z-20 rounded-xl"></div>
            <h3 className="text-3xl lg:text-5xl text-black-strong">Your next big move? Working with us.</h3>
            <p className="text-black-light lg:text-lg">Your vision deserves the right team to bring it to life. Contact us today and let's make it happen.</p>

            <div className='mt-10'>
                <Button content={"Contact Us"} textColor={'#f0f0f0'} bgColor={'#242424'}/>
            </div>
        </div>
    )
}

export default Contact;