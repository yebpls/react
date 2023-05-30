import React from "react";

function Button({ children, onClick }) {
  return (
    <button
      className="btn"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;

// usage:
// <Button>Click</Button>
