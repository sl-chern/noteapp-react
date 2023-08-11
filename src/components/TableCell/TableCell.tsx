export type TableCellProps = {
  children?: React.ReactNode | string,
  className?: string
}

export const TableCell: React.FC<TableCellProps> = ({ children, className }): React.ReactElement => {
  return (
    <div className={`font-openSans font-semibold line-clamp-1 ${className}`}>{children}</div>
  )
}