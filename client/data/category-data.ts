import { ICategory } from "types/category-type";

const categoryData: ICategory[] = [
  {
    id: "64240b66253d81bc860d4cf2",
    img: "/img/about/about-3.jpg",
    parent: "Hair Color",
    children: ["Makeup Brush", "Face Powder"],
    productType: "beauty",
    products: ["64250d8e253d81bc860d4d26", "6426a68a253d81bc860d5ea6"],
    status: "Show",
  },
  {
    id: "64240ca8253d81bc860d4cf4",
    img: "https://i.ibb.co/8YdfXmn/beauty-category-2.jpg",
    parent: "Beauty of Skin",
    children: ["Skin", "Lip Liner"],
    productType: "beauty",
    products: ["642515c0253d81bc860d4da3", "6426ab33253d81bc860d5f86"],
    status: "Show",
  },
  {
    id: "64240e13253d81bc860d4cf6",
    img: "https://i.ibb.co/1dZNNGh/beauty-category-3.jpg",
    parent: "Awesome Lip Care",
    children: ["Cosmetics", "Cream"],
    productType: "beauty",
    products: ["64251bc0253d81bc860d4db5", "6426adba253d81bc860d6132"],
    status: "Show",
  },
  {
    id: "64240fb4253d81bc860d4cf8",
    img: "https://i.ibb.co/nkQK0Xr/beauty-category-4.jpg",
    parent: "Facial Care",
    children: ["Powder", "Makeup Brush"],
    productType: "beauty",
    products: ["64252172253d81bc860d4dbe", "6426b217253d81bc860d6217"],
    status: "Show",
  },
];

export default categoryData;
