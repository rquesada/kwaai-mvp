import "./botItem.css";
import { Bot } from "../../../data/types";

interface BotItemProps {
  botItemData: Bot;
}

const BotItem: React.FC<BotItemProps> = ({ botItemData }) => {
  return (
    <div className="bot-card">
      <div className="bot-card-header">
        <img
          src={botItemData.img}
          alt="bot"
        />
        <h2>{botItemData.name}</h2>
      </div>
      <div className="bot-card-body">
        <p>{botItemData.description}</p>
      </div>
      <div className="bot-buttons-area">
        <button className="bot-button">Edit</button>
        <button className="bot-button">Delete</button>
      </div>
    </div>
  );
}

export default BotItem;