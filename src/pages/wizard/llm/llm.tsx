import React from "react";
import { LlmOption } from "../../../data/types";
import llmOptionsData from "../../../data/llm.json";
import LlmItem from "./llmItem";

interface LlmProps {
  onSelect: (option: LlmOption) => void;
  selectedLlmOption: LlmOption;
}

const Llm: React.FC<LlmProps> = ({ onSelect, selectedLlmOption }) => {
  return (
    <div className="details-container">
      <span className="details-title">LLM</span>
      <div className="llm-list-grid">
        {llmOptionsData.map((llm) => (
          <LlmItem
            key={llm.id}
            llmItemData={llm}
            isSelected={selectedLlmOption.id === llm.id}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
}

export default Llm;
