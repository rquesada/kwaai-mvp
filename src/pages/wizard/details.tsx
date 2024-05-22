import React from "react";
import { Bot } from "../../data/types";

interface DetailsProps {
  bot: Bot;
  setBot: React.Dispatch<React.SetStateAction<Bot>>;
}

const Details: React.FC<DetailsProps> = ({ bot, setBot }) => {
  const handleNameChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBot({ ...bot, name: e.target.value });
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setBot({ ...bot, description: e.target.value });
  };
  return (
    <div className="details-container">
      <span className="details-title">Robot Information</span>
      <span className="details-subtitle">Name :</span>
      <textarea
        rows={4}
        className="details-name"
        value={bot.name}
        onChange={handleNameChange}
      />
      <span className="details-subtitle">Description :</span>
      <textarea
        rows={10}
        className="details-name"
        value={bot.description}
        onChange={handleDescriptionChange}
      />
    </div>
  );
};

export default Details;
