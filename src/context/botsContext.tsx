import React, { createContext, useState, useContext } from "react";
import { Bot } from "../data/types";

interface BotsProviderProps {
  children: React.ReactNode;
}

interface BotsContextProps {
  bots: Bot[];
  addBot: (bot: Bot) => void;
  removeBot: (id: string) => void;
}

const BotsContext = createContext<BotsContextProps | undefined>(undefined);

export const BotsProvider: React.FC<BotsProviderProps> = ({ children }) => {
  const [bots, setBots] = useState<Bot[]>([]);


  const addBot = (bot: Bot) => {
    setBots((prevBots) => [...prevBots, bot]);
  };

  const removeBot = (id: string) => {
    setBots((prevBots) => prevBots.filter(bot => bot.id !== id));
  };

  return (
    <BotsContext.Provider value={{ bots, addBot, removeBot }}>
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
