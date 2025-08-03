import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const themeSelectStyle =
    theme === "theme1"
      ? "bg-white text-black"
      : theme === "theme2"
      ? "bg-[#121212] text-white"
      : "bg-[#ffe4e1] text-[#4a148c]";

  return (
    <header className={`fixed top-0 left-0 w-full z-50 p-4 shadow-md ${theme} flex justify-between items-center`}>
      <h1 className="text-xl font-bold">🎨 Theme Switcher App</h1>
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value as "theme1" | "theme2" | "theme3")}
        className={`px-4 py-2 rounded border ${themeSelectStyle}`}
      >
        <option value="theme1">Theme 1 - Light</option>
        <option value="theme2">Theme 2 - Dark + Sidebar</option>
        <option value="theme3">Theme 3 - Colorful</option>
      </select>
    </header>
  );
};

export default Header;
