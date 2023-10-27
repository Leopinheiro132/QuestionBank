import { useEffect, useState } from 'react';
import Router from 'next/router';
import axios from 'axios';

export default function ProtectedRoute({ children }) {
  const [authChecked, setAuthChecked] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdm, setIsAdm] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        Router.push('/login');
        setAuthChecked(true);
      } else {
        const resLog = await fetch('/api/verify-token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token }),
        });
        if (resLog.status == 200) {
          setIsAuthenticated(true);
          setAuthChecked(true);
        } else if(resLog.status == 289){
          setIsAuthenticated(true);
          setAuthChecked(true);
          setIsAdm(true);
        }
        else {
          localStorage.removeItem('token');
          Router.push('/login');
        }
      }
    };

    checkAuth();
  }, [Router]);

  if (!authChecked) {
    return null;
  }
  if (!isAuthenticated) {
    return
  }
  
  return <>{children}</>;
}
