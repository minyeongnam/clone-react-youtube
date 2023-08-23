import { Outlet } from 'react-router-dom';
import Header from './components/Header';

export default function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Outlet />
      </div>
      <footer>
        <footer>footer</footer>
      </footer>
    </>
  );
}
