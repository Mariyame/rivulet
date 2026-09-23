'use client';

import { useAuth } from "@/hooks/useAuth";

export default function Page() {
  const { user, logout } = useAuth();


  const handleLogout = async () => {
    try {
        await logout();
      
    } catch (error) {
      console.error("An error occurred during logout:", error);
    }
  };

  return (
    <div className="p-8">
      <p>Welcome {user?.name} to your dashboard!</p>
      <button 
        onClick={handleLogout}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Log Out
      </button>
    </div>
  );
} 
