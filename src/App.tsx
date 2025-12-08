import { useLocation } from 'react-router-dom';
import { AppRoutes } from './routes';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { BackToTop } from './components/BackToTop';

function App() {
  const location = useLocation();
  const showNavbar = location.pathname !== '/';

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      {showNavbar && <Navbar />}
      <main className="flex-1">
        <AppRoutes />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;

