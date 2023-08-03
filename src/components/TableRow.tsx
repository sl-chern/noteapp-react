import { useColumnsContext } from "../context/context"

type TableRowProps = {
  children: React.ReactNode
}

const TableRow: React.FC<TableRowProps> = ({ children }): React.ReactElement => {
  const  { columns } = useColumnsContext()

  const style: React.CSSProperties = {
    gridTemplateColumns: columns || 'none'
  }

  return (
    <div style={style} className="grid justify-between items-center gap-2">{children}</div>
  )
}

export default TableRow