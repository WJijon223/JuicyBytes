import { fruits, getFullFruitNumber } from "../utils";

export default function FruitCard(props) {
  const { selectedFruit } = props;

  return (
    <div className="flex flex-col object-center justify-center items-center gap-2 m-10 p-3 border-2 rounded-lg bg-orange-100">
      <div className="text-4xl">{fruits[selectedFruit]}</div>
      <div className="flex flex-row">
        <div>Image will go here</div>
        <div className="flex flex-col gap-2 p-3">
          <div className="text-lg">Family: </div>
          <div className="text-lg">Order: </div>
          <div className="text-lg">Genus: </div>
          <button className="mx-auto">Nutrition Facts</button>
        </div>
      </div>
    </div>
  );
}
