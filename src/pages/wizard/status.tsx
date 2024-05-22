import {Bot} from "../../data/types";

interface StatusProps {
  bot: Bot;
  setBot: React.Dispatch<React.SetStateAction<Bot>>;
}

const Status: React.FC<StatusProps> = ({ bot, setBot }) => {
  
  function statusHandle(status: string) {
    setBot({ ...bot, status });
  }

  return (
    <div className="details-container">
      <span className="details-title">Deploy your bot</span>
      <div className="status-buttons">
        <button
          className={bot.status === "Private" ? "active" : ""}
          onClick={() => statusHandle("Private")}
        >
          Private
        </button>
        <button
          className={bot.status === "Public" ? "active" : ""}
          onClick={() => statusHandle("Public")}
        >
          Public
        </button>
        <button
          className={bot.status === "Draft" ? "active" : ""}
          onClick={() => statusHandle("Draft")}
        >
          Draft
        </button>
      </div>
    </div>
  );
}

export default Status;