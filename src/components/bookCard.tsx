import { cn } from "@/lib/utils";
import { BookIcon } from "./icons/bookIcon";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

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
    <Card
      className={cn(
        "w-[350px] h-full bg-gray-200 border-2 border-gray-200 justify-between",
        "group hover:bg-white hover:cursor-pointer hover:border-4 hover:border-[#77aaff]",
      )}
    >
      <CardHeader>
        <Avatar className="flex justify-center items-center">
          <AvatarImage className={"rounded-xl size-36"} src={bookCoverURL} />
          <AvatarFallback><BookIcon color={"#2A2A32"} width={60} height={60} /></AvatarFallback>
        </Avatar>
      </CardHeader>
      <CardContent>
        <CardTitle className="truncate pb-2 text-[#00695C] group-hover:text-[#77aaff]">{bookTitle}</CardTitle>
        <CardDescription className="text-[#65656b] group-hover:text-[#2A2A32]">{bookAuthor}</CardDescription>
      </CardContent>
    </Card>
  );
}
