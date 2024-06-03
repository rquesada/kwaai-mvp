import React from 'react';
import './primaryButton.css';

interface PrimaryButtonProps {
  text: string;
  onClick: () => void;
  enabled: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text, onClick, enabled }) => {
  return (
    <button
      className={`primary-button ${enabled ? 'enabled' : 'disabled'}`}
      onClick={onClick}
      disabled={!enabled}
    >
      {text}
    </button>
  );
}

export default PrimaryButton;
