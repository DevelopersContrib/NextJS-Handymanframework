"use client";

import { createContext, useContext, useState } from "react";

export const HandymanContext = createContext();

export const HandymanProvider = ({ children }) => {
  const [handymanConfigs, setHandymanConfigs] = useState(null);

  return (
    <HandymanContext.Provider value={{ handymanConfigs, setHandymanConfigs }}>
      {children}
    </HandymanContext.Provider>
  );
};
