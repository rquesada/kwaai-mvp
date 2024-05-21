import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import BotsList from "./pages/botsList/botsList";
import Face from "./pages/wizard/face";
import Details from "./pages/wizard/details";
import Voice from "./pages/wizard/voice";
import Knowledge from "./pages/wizard/knowledge";
import Llm from "./pages/wizard/llm";
import Status from "./pages/wizard/status";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/List" element={<BotsList />} />
          <Route path="/Face" element={<Face />} />
          <Route path="/Details" element={<Details />} />
          <Route path="/Voice" element={<Voice />} />
          <Route path="/Knowledge" element={<Knowledge />} />
          <Route path="/Llm" element={<Llm />} />
          <Route path="/Status" element={<Status />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
