type TableBodyProps = {
  children: React.ReactNode
}

export default function TableBody({ children }: TableBodyProps) {
  return (
    <div className="[&>div]:bg-transparent [&>div]:rounded [&>div]:p-2 [&_div]:text-light-300 [&>div]:border-solid [&>div]:border-[1px] [&>div]:border-light-300 flex flex-col gap-2">{children}</div>
  )
}