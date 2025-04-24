import { customBookItem } from "@/types/bookTypes";
import { useBookStore } from "@/store/bookStore";
import { BookCard } from "./bookCard";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "./ui/dialog";
import { Typography } from "./ui/typography";
import { Button } from "./ui/button";
import AnimatedDiv from "./ui/animatedDiv";

export function BookList() {
  const { books } = useBookStore();

  return (
    <div className="grid grid-cols-3 gap-8">
      {books.map((book: customBookItem, index: number) => (
        <Dialog key={index}>
          <DialogTrigger>
            <AnimatedDiv className="h-full">
              <BookCard
                bookAuthor={book.author}
                bookCoverURL={book.coverUrl}
                bookTitle={book.title}
              />
            </AnimatedDiv>
          </DialogTrigger>
          <DialogContent className="w-full bg-white">
            <DialogHeader>
              <div className="flex flex-row justify-between items-center pt-8">
                <DialogTitle>{book.title}</DialogTitle>
                <Typography text={`Pages: ${book.pageCount}`} className={"font-light text-sm"}/>
              </div>
              <Typography text={book.author} className={"font-light text-sm"}/>
            </DialogHeader>
            <DialogFooter className="grid grid-cols-1 space-y-4">
              <DialogDescription>{book.description}</DialogDescription>
              <div className="flex flex-row justify-end space-x-4">
                <DialogClose>
                  <AnimatedDiv>
                    <Button className="cursor-pointer" variant={'outline'}>Close</Button>
                  </AnimatedDiv>
                </DialogClose>
                <AnimatedDiv>
                  <Button className="bg-[#2A2A32] text-white cursor-pointer">
                    {book.infoLink.length > 0 ?
                      <a
                        href={book.infoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Learn More
                      </a> : null
                    }
                  </Button>
                </AnimatedDiv>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  )
}

