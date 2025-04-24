import { create } from 'zustand';

type Source = 'openlibrary' | 'googlebooks';

interface Book {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  description: string;
  infoLink: string;
  pageCount: number;
}

interface BookStore {
  searchTerm: string | undefined;
  curentMood: string | null | undefined;
  books: Book[];
  searchList: Book[];
  loading: boolean;
  source: Source;
  setSource: (src: Source) => void;
  setSearchTerm: (term: string | undefined) => void;
  setBooks: (books: Book[]) => void;
  setLoading: (loading: boolean) => void;
  setCurrentMood: (currentMood: string | null | undefined) => void;
}

export const useBookStore = create<BookStore>((set) => ({
  searchTerm: '',
  curentMood: null,
  books: [],
  searchList: [],
  loading: false,
  source: 'openlibrary',
  setSource: (src) => set({ source: src }),
  setSearchTerm: (term) => set({ searchTerm: term }),
  setBooks: (books) => set({ books }),
  setLoading: (loading) => set({ loading }),
  setCurrentMood: (curentMood) => set({ curentMood }),
}));
