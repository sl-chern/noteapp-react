import { useColumnsContext } from "../../context/context"

export type TableRowProps = {
  children: React.ReactNode
}

export const TableRow: React.FC<TableRowProps> = ({ children }): React.ReactElement => {
  const  { columns } = useColumnsContext()

  const style: React.CSSProperties = {
    gridTemplateColumns: columns || 'auto'
  }

  return (
    <div style={style} className="grid justify-between items-center gap-2">{children}</div>
  )
}