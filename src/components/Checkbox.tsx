type CheckboxProps = {
  label: string,
  onChange: () => void
}

export default function Checkbox({ label, onChange }: CheckboxProps) {
  return (
    <label className="font-openSans text-light-300 font-semibold flex items-center gap-2">
      <input className="show-all" type="checkbox" onChange={onChange}/>
      {label}
    </label>
  )
}
