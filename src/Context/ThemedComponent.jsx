import React, { createContext, useState } from 'react';
const TheThem = createContext();
export { TheThem };

function ThemedComponent({ children }) {
  const [them, setthem] = useState('light');

  function toggole() {
    setthem(them === 'light' ? 'dark' : 'light');
    console.log(them);
  }
  return (
    <TheThem.Provider value={{ them, toggole }}>{children}</TheThem.Provider>
  );
}

export default ThemedComponent;
