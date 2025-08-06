import { categories } from "./constants";
import { categoryList } from "./selectors";

export const createNewCategoryBtn = (category) => {
  const btn = document.createElement("button");
  btn.textContent = category.title;
  btn.setAttribute("category-id", category.id);
  btn.className =
    "bg-transparent text-sm text-end px-4 py-2 text-gray-700 rounded-md hover:text-blue-800 hover:scale-105 hover:bg-blue-100 hover:border-blue-400 active:scale-90 duration-300 flex justify-end items-center";
  // btn.classList.add(
  //   "bg-transparent",
  //   "text-sm",
  //   "text-end",
  //   "px-4",
  //   "py-2",
  //   "rounded-md",
  //   "hover:scale-105",
  //   "hover:bg-blue-100",
  //   "hover:border-2",
  //   "hover:border-blue-400",
  //   "active:scale-90",
  //   "duration-300",
  //   "flex",
  //   "justify-end",
  //   "items-center",
  // );

  return btn;
};

export const renderCategory = (inputCategories) => {
  categoryList.innerHTML = "";
  inputCategories.forEach((el) => {
    if (el.id === 0) {
      const btn = createNewCategoryBtn(el);
      btn.classList.replace("bg-transparent", "bg-blue-400");
      btn.classList.replace("text-gray-700", "text-white");
      categoryList.appendChild(btn);
    } else {
      categoryList.appendChild(createNewCategoryBtn(el));
    }
  });
};
