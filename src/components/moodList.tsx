import { moodToKeywords } from "@/constants/constants";
import { Badge } from "./ui/badge";
import { fetchBooksByMood, fetchGoogleBooks, getRelatedWord } from "@/lib/googleBooksApi";
import { useBookStore } from "@/store/bookStore";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

function MoodList() {
  const {
    curentMood,
    setBooks,
    setCurrentMood,
    setLoading,
    setSearchTerm
  } = useBookStore();

  const handleClick = async ( mood: string) => {
    setLoading(true);
    let fetched;
    setSearchTerm(undefined);
    if (mood === curentMood) {
      setCurrentMood(null);
      fetched = await fetchGoogleBooks();
    } else {
      setCurrentMood(mood);
      const moodWords = await getRelatedWord(mood);
      fetched = await fetchBooksByMood(moodWords);
    }
    setBooks(fetched);
    setLoading(false);
  }

  return (
    <div className="flex flex-row px-4">
      <div className="flex flex-row w-full max-w-small items-center justify-center-safe space-x-2">
        {Object.keys(moodToKeywords).map((key) => (
          <Button
            className="bg-opacity-0"
            onClick={() => handleClick(key)}
          >
            <Badge
              variant={"secondary"}
              className={cn(
                "items-center justify-center rounded-full text-sm pb-1.25 pr-2.5 bg-gray-200 border-2 border-gray-200",
                key !== curentMood && "hover:cursor-pointer hover:bg-white hover:text-[#77aaff] hover:border-[#77aaff] hover:border-2",
                "active:bg-gray-400 active:text-[#131313]",
                key === curentMood ? 'border-amber-500 border-2 bg-[#2A2A32] text-amber-500' : '',
              )}
            >
              {moodToKeywords[key].symbol + key}
            </Badge>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default MoodList;