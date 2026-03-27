import { createContext, useContext, useState } from 'react';

const AdminContext = createContext(null);
const ADMIN_PASS = 'ccag2025';

export function AdminProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(() => localStorage.getItem('ccag_admin') === '1');

  function login(pass) {
    if (pass === ADMIN_PASS) {
      localStorage.setItem('ccag_admin', '1');
      setIsAdmin(true);
      return true;
    }
    return false;
  }

  function logout() {
    localStorage.removeItem('ccag_admin');
    setIsAdmin(false);
  }

  return <AdminContext.Provider value={{ isAdmin, login, logout }}>{children}</AdminContext.Provider>;
}

export const useAdmin = () => useContext(AdminContext);
