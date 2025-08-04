import { createNewCategoryBtn } from "./category";
import { categories } from "./constants";
import { categoryList } from "./selectors";

const initialRender = () => {
  categories.forEach((el) => {
    categoryList.appendChild(createNewCategoryBtn(el.title));
  });
};

export default initialRender;
