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
      "w-[350px] min-h-auto bg-[#2A2A32] border-[#2A2A32] drop-shadow-md drop-shadow-gray-700",
      "hover:bg-[#414150] hover:cursor-pointer hover:border-[#414150]",
      "active:bg-[#00695C] active:border-[#00695C]",
    )}>
      <CardHeader>
          <div className="flex items-center justify-center">
            {bookCoverURL ?
              <img src={bookCoverURL} alt={bookTitle} className="rounded-md h-full" /> :
              <div className="p-14"><BookIcon width={60} height={60} /></div>
            }
          </div>
      </CardHeader>
      <CardContent>
        <CardTitle className="truncate pb-2 text-white">{bookTitle}</CardTitle>
        <CardDescription className="text-[#A1A1AA]">{bookAuthor}</CardDescription>
      </CardContent>
    </Card>
  );
}
