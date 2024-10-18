import { Cell } from "@/components/cell"


const rows = [1, 2, 3, 4, 5]

export default function page() {
  return (
    <div className="grid grid-cols-5 w-fit gap-1">
      {
        rows.map((row: number) =>
          <Cell id={row} key={row} />
        )
      }
    </div>
  )
}
