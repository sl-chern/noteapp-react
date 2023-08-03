type CheckboxProps = {
  label: string,
  onChange: () => void
}

const Checkbox: React.FC<CheckboxProps> = ({ label, onChange }): React.ReactElement => {
  return (
    <label className="font-openSans text-light-300 font-semibold flex items-center gap-2">
      <input className="show-all" type="checkbox" onChange={onChange}/>
      {label}
    </label>
  )
}

export default Checkbox