import { topProductHeadingType, topProductPriceType } from "@/types";

export const topProductData: topProductPriceType[] = [
  {
    image: "/images/product/product-01.png",
    name: "Apple Watch Series 7",
    category: "Electronics",
    price: 296,
    sold: 22,
    profit: 45,
  },
  {
    image: "/images/product/product-02.png",
    name: "Macbook Pro M1",
    category: "Electronics",
    price: 546,
    sold: 12,
    profit: 125,
  },
  {
    image: "/images/product/product-03.png",
    name: "Dell Inspiron 15",
    category: "Electronics",
    price: 443,
    sold: 64,
    profit: 247,
  },
  {
    image: "/images/product/product-04.png",
    name: "HP Probook 450",
    category: "Electronics",
    price: 499,
    sold: 72,
    profit: 103,
  },
];

export const topProductHeading: topProductHeadingType[] = [
  {
    id: 1,
    name: "Product Name",
  },
  {
    id: 2,
    name: "Category",
  },
  {
    id: 3,
    name: "Price",
  },
  {
    id: 4,
    name: "Sold",
  },
  {
    id: 5,
    name: "Profit",
  },
];
