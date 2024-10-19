import { Cell } from "@/components/cell"

export default function page() {
  return (
    <div className="grid grid-cols-53 w-fit">
      {
        Array.from({ length: 365 }).map((_, index: number) =>
          <Cell key={index + 1} />
        )
      }
    </div>
  )
}