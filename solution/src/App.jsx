import { useState } from "react";
import "./App.css";
import stakeholders from "../data/stakeholders.json";
import Modal from "./components/Modal";

function formatPhone(phone) {
  if (!phone) return "-";
  return `${phone.slice(0, 3)}-${phone.slice(3, 6)}-${phone.slice(6)}`;
}

function App() {
  const [selectedStakeholder, setSelectedStakeholder] = useState(null);

  return (
    <div className="container">
      <h1>Stakeholder Directory</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Contact</th>
            <th>Subteam</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {stakeholders.map((item, index) => (
            <tr key={index}>
              <td>
                <a href={item.website} target="_blank">
                  {item.name}
                </a>
              </td>
              <td>{item.stakeholder_type?.join(", ") || "-"}</td>
              <td className="address">{item.address || "-"}</td>
              <td>{formatPhone(item.phone)}</td>
              <td>{item.greenclub_primary_contact || "-"}</td>
              <td>{item.subteam_tag || "-"}</td>
              <td className="notes">
                <button
                  className="view-more"
                  onClick={() => setSelectedStakeholder(item)}
                >
                  View More
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedStakeholder && (
        <Modal
          item={selectedStakeholder}
          onClose={() => setSelectedStakeholder(null)}
        />
      )}
    </div>
  );
}

export default App;
