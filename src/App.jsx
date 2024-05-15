import { useState } from "react";
import "./App.css";
import Hero from "./screens/home/components/Hero";
import HomeScreen from "./screens/home/HomeScreen";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [theme, setTheme] = useState("lemonade");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className="flex flex-col items-center p-4 md:p-10"
        data-theme={theme}
      >
        <div className="max-w-2xl w-full items-center">
          <HomeScreen />
          <Hero />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
