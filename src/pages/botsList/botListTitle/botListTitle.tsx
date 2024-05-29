import { IoAddCircleOutline } from "react-icons/io5";
import "./botListTitle.css";

interface BotListTitleProps {
    onAddNewAgent: () => void; // Specify that onAddNewAgent is a function that returns void
}

const BotListTitle: React.FC<BotListTitleProps> = ({ onAddNewAgent }) => {
    return (
        <div className="titleContainer">
          <span className="title">Agent Catalogue</span>
          <button className="addButton" onClick={onAddNewAgent}>
            <IoAddCircleOutline className="addButtonIcon" />
            Add New Agent
          </button>
        </div>
      );
}

export default BotListTitle;