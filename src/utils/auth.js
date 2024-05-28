export const isAuthenticated = () => {
    if (typeof window === "undefined") {
      // We are on the server, return false or handle appropriately
      return false;
    }
  
    const token = localStorage.getItem('token');
    return !!token;  // Returns true if token exists, false otherwise
  }
  