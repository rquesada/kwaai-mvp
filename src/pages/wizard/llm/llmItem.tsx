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
      className={`llm-card ${isSelected ? "selected" : ""}`}
      onClick={() => onSelect(llmItemData)}
    >
      <img
        src={llmItemData.image}
        alt="llm-logo"
      />
      <span className="llm-card-title">{llmItemData.name}</span>
    </div>
  );
}

export default LlmItem;
