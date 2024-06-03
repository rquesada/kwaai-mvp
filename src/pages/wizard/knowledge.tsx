import React from "react";
import { useDropzone } from "react-dropzone";
import downloadIcon from "../../assets/download-icon.png"
import { Bot } from "../../data/types";

interface KnowledgeProps {
  bot: Bot;
  setBot: React.Dispatch<React.SetStateAction<Bot>>;
}

const Knowledge: React.FC<KnowledgeProps> = ({ bot, setBot }) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setBot((prevBot) => ({
        ...prevBot,
        files: [...prevBot.files, ...acceptedFiles]
      }));
    }
  });

  const fileList = bot.files.map((file, index) => (
    <li key={index}>
      {file.name} - {file.size} bytes
    </li>
  ));

  return (
    <div className="details-container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <img src={downloadIcon} alt="Download Icon" className="download-icon" />
        <p>Drag & Drop files here</p>
        <div className="browse-text">
          <span>or</span>
          <span className="browse-link">Browse</span>
        </div>
      </div>
      <aside>
        <ul>{fileList}</ul>
      </aside>
    </div>
  );
}

export default Knowledge;