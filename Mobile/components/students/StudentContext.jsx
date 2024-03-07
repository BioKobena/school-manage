// StudentContext.js

import React, { useContext, createContext, useState } from 'react';

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [studentContext, setStudentContext] = useState(null);
  const [studentIdValue, setStudentIdValue] = useState(null);

  return (
    <StudentContext.Provider value={{ studentContext, setStudentContext, studentIdValue, setStudentIdValue }}>
      {children}
    </StudentContext.Provider>
  );
};

export const useStudentContext = () => {
  const context = useContext(StudentContext);

  if (!context) {
    throw new Error('useStudentContext must be used within a StudentProvider');
  }

  return context;
};
