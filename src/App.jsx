import React from "react";
import Header from "./components/Header";
import Destination from "./components/Destination";
import data from "./utils/data";

function App() {
  const renderLocation = data.map((loc) => {
    return <Destination location={loc} key={loc.id} />;
  });
  return (
    <div>
      <Header />
      <main>{renderLocation}</main>
    </div>
  );
}

export default App;
