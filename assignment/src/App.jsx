import { useState } from "react";
import "./App.css";
import stakeholders from "../data/stakeholders.json";
import Modal from "./components/Modal";

function formatPhone(phone) {
  if (!phone) return "-";
  /*
    TODO #1 (Table): Return a formatted string representing a phone number. Use this function
                     in your table implementation
    Example Input: "6073390064"
    Example Output: "607-339-0064" 
  */
}

function App() {
  const [selectedStakeholder, setSelectedStakeholder] = useState(null);

  return (
    <>
      <div>You have successfully started the assignment. Good luck!</div>
      {/*
        TODO #2 (Table): Implement the table by mapping over the stakeholders JSON object using the
                        built-in React function .map(). Use the function you implemented in TODO #1 (Table)
                         to display phone numbers.
      */}

      {/*
        TODO #1 (Integration): Update the button logic in the table to set the selectedStakeholder to the
                               stakeholder that corresponds with the row in which the button was clicked                                        
      */}

      {/* TODO #2 (Integration): Conditionally render the Modal component based on selectedStakeholder
          HINT: Render based on if selectedStakeholder is null or not
          HINT: When you do render the Modal component, you will need to pass in (1) information about which
          stakeholder the user has selected to view and (2) a way of updating selectedStakeholder to null
          when the user closes the Modal (see TODO #3 (Integration))
      */}
    </>
  );
}

export default App;
