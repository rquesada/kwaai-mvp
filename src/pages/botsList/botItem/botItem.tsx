import React, { useState } from "react";
import { Bot } from "../../../data/types";
import botIcon from "../../../assets/bot-icon.png";
import { useBots } from "../../../context/botsContext";
import "./botItem.css";
import DeleteConfirmationModal from "../../../components/deleteConfirmationModal";

interface BotItemProps {
  botItemData: Bot;
}

const BotItem: React.FC<BotItemProps> = ({ botItemData }) => {
  const { removeBot } = useBots();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    removeBot(botItemData.id);
    setIsModalOpen(false);
  };

  return (
    <div className="bot-card">
      <div className="bot-card-header">
        <img
          src={botItemData.img ? botItemData.img : botIcon}
          alt="bot"
        />
        <h2>{botItemData.name}</h2>
      </div>
      <div className="bot-card-body">
        <p>{botItemData.description}</p>
      </div>
      <div className="bot-buttons-area">
        <button className="bot-button">Edit</button>
        <button className="bot-button" onClick={() => setIsModalOpen(true)}>Delete</button>
      </div>
      <DeleteConfirmationModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
}

export default BotItem;