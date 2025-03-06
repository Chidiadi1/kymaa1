
const HeroSectionOrbit = ({children, size, rotation, orbitDuration}) => {

    return (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-30">
            <div className="animate-spin" style={{
                animationDuration: orbitDuration
            }}>
                <div style={{
                    transform: `rotate(${rotation}deg)`,
                    height: `${size}px`,
                    width: `${size}px`
                }}>
                    <div className="inline-flex animate-spin [animation-duration:5s]" style={{
                        transform: `rotate(${rotation * -1}deg)`
                    }}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default HeroSectionOrbit;