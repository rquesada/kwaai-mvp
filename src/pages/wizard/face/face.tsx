import React from "react";
import { useBots } from "../../../context/botsContext";
import "./face.css";
import OptionSelect from "../optionSelect/optionSelect";
import { Bot, Feature } from "../../../data/types";

interface FaceProps {
  bot: Bot;
  setBot: React.Dispatch<React.SetStateAction<Bot>>;
}

const Face: React.FC<FaceProps> = ({ bot, setBot }) => {
  const { faceList } = useBots();
  const [selectedFaceId, setSelectedFaceId] = React.useState<string | null>(
    bot.face?.id || null
  );
  const selectedFace = faceList.find((face) => face.id === selectedFaceId);

  const handleSelect = (face: Feature) => {
    setSelectedFaceId(face.id);
    setBot((prevBot) => ({ ...prevBot, face }));
  };

  return (
    <div className="face-container">
      <div className="face-left-container">
        {faceList.map((face) => (
          <OptionSelect
            key={face.id}
            feature={face}
            isSelected={face.id === selectedFaceId}
            onSelect={() => handleSelect(face)}
          />
        ))}
      </div>
      <div className="face-right-container">
        <div className="face-preview-container">
          {selectedFace && (
            <>
              <img
                src={selectedFace.imageURL}
                alt={selectedFace.name}
                className="selected-face-image"
              />
              <p className="selected-face-text">{selectedFace.name}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Face;
