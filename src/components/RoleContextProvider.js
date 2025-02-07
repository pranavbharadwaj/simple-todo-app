import React, { createContext, useContext, useState } from "react";

const RoleProvider = createContext();

const roles = {
  owner: { read: true, write: true, delete: true },
  viewer: { read: true, write: false, delete: false },
  editor: { read: true, write: true, delete: false },
};

export const RoleContextProvider = ({ children }) => {
  const [role, setRole] = useState("viewer");

  return (
    <RoleProvider.Provider value={{ role, roles, setRole }}>
      {children}
    </RoleProvider.Provider>
  );
};

export const useRole = () => useContext(RoleProvider);
