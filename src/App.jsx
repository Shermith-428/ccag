import './App.css';
import './index.css';
import { AdminProvider } from './context/AdminContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HymnsPage from './pages/HymnsPage';
import FavoritesPage from './pages/FavoritesPage';
import SetlistsPage from './pages/SetlistsPage';
import useLocalStorage from './hooks/useLocalStorage';
import defaultHymns from './data/hymns';

function App() {
  const [page, setPage]         = useLocalStorage('ccag_page', 'hymns');
  const [hymns, setHymns]       = useLocalStorage('ccag_hymns', defaultHymns);
  const [favorites, setFavorites] = useLocalStorage('ccag_favorites', []);
  const [setlists, setSetlists]   = useLocalStorage('ccag_setlists', []);

  return (
    <AdminProvider>
      <div className="bg-mesh" />
      <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar page={page} setPage={setPage} />
        <main style={{ flex: 1 }}>
          {page === 'hymns' && (
            <HymnsPage hymns={hymns} setHymns={setHymns} favorites={favorites} setFavorites={setFavorites} />
          )}
          {page === 'setlists' && (
            <SetlistsPage hymns={hymns} setlists={setlists} setSetlists={setSetlists}
              favorites={favorites} setFavorites={setFavorites} />
          )}
          {page === 'favorites' && (
            <FavoritesPage hymns={hymns} favorites={favorites} setFavorites={setFavorites} />
          )}
        </main>
        <Footer />
      </div>
    </AdminProvider>
  );
}

export default App;
