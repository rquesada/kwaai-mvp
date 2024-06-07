import React from "react";
import { Feature } from "../../../data/types";
import voiceIcon from "../../../assets/voice-icon.png";
import "./optionSelect.css";

interface OptionSelectProps {
  feature: Feature;
  isSelected: boolean;
  onSelect: () => void;
}

const OptionSelect: React.FC<OptionSelectProps> = ({ feature, isSelected, onSelect }) => {
  return (
    <div className="face-item" onClick={onSelect}>
      {feature.imageURL ? (
        <img src={feature.imageURL} alt={feature.name} className="feature-image" />
      ) : (
        <div className="placeholder">
          <img src={voiceIcon} alt="Voice Icon" className="voice-icon-option" />
        </div>
      )}
      <div className="radio-button-container">
        <input
          type="radio"
          id={feature.id}
          name="feature"
          value={feature.name}
          checked={isSelected}
          readOnly
        />
        <label htmlFor={feature.id}>{feature.name}</label>
      </div>
    </div>
  );
};

export default OptionSelect;
