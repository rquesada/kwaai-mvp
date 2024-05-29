import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import BotsList from "./pages/botsList/botsList";
import Wizard from "./pages/wizard/wizard";
import { BotsProvider } from "./context/botsContext";
import "./App.css";

function App() {
  return (
    <BotsProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/List" element={<BotsList />} />
          <Route path="/Wizard" element={<Wizard />} />
        </Routes>
      </Router>
    </BotsProvider>
  );
}

export default App;
