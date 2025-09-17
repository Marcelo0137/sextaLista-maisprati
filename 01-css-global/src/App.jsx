import { useEffect, useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home';

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="app">
      <Navbar theme={theme} setTheme={setTheme} />
      <Home />
    </div>
  );
}
