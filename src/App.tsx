import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import BotsList from "./pages/botsList/botsList";
import Wizard from "./pages/wizard/wizard";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/List" element={<BotsList />} />
          <Route path="/Wizard" element={<Wizard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
