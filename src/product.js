import { productTemplate } from "./selectors";

export const createProductCard = ({ title, category, price }) => {
  const productCard = productTemplate.content.cloneNode(true);
  productCard.querySelector(".product-category-name").textContent = category;

  productCard.querySelector(".product-name").textContent = title;

  productCard.querySelector(".product-price").textContent = price;

  return productCard;
};
