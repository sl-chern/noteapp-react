type TableCellProps = {
  children?: React.ReactNode | string,
  className?: string
}

export default function TableCell({ children, className }: TableCellProps) {
  return (
    <div className={`font-openSans font-semibold line-clamp-1 ${className}`}>{children}</div>
  )
}