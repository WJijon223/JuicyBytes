//importing methods from utils
import { fruits, getFullFruitNumber } from "../utils";
import { useState } from "react";

export default function SideBar(props) {
  const { selectedFruit, setSelectedFruit } = props;
  const [searchValue, setSearchValue] = useState("");

  const filteredFruits = fruits.filter(
    (fruit) =>
      fruit.toLowerCase().includes(searchValue.toLowerCase()) ||
      getFullFruitNumber(fruit).includes(searchValue)
  );

  return (
    <div className="flex flex-col gap-2 p-3">
      <h1 className="text-4xl font-bold text-sky-600">🌴Juicy Bytes</h1>
      <input
        type="text"
        className="p-2 border-2"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Type Name or Number"
      />
      {filteredFruits.map((fruit, fruitIndex) => {
        return (
          <button
            className={
              "cursor-pointer flex border-2 rounded hover:bg-orange-300 hover:text-white transition-colors duration-400 " +
              (selectedFruit === fruits.indexOf(fruit)
                ? "bg-orange-300 text-white"
                : "")
            }
            onClick={() => setSelectedFruit(fruits.indexOf(fruit))}
            key={fruitIndex}
          >
            {getFullFruitNumber(fruit)}{" "}
            {fruit.replace(/([a-z])([A-Z])/g, "$1 $2")}
          </button>
        );
      })}
    </div>
  );
}
