import BotItem from "../botItem/botItem";
import BotListTitle from "../botListTitle/botListTitle";
import EmptyMessage from "../../../components/emptyMessage/emptyMessage";
import { Bot } from "../../../data/types";
import "./botsGrid.css";

interface BotsGridProps {
    bots: Bot[];
    handleAddNewAgent: () => void;
}  

const BotsGrid: React.FC<BotsGridProps> = ({ bots, handleAddNewAgent }) => {
  return (
    <>
      <BotListTitle onAddNewAgent={handleAddNewAgent} />
      {bots.length === 0 ? (
        <EmptyMessage />
      ) : (
        <div className="botsListGrid">
          {bots.map((bot) => (
            <BotItem key={bot.id} botItemData={bot} />
          ))}
        </div>
      )}
    </>
  );
};

export default BotsGrid;
