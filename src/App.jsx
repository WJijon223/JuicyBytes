import { useState } from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import FruitCard from "./components/FruitCard";
import "./App.css";

function App() {
  const [selectedFruit, setSelectedFruit] = useState(0);

  return (
    <>
      <Header />
      <div className="flex">
        <SideBar />
        <FruitCard />
      </div>
    </>
  );
}

export default App;
