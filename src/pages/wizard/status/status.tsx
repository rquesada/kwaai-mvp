import { Bot } from "../../../data/types";
import "./status.css";

interface StatusProps {
  bot: Bot;
  setBot: React.Dispatch<React.SetStateAction<Bot>>;
}

const Status: React.FC<StatusProps> = ({ bot, setBot }) => {

  function statusHandle(status: string) {
    setBot({ ...bot, status });
  }

  return (
    <div className="status-container">
      <span className="status-title">Are you ready to share Advanced Math Agent?</span>
      <div className="status-radio-buttons">
        <div className={`status-radio-wrapper ${bot.status === "Private" ? "active" : ""}`}>
          <label>
            <input
              type="radio"
              name="status"
              value="Private"
              checked={bot.status === "Private"}
              onChange={() => statusHandle("Private")}
            />
            <span>Yes, deploy Private</span>
          </label>
        </div>
        <div className={`status-radio-wrapper ${bot.status === "Public" ? "active" : ""}`}>
          <label>
            <input
              type="radio"
              name="status"
              value="Public"
              checked={bot.status === "Public"}
              onChange={() => statusHandle("Public")}
            />
            <span>Yes, deploy Public</span>
          </label>
        </div>
        <div className={`status-radio-wrapper ${bot.status === "Draft" ? "active" : ""}`}>
          <label>
            <input
              type="radio"
              name="status"
              value="Draft"
              checked={bot.status === "Draft"}
              onChange={() => statusHandle("Draft")}
            />
            <span>No, save Draft</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Status;
