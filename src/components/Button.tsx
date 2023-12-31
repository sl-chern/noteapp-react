type ButtonProps = {
  children: React.ReactNode | string,
  className?: string,
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void,
  type: 'submit' | 'button'
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick }): React.ReactElement => {
  return (
    <button className={`bg-transparent border-[1px] border-solid rounded border-light-300 p-2 hover:cursor-pointer flex justify-center items-center font-oswald font-normal text-xl text-light-300 transition-all duration-150 ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button