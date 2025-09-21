import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Page1 from './components/Page1.jsx'
import Page2 from './components/Page2.jsx'
import Page3 from './components/Page3.jsx'
import Page4 from './components/Page4.jsx'

// Reactive router that handles both hash (#1) and path (/1) routing
function SimpleRouter() {
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    // Function to get current route
    const getCurrentRoute = () => {
      const path = window.location.pathname;
      const hash = window.location.hash.slice(1);
      
      // Check for path-based routing first (/1, /2, etc.)
      if (path === '/1') return '1';
      if (path === '/2') return '2';
      if (path === '/3') return '3';
      if (path === '/4') return '4';
      
      // Check for hash-based routing (#1, #2, etc.)
      if (hash) return hash;
      
      // Default to home
      return '';
    };

    // Set initial route
    setCurrentPath(getCurrentRoute());

    // Listen for hash changes
    const handleHashChange = () => {
      setCurrentPath(getCurrentRoute());
    };

    // Listen for back/forward button
    const handlePopState = () => {
      setCurrentPath(getCurrentRoute());
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Render the appropriate component based on current path
  switch(currentPath) {
    case '1':
      return <Page1 />;
    case '2':
      return <Page2 />;
    case '3':
      return <Page3 />;
    case '4':
      return <Page4 />;
    default:
      return <App />;
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SimpleRouter />
  </StrictMode>,
)