import React from "react";
import { useDropzone } from "react-dropzone";
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
      <span className="details-title">Upload Knowdledge</span>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside>
        <h4>Files</h4>
        <ul>{fileList}</ul>
      </aside>
    </div>
  );
}

export default Knowledge;