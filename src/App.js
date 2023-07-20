import "./App.css";
import HomePage from "./components/homepage/HomePage";
import Navbar from "./components/navbar/navbar.jsx";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <HomePage />
      </div>
    </>
  );
}

export default App;
