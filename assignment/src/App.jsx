import { useState } from "react";
import "./App.css";
import stakeholders from "../data/stakeholders.json";
// TODO (Integration): Import the Modal component

function formatPhone(phone) {
  if (!phone) return "-";
  /*
    TODO (Table): Return a formatted string representing a phone number. Use this function
    in your table implementation

    Example Input: "6073390064"
    Example Output: "607-339-0064" 
  */
}

function App() {
  // (Integration) The useState that will be used to maintain Modal component rendering
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      {/* TODO (Table): Implement the table */}
      {/* TODO (Integration): Take the table and Modal implementations and integrate them */}
    </>
  );
}

export default App;
