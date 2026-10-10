interface Product {
  readonly id: number;
  title: string;
  price: number;
  inStock: boolean;
  description?: string;
}

const product: Product = {
  id: 1,
  title: "Laptop",
  price: 1200,
  inStock: true,
  description: "Lightweight laptop for study and work",
};

console.log(product);
