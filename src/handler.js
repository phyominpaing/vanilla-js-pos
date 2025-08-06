import { Drawer } from "flowbite";
import { createNewCategoryBtn } from "./category";
import {
  categoryList,
  productList,
  productTemplate,
  themeToggleDarkIcon,
  themeToggleLightIcon,
} from "./selectors";
import { createProductCard, renderProduct } from "./product";
import { LogIn } from "lucide";
import { products } from "./constants";

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

  productList.appendChild(
    createProductCard({
      title: formData.get("new_product_name"),
      category: formData.get("new_product_category"),
      price: formData.get("new_product_price"),
    })
  );
  e.target.reset();
  document.querySelector(`[data-drawer-hide="create-product-drawer"]`).click();
};

export const handleSearchForm = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  console.log(formData.get("search"));

  // e.target.reset();
};

export const handleSearch = (e) => {
  // // e.preventDefault();
  // if (e.key === "Enter") {
  //   console.log(e.target.value);
  //  }

  const q = e.target.value;
  console.log(q);
  renderProduct(products.filter((el) => {
     return el.title.toLowerCase().search(q) != -1
  }));
  
};


export const handleCategoryList = (e) => {
  
}