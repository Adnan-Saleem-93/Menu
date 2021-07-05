import React, {useState} from "react";
import Header from "./components/header";
import Menu from "./components/menu";
import "./App.css";

function App() {
  const [activeNavKey, setActiveNavKey] = useState("All");

  // handle click of nav items - update nav item's active key
  const handleNavClick = (key) => {
    setActiveNavKey(key);
  };

  return (
    <div className="App">
      <Header activeNavKey={activeNavKey} onNavClick={handleNavClick} />
      <Menu selectedCategory={activeNavKey} />
    </div>
  );
}

export default App;
