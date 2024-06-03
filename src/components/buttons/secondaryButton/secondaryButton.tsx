import React from 'react';
import './secondaryButton.css';

interface SecondaryButtonProps {
  text: string;
  onClick: () => void;
  enabled: boolean;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ text, onClick, enabled }) => {
  return (
    <button
      className={`secondary-button ${enabled ? 'enabled' : 'disabled'}`}
      onClick={onClick}
      disabled={!enabled}
    >
      {text}
    </button>
  );
}

export default SecondaryButton;
