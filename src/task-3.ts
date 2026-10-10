interface Product {
  id: number;
  title: string;
}

const usernames: string[] = ["alice", "bob", "charlie"];
const ratings: number[] = [4.5, 3.8, 5];
const products: Product[] = [
  { id: 1, title: "Phone" },
  { id: 2, title: "Tablet" },
];

console.log(usernames, ratings, products);
