import NavBar from "../navBar/navbar";
import { useEffect, useState } from 'react';
import { Bot } from "../../data/types";
import data from "../../data/data.json";
import "./botsList.css";
import "./botItem/botItem.css";
import BotItem from "./botItem/botItem";

export default function BotsList() {
  const [bots, setBots] = useState<Bot[]>([]);

  useEffect(() => {
    setBots(data);
  }, []);
 
  return (
    <>
      <NavBar />
      <div className="container">        
        <div className="bots-title">
          <h1>Bots List</h1>
        </div>
        <div className="bots-list-grid">
        {bots.map((bot) => (
            <BotItem key={bot.id} botItemData={bot} />
          ))}
        </div>
      </div>
    </>
  );
}
