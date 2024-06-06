import React, { useState } from "react";
import { Bot } from "../../../data/types";
import botIcon from "../../../assets/bot-icon.png";
import shareIcon from "../../../assets/share-icon.png";
import { useBots } from "../../../context/botsContext";
import "./botItem.css";
import DeleteConfirmationModal from "../../../components/deleteConfirmationModal";
import PrimaryButton from "../../../components/buttons/primaryButton/primaryButton";
import SecondaryButton from "../../../components/buttons/secondaryButton/secondaryButton";

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
        <img src={botItemData.img ? botItemData.img : botIcon} alt="bot" />
      </div>
      <div className="bot-card-body">
        <div className="bot-card-header-with-button">
          <h2 className="bot-card-name">{botItemData.name}</h2>
          <button className="share-button">
            <img src={shareIcon} alt="Share" />
          </button>
        </div>
        <p className="bot-card-description">{botItemData.description}</p>
      </div>
      <div className="bot-buttons-area">
        <SecondaryButton text="Delete" onClick={() => setIsModalOpen(true)} enabled={true} />
        <PrimaryButton text="Edit" onClick={() => {}} enabled={true} />
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
