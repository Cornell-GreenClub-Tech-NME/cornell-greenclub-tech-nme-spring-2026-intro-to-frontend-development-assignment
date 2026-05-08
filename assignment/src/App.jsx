import { useState } from "react";
import "./App.css";
import stakeholders from "../data/stakeholders.json";
import Modal from "./components/Modal";

/**
 * Formats a phone number string into a standard US format.
 * @param {string} phone - The raw phone number string (e.g., "6073390064").
 * @returns {string} The formatted phone number (e.g., "607-339-0064") or "-" if no phone provided.
 */
function formatPhone(phone) {
  if (!phone) return "-";
  /*
    TODO #1 (Table): Return a formatted string representing a phone number. Use this function
                     in your table implementation
    Example Input: "6073390064"
    Example Output: "607-339-0064"
  */

    return `${phone.slice(0, 3)}-${phone.slice(3, 6)}-${phone.slice(6)}`;


}

/**
 * Main application component that displays a table of stakeholders and a modal for details.
 * @returns {JSX.Element} The rendered application.
 */
function App() {
  const [selectedStakeholder, setSelectedStakeholder] = useState(null);

  return (
    <>
      <div className="app-header">
        <h1>Food Waste Gaps Spring 2026 Stakeholders</h1>
      </div>
      {/*
        TODO #2 (Table): Implement the table by mapping over the stakeholders JSON object using the
                        built-in React function .map(). Use the function you implemented in TODO #1 (Table)
                         to display phone numbers.
      */}

      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Subteam</th>
            <th>Type</th>
            <th>Primary Contact</th>
            <th>Last Contact</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {stakeholders.map((stakeholder, index) => (
            <tr key={index}>
              <td>{stakeholder.name}</td>
              <td>{formatPhone(stakeholder.phone)}</td>
              <td>{stakeholder.address ?? "-"}</td>
              <td>{stakeholder.subteam_tag ?? "-"}</td>
              <td>{stakeholder.stakeholder_type?.join(", ") ?? "-"}</td>
              <td>{stakeholder.greenclub_primary_contact ?? "-"}</td>
              <td>{stakeholder.last_contact_date ?? "-"}</td>

      {/*
        TODO #1 (Integration): Update the button logic in the table to set the selectedStakeholder to the
                               stakeholder that corresponds with the row in which the button was clicked
      */}

      <td>
                <button onClick={() => setSelectedStakeholder(stakeholder)}>
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* TODO #2 (Integration): Conditionally render the Modal component based on selectedStakeholder
          HINT: Render based on if selectedStakeholder is null or not
          HINT: When you do render the Modal component, you will need to pass in (1) information about which
          stakeholder the user has selected to view and (2) a way of updating selectedStakeholder to null
          when the user closes the Modal (see TODO #3 (Integration))
      */}

      {selectedStakeholder !== null && (
        <Modal
          stakeholder={selectedStakeholder}
          onClose={() => setSelectedStakeholder(null)}
        />
      )}


    </>
  );
}

export default App;
