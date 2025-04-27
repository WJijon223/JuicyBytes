//importing methods from utils
import { fruits, getFullFruitNumber } from "../utils";

export default function SideBar() {
  return (
    <div className="flex flex-col">
      <h1 className="text-4xl font-bold text-gray-700">Juicy Bytes</h1>
      <input type="text" placeholder="Type here" />
      {fruits.map((fruit, fruitIndex) => {
        return (
          <button className="flex" key={fruitIndex}>
            {getFullFruitNumber(fruit)} {fruit}
          </button>
        );
      })}
    </div>
  );
}
