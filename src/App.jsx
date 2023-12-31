import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import { loadHyperspacePreset } from "tsparticles-preset-hyperspace";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import Countdown from "react-countdown";

function App() {
  const [newYearMessage, setNewYearMessage] = useState([
    "Goodbye 2023",
    "See You Again 🙂",
  ]);

  const [particlePreset, setParticlePreset] = useState("hyperspace");
  const [particlesKey, setParticlesKey] = useState(0); // Key to force remount

  const initParticles = async (engine) => {
    if (particlePreset === "hyperspace") {
      await loadHyperspacePreset(engine);
    } else if (particlePreset === "fireworks") {
      await loadFireworksPreset(engine);
    }
  };

  function formatTime({ days, hours, minutes, seconds }) {
    return (
      <div className="grid sm:grid-cols-4 grid-cols-2 gap-2 text-center text-xl">
        <div className="flex flex-col p-2 m-1 bg-color-medium rounded-lg">
          <span className="text-xl font-bold">{days}</span>
          <span>Days</span>
        </div>
        <div className="flex flex-col p-2 m-1 bg-color-medium rounded-lg">
          <span className="text-xl font-bold">{hours}</span>
          <span>Hour</span>
        </div>
        <div className="flex flex-col p-2 m-1 bg-color-medium rounded-lg">
          <span className="text-xl font-bold">{minutes}</span>
          <span>Minutes</span>
        </div>
        <div className="flex flex-col p-2 m-1 bg-color-medium rounded-lg">
          <span className="text-xl font-bold">{seconds}</span>
          <span>Seconds</span>
        </div>
      </div>
    );
  }
  
  
  function timeLeft() {
    const newYearDate = new Date("January 1, 2024 00:00:00").getTime();
    const nowDate = new Date().getTime();
    const remainingTime = newYearDate - nowDate;
    return remainingTime;
  }

  const onCountdownComplete = () => {
    setNewYearMessage([
      "Selamat Tahun Baru 2024",
      "Happy New Year, My Friends 😊🤝",
      "Semoga di Tahun 2024 ini", "Kita Semua Sehat Selau dan Panjang Umur ya.."
    ]);
    setParticlePreset("fireworks"); // Switch to fireworks preset
    setParticlesKey((prevKey) => prevKey + 1); // Remount the Particles component
  };

  return (
    <>
      <Particles
        key={particlesKey}
        init={initParticles}
        options={{ preset: particlePreset }}
      />
      <div className="flex flex-col justify-center items-center min-h-screen gap-4">
        <span className="text-color-primary text-4xl font-bold px-5 z-50 text-center">
          <Typewriter
            words={newYearMessage}
            loop={false}
            cursorStyle={"👋"}
            cursor
          />
        </span>
        <div className="z-50 text-color-primary font-bold text-2xl">
          <Countdown
            date={Date.now() + timeLeft()}
            renderer={formatTime}
            onComplete={onCountdownComplete}
          />
        </div>
      </div>
    </>
  );
}

export default App;
