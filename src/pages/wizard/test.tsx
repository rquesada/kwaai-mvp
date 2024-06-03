import React from "react";
import { Bot } from "../../data/types";

interface TestProps {
    bot: Bot;
    setBot: React.Dispatch<React.SetStateAction<Bot>>;
  }

const Test: React.FC<TestProps> = ({bot, setBot}) => {
  return <div>Test</div>;
}
export default Test;