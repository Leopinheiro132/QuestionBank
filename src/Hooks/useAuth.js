import { useRouter } from 'next/router';

const useAuth = () => {
  const router = useRouter();

  const handleLogin = async () => {
    const token = localStorage.getItem('token');

    if (token) {
      const response = await fetch('/api/verify-token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      });

      if (response.status === 200) {
        router.push('/home');
      } else {
        localStorage.removeItem('token');
        router.push('/login');
      }
    } else {
      router.push('/login');
    }
  };
  const handleLogout = () => {
    if(localStorage.removeItem('token') == null){
      console.log("não tem token")
    }
    localStorage.removeItem('token');
    router.push('/');
  };

  return { handleLogin, handleLogout };
};

export default useAuth;