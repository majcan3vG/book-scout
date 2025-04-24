import { customBookItem } from "@/types/bookTypes";
import { useBookStore } from "@/store/bookStore";
import { BookCard } from "./bookCard";

export function BookList() {
  const { books } = useBookStore();

  return (
    <div className="grid grid-cols-3 gap-8 mt-8">
      {books.map((book: customBookItem) => (
        <BookCard
          bookAuthor={book.author}
          bookCoverURL={book.coverUrl}
          bookTitle={book.title}
        />
      ))}
    </div>
  )
}

