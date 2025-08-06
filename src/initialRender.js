import { createNewCategoryBtn, renderCategory } from "./category";
import { categories, products } from "./constants";
import { createProductCard, renderProduct } from "./product";
import { categoryList, productList } from "./selectors";

const initialRender = () => {
 renderCategory(categories);

 renderProduct(products);
};

export default initialRender;
