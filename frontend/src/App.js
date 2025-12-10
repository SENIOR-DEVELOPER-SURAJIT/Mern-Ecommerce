import { Outlet } from 'react-router-dom';
import './App.css';
import MobileNavbar from './components/MobileNavbar';

function App() {
  return (
    <>
      <Outlet />
      <MobileNavbar />
    </>
  );
}

export default App;
