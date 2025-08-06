import { handleCreateCategoryForm, handleCreateProductForm, handleSearch, handleSearchForm, handleTheme } from "./handler";
import { createCategoryForm, createProductForm, searchForm, searchInput, themeToggleBtn } from "./selectors";

const listener = () => {
  themeToggleBtn.addEventListener("click", handleTheme);
  createCategoryForm.addEventListener("submit", handleCreateCategoryForm);
  createProductForm.addEventListener("submit", handleCreateProductForm);
  // searchForm.addEventListener("submit", handleSearchForm);
  searchInput.addEventListener("keyup", handleSearch);
};

export default listener;
