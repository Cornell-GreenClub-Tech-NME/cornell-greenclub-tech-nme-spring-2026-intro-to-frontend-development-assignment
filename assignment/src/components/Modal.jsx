import "./Modal.css";

/**
 * Formats a date string into MM/DD/YYYY format.
 * @param {string} date - The raw date string (e.g., "11092025").
 * @returns {string} The formatted date (e.g., "11/09/2025") or empty string if no date provided.
 */
function formatDate(date) {
  if (!date) return "";
  /*
    TODO #1 (Modal): Return a formatted string representing a date. Use this function
                     in your Modal implementation
    Example Input: "11092025"
    Example Output: "11/09/2025"
  */

    return `${date.slice(0, 2)}/${date.slice(2, 4)}/${date.slice(4)}`;
}

/**
 * Modal component for displaying detailed information about a stakeholder.
 * @param {Object} stakeholder - The stakeholder object containing details to display.
 * @param {Function} onClose - Callback function to close the modal.
 * @returns {JSX.Element} The rendered modal.
 */
function Modal({stakeholder, onClose}) {
  return (
    <>
      {/*
        TODO #2 (Modal): Implement the Modal component. Use the function you implemented in TODO #1 (Modal)
                         to display dates
        HINT: You want to make the modal usable across different stakeholders. This means you will need to
              establish values dynamically (do not hard-code in values). This will require passing in a stakeholder
              JSON object prop and using the dot operator to access its fields
        HINT: In order to test your modal, you may want to pass in a dummy stakeholder JSON object into your modal,
              rendering it in App.jsx
      */}


   <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>


        {/*
        TODO #3 (Integration): Update the button logic in the table to set the selectedStakeholder to null
        REASONING: We learned that updating useStates updates (re-renders) the component in which it is defined.
                   This means that updating selectedStakeholder will re-render App.jsx, therefore re-computing
                   the conditional implemented in TODO #2 (Integration)                        
      */}

        <button className="modal-close" onClick={onClose}>✕</button>
        <h2>{stakeholder.name}</h2>

        {stakeholder.stakeholder_type && (
          <p><strong>Type:</strong> {stakeholder.stakeholder_type.join(", ")}</p>
        )}
        {stakeholder.subteam_tag && (
          <p><strong>Subteam:</strong> {stakeholder.subteam_tag}</p>
        )}
        {stakeholder.point_of_contact && (
          <p><strong>Point of Contact:</strong> {stakeholder.point_of_contact}</p>
        )}
        {stakeholder.email && (
          <p><strong>Email:</strong> {stakeholder.email}</p>
        )}
        {stakeholder.phone && (
          <p><strong>Phone:</strong> {stakeholder.phone}</p>
        )}
        {stakeholder.address && (
          <p><strong>Address:</strong> {stakeholder.address}</p>
        )}
        {stakeholder.website && (
          <p>
            <strong>Website:</strong>{" "}
            <a href={stakeholder.website} target="_blank" rel="noreferrer">
              {stakeholder.website}
            </a>
          </p>
        )}
        {stakeholder.greenclub_primary_contact && (
          <p><strong>GreenClub Contact:</strong> {stakeholder.greenclub_primary_contact}</p>
        )}
        {stakeholder.last_contact_date && (
          <p><strong>Last Contact:</strong> {formatDate(stakeholder.last_contact_date)}</p>
        )}
        {stakeholder.general_notes_and_dates?.length > 0 && (
          <div>
            <strong>Notes:</strong>
            <ul>
              {stakeholder.general_notes_and_dates.map((entry, i) => (
                <li key={i}>
                  <em>{formatDate(entry.date)}:</em> {entry.note}
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>
    </div>
    </>
  );
}

export default Modal;
