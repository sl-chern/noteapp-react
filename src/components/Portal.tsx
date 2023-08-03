import ReactDOM from "react-dom"

type PortalProps = {
  children: React.ReactNode
}

const root = document.getElementById('modals')

const Portal: React.FC<PortalProps> = ({children}): React.ReactNode => {
  return root
    ? ReactDOM.createPortal(<>{children}</>, root)
    : null
}

export default Portal