import { useState, useEffect, useRef } from "react";
import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
// import { heroIcons } from "../constants";
// import { ScrollParallax } from "react-just-parallax";
import Generating from "./Generating";
// import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import { TypeAnimation } from "react-type-animation";
import typingSound from "../assets/audio/typing-sound.mp3";

const Hero = () => {
  const parallaxRef = useRef(null);
  const audioRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [animationCount, setAnimationCount] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false);
  const soundIntervalRef = useRef(null);

  // Animation timing constants
  const typingSpeed = 30; // Lower = faster typing
  const deletionSpeed = 50; // Lower = faster deleting
  const soundInterval = 80; // Milliseconds between sounds

  // Initialize audio
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 1.0; // Medium volume
    }
  }, []);

  // Play typing sound
  const playTypingSound = () => {
    if (audioEnabled && audioRef.current && userInteracted) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((e) => {
        console.log("Audio play prevented:", e);
        setAudioEnabled(false);
      });
    }
  };

  // Control sound playback during animation
  useEffect(() => {
    if (isAnimating && audioEnabled && userInteracted && animationCount < 2) {
      // Start sound interval
      soundIntervalRef.current = setInterval(playTypingSound, soundInterval);

      // Play first sound immediately
      playTypingSound();
    } else {
      clearInterval(soundIntervalRef.current);
    }

    return () => {
      clearInterval(soundIntervalRef.current);
    };
  }, [isAnimating, audioEnabled, userInteracted, animationCount]);

  // Enable audio on first user interaction
  useEffect(() => {
    const handleUserInteraction = () => {
      setUserInteracted(true);
      setAudioEnabled(true);

      // Attempt to play audio to unlock audio context
      if (audioRef.current) {
        audioRef.current
          .play()
          .catch((e) => console.log("Initial audio play failed:", e));
      }

      // Remove event listeners
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
    };

    // Add event listeners
    window.addEventListener("click", handleUserInteraction);
    window.addEventListener("keydown", handleUserInteraction);
    window.addEventListener("touchstart", handleUserInteraction);

    return () => {
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
    };
  }, []);

  // Handle animation completion
  const handleAnimationComplete = () => {
    setAnimationCount((prev) => prev + 1);
  };

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      {/* Hidden audio element */}
      <audio ref={audioRef} src={typingSound} preload="auto" />

      {/* Audio enable prompt */}
      {!userInteracted && (
        <div className="fixed bottom-4 right-4 z-50 bg-n-8/80 backdrop-blur p-3 rounded-lg text-n-1 text-sm">
          Click anywhere to enable typing sounds
        </div>
      )}

      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[80rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            {animationCount < 2 ? (
              <TypeAnimation
                sequence={[
                  () => setIsAnimating(true),
                  "The Battery Management System Using Digital Twin Framework",
                  () => {
                    setIsAnimating(false);
                    handleAnimationComplete();
                  },
                  1000,
                  () => setIsAnimating(true),
                  "The Battery Management System Using Digital Twin Technology",
                  () => {
                    setIsAnimating(false);
                    handleAnimationComplete();
                  },
                  1000,
                ]}
                wrapper="span"
                cursor={true}
                style={{ display: "inline-block" }}
                speed={typingSpeed}
                deletionSpeed={deletionSpeed}
              />
            ) : (
              <span>
                The Battery Management System Using Digital Twin Framework
              </span>
            )}
            <img
              src={curve}
              className="absolute top-full left-0 w-full xl:-mt-2"
              width={624}
              height={28}
              alt="Curve"
            />
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Unleash the power of BMS within Brainwave. Upgrade your productivity
            with Brainwave, the open Source BMS web app.
          </p>
          <Button
            href="https://batter-info.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            white
          >
            Get started
          </Button>
        </div>

        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />

                {/* <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" /> */}

                {/* <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Code generation"
                  />
                </ScrollParallax> */}
              </div>
            </div>

            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          <BackgroundCircles />
        </div>

        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
