type ButtonProps = {
  children: React.ReactNode | string,
  className?: string,
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Button({ children, className, onClick }: ButtonProps) {
  return (
    <button className={`bg-transparent border-[1px] border-solid rounded border-light-300 p-2 hover:cursor-pointer flex justify-center items-center font-oswald font-normal text-xl text-light-300 transition-all duration-150 ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}