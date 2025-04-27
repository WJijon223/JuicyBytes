//importing methods from utils
import { fruits, getFullFruitNumber } from "../utils";

export default function SideBar(props) {
  const { selectedFruit, setSelectedFruit } = props;

  return (
    <div className="flex flex-col gap-2 p-3">
      <h1 className="text-5xl font-bold text-sky-600">🌴Juicy Bytes</h1>
      <input
        type="text"
        className="p-2 border-2"
        placeholder="Type Name or Number"
      />
      {fruits.map((fruit, fruitIndex) => {
        return (
          <button
            className={
              "flex border-2 rounded hover:bg-orange-300 hover:text-white transition-colors duration-400 " +
              (selectedFruit === fruitIndex ? "bg-orange-300 text-white" : "")
            }
            onClick={() => setSelectedFruit(fruitIndex)}
            key={fruitIndex}
          >
            {getFullFruitNumber(fruit)} {fruit}
          </button>
        );
      })}
    </div>
  );
}
