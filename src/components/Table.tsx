import { Context } from "../context/context"
import { IContext } from "../models/IContext"

type TableProps = {
  children: React.ReactNode,
  columns?: string | null,
  className?: string
}

const Table: React.FC<TableProps> = ({ children, columns = null, className }): React.ReactElement => {
  const context: IContext = { columns }

  return (
    <Context.Provider value={context}>
      <div className={`flex flex-col w-full gap-2 ${className}`}>
        {children}
      </div>
    </Context.Provider>
  )
}

export default Table