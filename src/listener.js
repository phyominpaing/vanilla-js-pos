import { handleCreateCategoryForm, handleTheme } from "./handler";
import { createCategoryForm, themeToggleBtn } from "./selectors";

const listener = () => {
  themeToggleBtn.addEventListener("click", handleTheme);
  createCategoryForm.addEventListener("submit", handleCreateCategoryForm);
};

export default listener;
