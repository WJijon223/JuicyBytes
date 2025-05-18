// List of fruits with their full names and numbers
// This list is used to map fruit names to their full names and numbers
export const fruits = [
  "Banana",
  "Orange",
  "Strawberry",
  "Pear",
  "Tomato",
  "Apple",
  "Cherry",
  "Pineapple",
  "Raspberry",
  "Watermelon",
  "Lemon",
  "Mango",
  "Blueberry",
  "Apricot",
  "Guava",
  "Melon",
  "Papaya",
  "Lime",
  "Persimmon",
  "Durian",
  "Blackberry",
  "Lingonberry",
  "Lychee",
  "Fig",
  "Gooseberry",
  "PassionFruit",
  "Plum",
  "GreenApple",
  "Feijoa",
  "Tangerine",
  "Pomegranate",
  "Dragonfruit",
  "Grape",
  "Morus",
  "Avocado",
  "Kiwifruit",
  "Peach",
  "Cranberry",
  "Jackfruit",
  "Horned Melon",
  "Hazelnut",
  "Pomelo",
  "Mangosteen",
  "Pumpkin",
  "Annona",
];

export const getFullFruitNumber = (fruit) => {
  const fruitIndex = fruits.indexOf(fruit);
  if (fruitIndex === -1) {
    return null;
  }
  const zeroes = "0".repeat(2 - String(fruitIndex + 1).length);
  return `${zeroes}${fruitIndex + 1}`;
};

// retrieves the image path for a given fruit
export const getImgPath = (fruit) => {
  const fullFruitNumber = getFullFruitNumber(fruit);
  if (fullFruitNumber === null) {
    return null;
  }
  return `/images/${fullFruitNumber}.png`;
};
