"use client"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useCallback, useState } from "react"
import { cn } from "@/lib/utils"
// import { Button } from "./ui/button"

export function Cell() {

  const [mood, setMood] = useState<string>("")

  const handleButtonMad = useCallback(() => {
    setMood("mad")
  }, [])

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div
          className={cn("h-5 w-5 border hover:scale-125 cursor-pointer",
            mood === "mad" && "bg-red-500"
          )} />
      </PopoverTrigger>
      <PopoverContent className="w-fit">
        <button onClick={handleButtonMad}>Mad</button>
        {/* {id} */}
      </PopoverContent>
    </Popover>
  )
}
