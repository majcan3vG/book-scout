import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useBookStore } from '@/store/bookStore';
import { fetchGoogleBooks, searchGoogleBooks } from '@/lib/googleBooksApi';
import { BookIcon } from "./icons/bookIcon";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { isNotValidSearchTerm } from "@/helpers/bookHelpers";

function Header() {
  const {
    searchTerm,
    setBooks,
    setCurrentMood,
    setLoading,
    setSearchTerm
  } = useBookStore();

  const handleGoHome = async () => {
    setLoading(true);
    setCurrentMood(null);
    const books = await fetchGoogleBooks();
    setBooks(books);
    setLoading(false);
  };

  const handleSearch = async () => {
    setCurrentMood(null);
    if (isNotValidSearchTerm(searchTerm, 2)) {
      toast.warning('Cannot use this search term',{
        description: "Please try again.",
        actionButtonStyle: { backgroundColor: "hsl(31, 92%, 45%)", },
        action: {
          label: "Close",
          onClick: () => console.log("Closing toast..."),
        },
      });
      setSearchTerm(undefined);
    } else if (searchTerm) {
      setLoading(true);
      const books = await searchGoogleBooks(searchTerm);
      setBooks(books);
      setLoading(false);
    } else {
      toast.error('Could not search for books. Please try again.',{
        actionButtonStyle: { backgroundColor: "hsl(360, 100%, 45%)", },
        action: {
          label: "Close",
          onClick: () => console.log("Closing toast..."),
        },
      });
    }
  };

  return (
    <div className="flex flex-row p-4">
      <div className="flex flex-row w-full max-w-small items-center justify-between">
        <div
          className="flex flex-row items-center align-middle space-x-[-1px] space-y-[-2.5px] cursor-pointer"
          onClick={handleGoHome}
        >
          <BookIcon />
          <Typography className={"text-white"} text={"Book Scout"} />
        </div>
        <div className="flex flex-row items-center align-middle space-x-2">
          <Input
            className="w-100 bg-white text-[#3F3F46] font-semibold"
            type="search"
            placeholder="Search"
            value={searchTerm ? searchTerm : ''}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
          <Button
            className={cn(
              "bg-white text-[#3F3F46]",
              "hover:cursor-pointer hover:bg-gray-300 hover:text-[#2A2A32]",
              "active:bg-gray-400 active:text-[#131313]"
            )}
            onClick={handleSearch}
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Header;