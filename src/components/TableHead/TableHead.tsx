export type TableHeadProps = {
  children: React.ReactNode
}

export const TableHead: React.FC<TableHeadProps> = ({ children }): React.ReactElement => {
  return (
    <div className="[&>div]:bg-light-300 [&>div]:rounded [&>div]:p-2 [&_p]:text-dark-200 gap-2 flex flex-col">{children}</div>
  )
}