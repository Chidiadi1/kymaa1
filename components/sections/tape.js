import { tapeContent } from "@/contents";

const TapeCarousel = () => {

    return (
        <div className="py-2 mt-24 lg:mt-40">
            <div className="flex overflow-x-clip [mask-image:linear-gradient(to_right, transparent, black_10%, black_90%, transparent)]">
                <div className="flex flex-none gap-10 pr-4 lg:gap-16 animate-tape-animation [animation-duration:80s]">
                    {[...new Array(2)].fill(0).map((_, index) => (
                        <div key={index} className="flex gap-6 lg:gap-8">
                            {tapeContent.map((word, idx) => (
                                <div key={idx} className="inline-flex gap-4">
                                    <h3 className="text-black-extraLight text-5xl lg:text-7xl">{word}</h3>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TapeCarousel; 