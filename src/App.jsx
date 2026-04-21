import React from 'react';
import { useAuth } from './context/AuthContext';
import Auth from './components/Auth/Auth';
import Orders from './components/Orders/Orders';

function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-900 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-orange-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="App">
      {!user ? <Auth /> : <Orders />}
    </div>
  );
}

export default App;
