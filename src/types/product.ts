const categories = {
  MENS_CLOSING: "men's clothing",
  WOMENS_CLOSING: "women's clothing",
  JEWELERY: "jewelery",
  ELECTRONICS: "electronics",
} as const;

type CategoriesType = (typeof categories)[keyof typeof categories];

export interface Product {
  category: CategoriesType;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
  title: string;
}

export interface ProductProps {
  product: Product;
}
