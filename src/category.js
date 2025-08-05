import { categories } from "./constants";
import { categoryList } from "./selectors";

export const createNewCategoryBtn = (categoryName) => {
  const btn = document.createElement("button");
  btn.textContent = categoryName;
  btn.classList.add(
    "bg-transparent",
    "text-sm",
    "text-end",
    "px-4",
    "py-2",
    "rounded-md"
  );

  return btn;
};

export const renderCategory = (inputCategories) => {
  categoryList.innerHTML = "";
   inputCategories.forEach((el) => {
    categoryList.appendChild(createNewCategoryBtn(el.title));
  });
}