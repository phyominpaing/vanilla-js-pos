import { Drawer } from "flowbite";
import { createNewCategoryBtn } from "./category";
import {
  categoryList,
  productTemplate,
  themeToggleDarkIcon,
  themeToggleLightIcon,
} from "./selectors";

export const handleTheme = () => {
  // toggle icons inside button
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  // if set via local storage previously
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }

    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
};

export const handleCreateCategoryForm = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  categoryList.appendChild(
    createNewCategoryBtn(formData.get("new_category_name"))
  );
  e.target.reset();
  document.querySelector(`[data-drawer-hide="create-category-drawer"]`).click();

  // e.target.closest("#create-category-drawer").querySelector(`[data-drawer-hide="create-category-drawer"]`).click();

  // const drawer = new Drawer(document.querySelector("#create-category-drawer"));
  // drawer.hide();
};

export const handleCreateProductForm = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  console.log(formData.get("new_product_name"));
  console.log(formData.get("new_product_price"));
  console.log(formData.get("new_product_category"));

  const productCard = productTemplate.cloneNode(true);
  productCard.querySelector(".product-category-name").textContent =
    formData.get("new_product_category");

  productCard.querySelector(".product-name").textContent =
    formData.get("new_product_name");

  productCard.querySelector(".product-price").textContent =
    formData.get("new_product_price");
};
