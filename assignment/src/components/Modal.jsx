import "./Modal.css";

// Returns a formatted string representing a date
function formatDate(date) {
  if (!date) return "";
  /*
    TODO #1 (Modal): Return a formatted string representing a date. Use this function 
                     in your Modal implementation
    Example Input: "11092025"
    Example Output: "11/09/2025" 
  */
}

function Modal({}) {
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

      {/*
        TODO #3 (Integration): Update the button logic in the table to set the selectedStakeholder to null
        REASONING: We learned that updating useStates updates (re-renders) the component in which it is defined.
                   This means that updating selectedStakeholder will re-render App.jsx, therefore re-computing
                   the conditional implemented in TODO #2 (Integration)                        
      */}
    </>
  );
}

export default Modal;
