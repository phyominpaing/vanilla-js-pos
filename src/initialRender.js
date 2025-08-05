import { createNewCategoryBtn, renderCategory } from "./category";
import { categories, products } from "./constants";
import { createProductCard } from "./product";
import { categoryList, productList } from "./selectors";

const initialRender = () => {
 renderCategory(categories);

  products.forEach((el) => {
    productList.appendChild(createProductCard(el));
  })
};

export default initialRender;
