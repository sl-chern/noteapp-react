type TableHeadProps = {
  children: React.ReactNode
}

export default function TableHead({ children }: TableHeadProps) {
  return (
    <div className="[&>div]:bg-light-300 [&>div]:rounded [&>div]:p-2 [&_p]:text-dark-200 gap-2 flex flex-col">{children}</div>
  )
}