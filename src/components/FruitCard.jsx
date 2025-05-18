import { useEffect, useState } from "react";
import { fruits, getFullFruitNumber } from "../utils";

export default function FruitCard(props) {
  const { selectedFruit = 0 } = props;
  const [loading, setLoading] = useState(false);
  const [fruitData, setFruitData] = useState(null);

  useEffect(() => {
    // check if loading or localStorage is not available
    if (loading || !localStorage) {
      return;
    }

    // Define the cache
    let cache = {};
    if (localStorage.getItem("juicybytes")) {
      cache = JSON.parse(localStorage.getItem("juicybytes"));
    }

    // Check if the data is already in the cache
    if (selectedFruit in cache) {
      setFruitData(cache[selectedFruit]);
      return;
    }

    async function fetchFruitData() {
      try {
        setLoading(true);
        const noSpaces = fruits[selectedFruit]
          .replace(/\s+/g, "")
          .toLowerCase();
        const url =
          "/api/fruit/" +
          (fruits[selectedFruit] === "GreenApple" ? "72" : noSpaces); // Use the proxy URL

        fetch(url)
          .then((res) => res.json())
          .then((fruitData) => {
            setFruitData(fruitData);
            cache[selectedFruit] = fruitData;
            localStorage.setItem("juicybytes", JSON.stringify(cache)); // Save updated cache
          });
      } catch (error) {
        console.error("Error fetching fruit data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchFruitData();
  }, [selectedFruit]);

  return (
    <div className="flex flex-col object-center justify-center items-center gap-2 m-10 p-3 border-2 rounded-lg bg-orange-100">
      <div className="text-4xl">{fruits[selectedFruit]}</div>
      <div className="flex flex-row">
        <div>
          <img
            src={"/fruit/" + getFullFruitNumber(fruits[selectedFruit]) + ".png"}
            alt="default-img"
            className="w-64 h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col gap-2 p-3">
          <div className="text-lg">Family: {fruitData?.family}</div>
          <div className="text-lg">Order: {fruitData?.order}</div>
          <div className="text-lg">Genus: {fruitData?.genus}</div>
          <button className="mx-auto border-2 rounded p-1 hover:bg-amber-50 transition-colors duration-300 cursor-pointer">
            Nutrition Facts
          </button>
        </div>
      </div>
    </div>
  );
}
