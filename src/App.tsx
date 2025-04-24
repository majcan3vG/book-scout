import './App.css';
import { fetchGoogleBooks } from './lib/googleBooksApi';
import { useEffect } from 'react';
import { useBookStore } from './store/bookStore';
import Header from './components/header';
import { BookList } from './components/bookList';
import { Spinner } from './components/icons/spinner';
import MoodList from './components/moodList';
import { Toaster } from './components/ui/toaster';

function App() {
  const { books, loading, setBooks, setLoading } = useBookStore();

  useEffect(() => {
    async function loadBooks() {
      setLoading(true);
      const fetched = await fetchGoogleBooks();
      setBooks(fetched);
      setLoading(false);
    }
    loadBooks();
  }, []);

  return (
    <div className="flex flex-col min-h-svh bg-[#1C1B22]">
      <Header />
      <MoodList />
      <div className="flex items-center justify-center w-full py-8">
        {loading ? <Spinner /> :<BookList />}
      </div>
      <Toaster richColors theme='light' position="top-center" />
    </div>
  )
}

export default App