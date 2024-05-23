import React from "react";
import NavBar from "../navBar/navbar";
import { useBots } from "../../context/BotsContext";
import BotItem from "./botItem/botItem";
import "./botsList.css";
import "./botItem/botItem.css";

export default function BotsList() {
  const { bots } = useBots();

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
