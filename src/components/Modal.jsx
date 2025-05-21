import ReactDom from "react-dom";
import { useRef } from "react";

export default function Modal(props) {
  const { handleCloseModal, nutritions, amount, setAmount } = props;
  const inputRef = useRef(100);

  function handleAmountChange() {
    const value = inputRef.current.value;
    if (value && value > 0) {
      setAmount(value);
      return;
    }
    alert("Please enter a valid number");
  }

  return ReactDom.createPortal(
    <div
      onClick={handleCloseModal}
      className="fixed inset-0 flex justify-center items-center z-50 bg-black/65"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-amber-50 p-8 rounded shadow-lg w-110 max-w-full flex flex-col juistify-center items-center rounded-lg"
      >
        <h1 className="text-3xl mb-2">Nutrition Calculator</h1>
        <div className="flex flex-row text-lg justify-center gap-2 mb-2">
          <input
            className="border-2 w-2/4"
            type="number"
            placeholder="In grams"
            ref={inputRef}
          />
          <button
            className="hover:bg-orange-300 duration-400 rounded-lg px-2 border-2"
            onClick={() => {
              handleAmountChange();
            }}
          >
            Enter
          </button>
        </div>
        <p className="text-xl">
          Calories: {((nutritions?.calories / 100) * amount).toFixed(1)}
        </p>
        <p className="text-xl">
          Fat: {((nutritions?.fat / 100) * amount).toFixed(1)} g
        </p>
        <p className="text-xl">
          Sugar: {((nutritions?.sugar / 100) * amount).toFixed(1)} g
        </p>
        <p className="text-xl">
          Carbohydrates:{" "}
          {((nutritions?.carbohydrates / 100) * amount).toFixed(1)} g
        </p>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
