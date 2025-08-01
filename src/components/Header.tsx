import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log("Current theme:", theme);
  

  return (
    <header className={`fixed top-0 left-0  h-20 w-full shadow p-4 flex justify-between items-center z-50 ${
  theme === 'theme2' ? '!bg-[#121212] text-white' : 'bg-white text-black'
}`}>
      <h1 className="text-xl font-bold">🎨 Theme Switcher App</h1>

      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value as any)}
        className={"border p-2 rounded " + (theme === 'theme2' ? 'bg-gray-800 text-white' : 'bg-white text-black')}
      >
        <option value="theme1">Theme 1 - Light</option>
        <option value="theme2">Theme 2 - Dark + Sidebar</option>
        <option value="theme3">Theme 3 - Colorful</option>
      </select>
    </header>
  );
};

export default Header;
