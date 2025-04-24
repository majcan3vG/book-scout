import { moodToKeywords } from "@/constants/constants";
import { GoogleBookItem } from "@/types/bookTypes";

const apiKey = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

export async function fetchGoogleBooks() {
  const query = "best books 2024"
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=9&key=${apiKey}`
  );
  const data = await res.json();
  return data.items?.slice(0, 20).map((item: GoogleBookItem) => ({
    id: item.id,
    title: item.volumeInfo.title,
    author: item.volumeInfo.authors?.[0] || "Unknown",
    coverUrl: item.volumeInfo.imageLinks?.thumbnail || '',
    description: item.volumeInfo.description || '',
  })) || [];
}

export async function searchGoogleBooks(search: string) {
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(search)}&key=${apiKey}&maxResults=9`
  );
  const data = await res.json();
  return data.items?.slice(0, 20).map((item: GoogleBookItem) => ({
    id: item.id,
    title: item.volumeInfo.title,
    author: item.volumeInfo.authors?.[0] || "Unknown",
    coverUrl: item.volumeInfo.imageLinks?.thumbnail || '',
    description: item.volumeInfo.description || '',
  })) || [];
}

export const fetchBooksByMood = async (mood: string[]) => {
  const keywords = mood?.join(" ");
  const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(keywords)}&maxResults=9`);
  const data = await res.json();
  return data.items?.slice(0, 20).map((item: GoogleBookItem) => ({
    id: item.id,
    title: item.volumeInfo.title,
    author: item.volumeInfo.authors?.[0] || "Unknown",
    coverUrl: item.volumeInfo.imageLinks?.thumbnail || '',
    description: item.volumeInfo.description || '',
  })) || [];
};
