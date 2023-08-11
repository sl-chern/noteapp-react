import ReactDOM from "react-dom"

export type PortalProps = {
  children: React.ReactNode
}

const root = document.getElementById('modals')

export const Portal: React.FC<PortalProps> = ({children}): React.ReactNode => {
  return root
    ? ReactDOM.createPortal(<>{children}</>, root)
    : null
}