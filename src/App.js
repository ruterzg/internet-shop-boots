import React from "react";
import Card from "./components/Cart/Cart";

const headerStyles = {
  backgroundColor: "#000",
  color: "#fff",
  padding: "20px",
  textAlign: "center",
};

const App = () => {
  return (
    <div className="App">
      <header style={headerStyles}>
        <h4>Home</h4>
        <h4>About Us</h4>
        <h4>information</h4>
      </header>
      <Card />
    </div>
  );
};

export default App;
