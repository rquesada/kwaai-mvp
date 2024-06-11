import React from "react";
import "./chatMessage.css"; // Import CSS for ChatMessage

interface ChatMessageProps {
  sender: "user" | "ai";
  text: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ sender, text }) => {
  return (
    <div className={`chat-message ${sender}`}>
      <div className="circle"></div>
      <div className="text">{text}</div>
    </div>
  );
};

export default ChatMessage;
