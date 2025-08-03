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
