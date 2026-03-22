import "./Modal.css";

function formatDate(date) {
  if (!date) return "";
  return `${date.slice(0, 2)}/${date.slice(2, 4)}/${date.slice(4)}`;
}

function Modal({ item, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <h2>{item.name}</h2>
        <div className="modal-content">
          <p>
            <strong>Coordinates: </strong> {item.lat_long?.[0] || "-"},{" "}
            {item.lat_long?.[1] || "-"}
          </p>
          <p>
            <strong>Email:</strong> {item.email || ""}
          </p>
          <p>
            <strong>Point of Contact:</strong> {item.point_of_contact || ""}
          </p>
          <p>
            <strong>Stakeholder Type(s):</strong>{" "}
            {item.stakeholder_type?.join(", ") || ""}
          </p>
          <p>
            <strong>Last Contact Date:</strong>{" "}
            {formatDate(item.last_contact_date)}
          </p>
          <div className="modal-notes">
            <strong>Notes:</strong>
            {item.general_notes_and_dates?.map((entry, i) => (
              <div key={i}>
                {formatDate(entry.date)}: {entry.note}
              </div>
            )) || ""}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
