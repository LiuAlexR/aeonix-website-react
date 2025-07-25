import { motion, AnimatePresence } from "motion/react";
import logo from "../../assets/logos/aeonix.png";


import DroneVideo from "../../assets/media/homepage/the-video.mp4";
import "./Centerpiece.css";
import { useEffect, useState } from "react";
export default function Centerpiece() {
    const phrases = [
        "Powering the Future<br />of Autonomous Flight", //Change to drone-fighting-fire / wind turbine (maybe generate new one) / remove landing sticks
        "Energy Independence<br />Engineered in the U.S.",
        "Redefining Lithium Batteries",
        "Built to Fly<br />Trusted to Perform",
        "Energy<br />That Goes Further",
    ];


    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);


    useEffect(() => {

        const intervalId = setInterval(() => {
            setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, 4000);


        return () => clearInterval(intervalId);
    }, [currentPhraseIndex]);
      const textVariants = {
    hidden: { opacity: 0, y: 10 }, // Initial state: hidden and slightly above
    visible: { opacity: 1, y: 0 }, // Visible state: fully opaque at original position
    exit: { opacity: 0, y: -10 } // Exit state: fading out and moving slightly below
  };
    return (
        <div id="centerpiece">
            <video muted loop autoPlay id="background_video"><source src={DroneVideo} type="video/mp4" /></video>
            {/* <img src={DroneImage} id="background_video"></img> */}
            <div id="video_overlay"></div>
            <div id="center_text">
                <AnimatePresence mode='wait'>
                    <motion.h1 key={currentPhraseIndex} variants={textVariants} initial="hidden" animate="visible" exit="exit" transition={{ duration: 0.5, ease: "easeInOut"}} dangerouslySetInnerHTML={{__html: phrases[currentPhraseIndex]}}>
                        
                    </motion.h1>
                </AnimatePresence>
                {/* <h1>
                    Powering<br />the Future
                </h1> */}
            </div>
            <div className="video_spacer"></div>
            <img id="centered_logo" src={logo} />
        </div>
    )
}