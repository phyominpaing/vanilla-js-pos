import { createIcons, icons } from "lucide";
import { themeToggleDarkIcon, themeToggleLightIcon } from "./selectors";

const setup = () => {
  iconSetup();
  themeModeSetup();
};

const iconSetup = () => {
  createIcons({ icons });
};


const themeModeSetup = () => {
  //   // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  //   if (
  //     localStorage.getItem("color-theme") === "dark" ||
  //     (!("color-theme" in localStorage) &&
  //       window.matchMedia("(prefers-color-scheme: dark)").matches)
  //   ) {
  //   } else {
  //   }

  // Change the icons inside the button based on previous settings
  if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    themeToggleLightIcon.classList.remove("hidden");
    document.documentElement.classList.add("dark");
  } else {
    themeToggleDarkIcon.classList.remove("hidden");
    document.documentElement.classList.remove("dark");
  }
};

export default setup;
