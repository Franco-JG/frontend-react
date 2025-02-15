import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Feeds from "./pages/Feeds";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/feeds" element={<Feeds />} />
    </Routes>
  );
}

export default App;