import "./App.scss";
import { Routes, Route } from "react-router-dom";
import HomePage from "../src/pages/HomePage/HomePage";
import TopNav from "./components/TopNav/TopNav";

function App() {
  return (
    <div className="App">
      <TopNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
