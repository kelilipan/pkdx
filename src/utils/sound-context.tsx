import { createContext, useContext, useEffect, useState } from "react";
import { readSoundSettings, saveSoundSettings } from "./local-storage";

type SoundContextType = {
  isMuted: boolean;
  toggleMute: () => void;
  click: () => void;
};

const SoundContext = createContext<SoundContextType>({
  isMuted: false,
  click: () => {},
  toggleMute: () => {},
});

const SoundContextProvider: React.FC = ({ children }) => {
  const [isMuted, setIsMuted] = useState(false);

  const clickSound = () => {
    const audio = new Audio("/assets/pop.mp3");
    audio.volume = 0.1;
    audio.play().catch((err) => {
      console.error(err);
    });
  };

  const click = () => {
    if (!isMuted) {
      clickSound();
    }
  };

  const toggleMute = () => {
    isMuted && clickSound();
    setIsMuted(!isMuted);
    saveSoundSettings({ isMuted: !isMuted });
  };

  useEffect(() => {
    const localSettings = readSoundSettings();
    setIsMuted(localSettings.isMuted);
  }, []);

  return (
    <SoundContext.Provider value={{ isMuted, click, toggleMute }}>
      {children}
    </SoundContext.Provider>
  );
};

const useSound = () => useContext(SoundContext);

export { SoundContext, SoundContextProvider, useSound };
