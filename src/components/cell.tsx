"use client"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
// import { Button } from "./ui/button"



export function Cell({ id }: { id: number }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="h-4 w-4 rounded border hover:scale-125 cursor-pointer"></div>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        {id}
      </PopoverContent>
    </Popover>
  )
}
