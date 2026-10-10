interface Product {
  id: number;
  title: string;
  price: number;
}

const usernames: string[] = ["alice", "bob", "charlie"];
const ratings: number[] = [4.5, 3.8, 5];
const products: Product[] = [
  { id: 1, title: "Phone", price: 800 },
  { id: 2, title: "Headphones", price: 150 },
];

console.log(usernames, ratings, products);
