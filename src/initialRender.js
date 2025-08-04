import { createNewCategoryBtn } from "./category";
import { categories, products } from "./constants";
import { createProductCard } from "./product";
import { categoryList, productList } from "./selectors";

const initialRender = () => {
  categories.forEach((el) => {
    categoryList.appendChild(createNewCategoryBtn(el.title));
  });

  products.forEach((el) => {
    productList.appendChild(createProductCard(el));
  })
};

export default initialRender;
