import "./App.css";
import HomeScreen from "./screens/home/HomeScreen";

function App() {
  return (
    <div className="flex flex-col items-center p-4 md:p-10">
      <div className="max-w-2xl w-full items-center">
        <HomeScreen />
      </div>
    </div>
  );
}

export default App;
