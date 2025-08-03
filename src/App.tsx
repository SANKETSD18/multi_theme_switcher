import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Products from "./components/Product";

const App = () => {
  const { theme } = useContext(ThemeContext);

  const themeClasses =
    theme === "theme1"
      ? "bg-white text-black"
      : theme === "theme2"
      ? "bg-[#121212] text-white"
      : "bg-gradient-to-r from-purple-500 to-indigo-600 text-white";

  return (
    <div className={`min-h-screen ${themeClasses} transition-all duration-300 ease-in-out`}>
      <Header />
      <Navbar />
      <main className="pt-[120px] px-4">
        <Products />
      </main>
    </div>
  );
};

export default App;
