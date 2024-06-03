import React from "react";
import { LlmOption } from "../../../data/types";
import "./llmItem.css";

interface LlmItemProps {
  llmItemData: LlmOption;
  isSelected: boolean;
  onSelect: (option: LlmOption) => void;
}

const LlmItem: React.FC<LlmItemProps> = ({ llmItemData, isSelected, onSelect }) => {
  return (
    <div 
      className="llm-card"
      onClick={() => onSelect(llmItemData)}
    >
      <div className="llm-card-top">
        <img
          src={llmItemData.image}
          alt="llm-logo"
        />
      </div>
      <div className="llm-card-bottom">
        <label className="llm-card-radio">
          <input
            type="radio"
            name="llm-option"
            value={llmItemData.name}
            checked={isSelected}
            onChange={() => onSelect(llmItemData)}
          />
          <span className="llm-card-title">{llmItemData.name}</span>
        </label>
      </div>
    </div>
  );
}

export default LlmItem;
