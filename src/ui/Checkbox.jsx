function Checkbox({ checked, onChange, disabled = false, id, children }) {
  return (
    <div className="flex gap-4 rounded-md bg-white px-8 py-5">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={`origin-0 h-6 w-6 transform outline-offset-2 ${
          disabled ? "accent-brand-600" : "accent-blue-600"
        }`}
      />
      <label
        htmlFor={!disabled ? id : ""}
        className="flex flex-1 items-center gap-2 text-gray-700"
      >
        {children}
      </label>
    </div>
  );
}

export default Checkbox;
