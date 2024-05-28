import { jwtDecode } from 'jwt-decode';

export const isAuthenticated = () => {
  if (typeof window === "undefined") {
    return false;
  }
  const token = localStorage.getItem('token');
  return !!token;
}

export const isAdmin = () => {
    if (typeof window === "undefined") {
      return false;
    }
    const token = localStorage.getItem('token');
    if (!token) return false;
  
    try {
        const tokenDecoded = jwtDecode(token)

        return tokenDecoded.role === 'admin';
    } catch (error) {
      console.error("Token decoding failed:", error);
      return false;
    }
  }