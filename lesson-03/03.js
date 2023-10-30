const fruits = ["яблоко", "банан", "апельсин", "манго", "киви", "ананас", "виноград", "груша", "слива", "персик"];


const removeFruits = (arr) => {
   return arr.slice(1, -2)
};

console.log(removeFruits(fruits));
