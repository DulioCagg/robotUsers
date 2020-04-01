import React from 'react';

const Scroll = ({ children }) => {
  return (
    <div style={{ overflowY: 'scroll', height: "74.5vh" }}>
      {children}
    </div>
  );
}

export default Scroll;