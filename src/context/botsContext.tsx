import React, { createContext, useState, useContext, useEffect } from "react";
import { Bot, Feature } from "../data/types";

interface BotsProviderProps {
  children: React.ReactNode;
}

interface BotsContextProps {
  bots: Bot[];
  faceList: Feature[];
  voiceList: Feature[];
  addBot: (bot: Bot) => void;
  removeBot: (id: string) => void;
  loadFaces: () => void;
}

const BotsContext = createContext<BotsContextProps | undefined>(undefined);

export const BotsProvider: React.FC<BotsProviderProps> = ({ children }) => {
  const [bots, setBots] = useState<Bot[]>([]);
  const [faceList, setFaceList] = useState<Feature[]>([]);
  const [voiceList, setVoiceList] = useState<Feature[]>([]);

  const addBot = (bot: Bot) => {
    setBots((prevBots) => [...prevBots, bot]);
  };

  const removeBot = (id: string) => {
    setBots((prevBots) => prevBots.filter(bot => bot.id !== id));
  };

  const loadFaces = async () => {
    try {
      const response = await fetch("/faces.json");
      const data = await response.json();
      setFaceList(data);
    } catch (error) {
      console.error("Failed to load faces", error);
    }
  };

  const loadVoices = async () => {
    try {
      const response = await fetch("/voices.json");
      const data = await response.json();
      setVoiceList(data);
    } catch (error) {
      console.error("Failed to load voices", error);
    }
  };

  useEffect(() => {
    console.log("Loading faces...");
    loadFaces();
    loadVoices();
  }, []);

  return (
    <BotsContext.Provider value={{ bots, faceList,voiceList , addBot, removeBot, loadFaces }}>
      {children}
    </BotsContext.Provider>
  );
};

export const useBots = () => {
  const context = useContext(BotsContext);
  if (context === undefined) {
    throw new Error("useBots must be used within a BotsProvider");
  }
  return context;
};
