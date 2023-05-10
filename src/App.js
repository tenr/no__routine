import "./App.scss";
import { Routes, Route } from "react-router-dom";
import HomePage from "../src/pages/HomePage/HomePage";
import TopNav from "./components/TopNav/TopNav";
import UserProfile from "./pages/UserProfile/UserProfile";

function App() {
  return (
    <div className="App">
      <TopNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/:id" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
