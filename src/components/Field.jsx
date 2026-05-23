export function Field({ label, required, children }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="field-label">
        {label} {required && <span className="text-rosa">*</span>}
      </label>
      {children}
    </div>
  )
}

export function Input({ onChange, ...props }) {
  return (
    <input
      className="field-input"
      onChange={onChange}
      {...props}
    />
  )
}

export function Select({ onChange, children, ...props }) {
  return (
    <select className="field-select" onChange={onChange} {...props}>
      {children}
    </select>
  )
}

export function Textarea({ onChange, ...props }) {
  return (
    <textarea
      className="field-textarea"
      onChange={onChange}
      {...props}
    />
  )
}
