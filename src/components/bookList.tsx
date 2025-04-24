import { customBookItem } from "@/types/bookTypes";
import { useBookStore } from "@/store/bookStore";
import { BookCard } from "./bookCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "./ui/dialog";
import { Typography } from "./ui/typography";
import { Button } from "./ui/button";
import { useState } from "react";

export function BookList() {
  const { books } = useBookStore();

  return (
    <div className="grid grid-cols-3 gap-8 mt-8">
      {books.map((book: customBookItem) => (
        <Dialog>
          <DialogTrigger asChild>
            <div className={"min-h-auto"}>
              <BookCard
                bookAuthor={book.author}
                bookCoverURL={book.coverUrl}
                bookTitle={book.title}
              />
            </div>
          </DialogTrigger>
          <DialogContent className="w-full">
            <DialogHeader>
              <div className="flex flex-row justify-between items-center pt-8">
                <DialogTitle>{book.title}</DialogTitle>
                <Typography text={`Pages: ${book.pageCount}`} className={"font-light text-sm"}/>
              </div>
              <Typography text={book.author} className={"font-light text-sm"}/>
            </DialogHeader>
            <DialogFooter>
              <div className="flex flex-col space-y-4 items-center">
                <DialogDescription>{book.description}</DialogDescription>
                <div className="flex flex-row w-full items-center justify-between">
                  <Button variant={'outline'}>Close</Button>
                  <Button asChild>
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
                </div>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  )
}

