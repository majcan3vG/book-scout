import { cn } from "@/lib/utils";
import { BookIcon } from "./icons/bookIcon";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

type BookCardProps = {
  bookAuthor: string | undefined;
  bookCoverURL: string | undefined;
  bookTitle: string;
};

export function BookCard({
  bookAuthor,
  bookCoverURL,
  bookTitle
}: BookCardProps) {
  return (
    <Card className={cn(
      "w-[350px] h-full bg-gray-200 border-2 border-gray-200 justify-between",
      "group hover:bg-white hover:cursor-pointer hover:border-4 hover:border-[#77aaff]",
      "active:bg-[#00695C] active:border-[#00695C]",
    )}>
      <CardHeader>
          <div className="flex items-center justify-center">
            {bookCoverURL ?
              <img src={bookCoverURL} alt={bookTitle} className="rounded-md h-full" /> :
              <div className="p-14"><BookIcon color={"#2A2A32"} width={60} height={60} /></div>
            }
          </div>
      </CardHeader>
      <CardContent>
        <CardTitle className="truncate pb-2 text-[#00695C] group-hover:text-[#77aaff]">{bookTitle}</CardTitle>
        <CardDescription className="text-[#65656b] group-hover:text-[#2A2A32]">{bookAuthor}</CardDescription>
      </CardContent>
    </Card>
  );
}
