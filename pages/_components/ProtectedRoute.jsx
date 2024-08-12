import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if (!token) {
      router.push('/login');
      return;
    }

    const verifyToken = async () => {
      try {
        const response = await axios.post('/api/verify-token', { token });
        const { role } = response.data;

        if (allowedRoles.includes(role)) {
          setIsAuthorized(true);
        } else {
          router.push('/not-authorized');
        }
      } catch (error) {
        console.error('Token verification failed:', error);
        router.push('/login');
      }
    };

    verifyToken();
  }, [router, allowedRoles]);

  if (!isAuthorized) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;