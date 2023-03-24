import Particles from "react-tsparticles" 
import { useCallback } from "react";
import { loadFull } from "tsparticles"

const Particle = () => {
    const particlesInit = useCallback(async engine => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    // const particlesLoaded = useCallback(async container => {
    //     await console.log(container);
    // }, []);

    return (
        <Particles id="tsparticles" init={particlesInit} //loaded={particlesLoaded}
        options={{
            fpsLimit: 120,
            fullScreen: {
                zIndex: -1
            },
            interactivity: {
                events: {
                    onClick: {
                        enable: false,
                        mode: "push",
                    },
                    onHover: {
                        enable: false,
                        mode: "repulse",
                    },
                    resize: true,
                },
            },
            particles: {
                color: {
                    value: "#fff",
                },
                move: {
                    direction: "bottom",
                    enable: true,
                    outModes: {
                        default: "out",
                    },
                    random: true,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.4,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 4 },
                },
            },
            detectRetina: true,        
        }}/>
    )
}

export default Particle