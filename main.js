// 1. მასივი, array
const prices = [10, 20, 30, 40, 50];
console.log(prices);

// საშუალო არითმეტიკული
const sum = prices.reduce((total, num) => total + num, 0);
const average = sum / prices.length;
console.log(sum);
console.log(average);

// 2. ობიექტის შექმნა
const book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  yearPublished: 1960,
};

console.log(
  `${book.title} by ${book.author} was published in ${book.yearPublished}.`
);

// 3. თარიღის შეცვლა

book.yearPublished = 1970;

// დარედაქტირებული ობიექტის კონსოლში გამოყვანა
console.log(book);

// 4. მასივი პროდუქტების ობიექტებით
const products = [
  { productName: "Laptop", price: 1500, isAvailable: true },
  { productName: "Smartphone", price: 800, isAvailable: false },
  { productName: "Tablet", price: 500, isAvailable: true },
];

// მასივის კონსოლში გამოყვანა
console.log(products);
