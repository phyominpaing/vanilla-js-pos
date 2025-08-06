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
import { categories, products } from "./constants";

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
  const newCategory = {
    id: categoryList[categories.length - 1].id + 1,
    title: formData.get("new_category_name"),
  };
  categoryList.appendChild(createNewCategoryBtn(newCategory));
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
  renderProduct(
    products.filter((el) => {
      return el.title.toLowerCase().search(q.toLowerCase()) != -1;
    })
  );
};

export const handleCategoryList = (e) => {
  const clickedCategory = e.target.innerText;

  // remove all active classes
  categoryList.childNodes.forEach((el) => {
    el.classList.replace("bg-blue-400", "bg-transparent");
    el.classList.replace("text-white", "text-gray-700");
  });

  // add active class
  e.target.classList.replace("bg-transparent", "bg-blue-400");
  e.target.classList.replace("text-gray-700", "text-white");

  if (clickedCategory === "All") {
    renderProduct(products);
  } else {
    renderProduct(
      products.filter((el) => {
        return el.category === clickedCategory;
      })
    );
  }
};
