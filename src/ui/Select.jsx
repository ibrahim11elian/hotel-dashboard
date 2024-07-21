const Select = ({ type, options, handleChange, value, ...props }) => (
  <select
    className={`rounded-md border bg-white p-2 text-base font-medium text-gray-700 shadow-sm ${
      type === "white" ? "border-gray-100" : "border-gray-300"
    } focus:outline-none focus:ring-2 focus:ring-blue-600`}
    {...props}
    value={value}
    onChange={handleChange}
  >
    {options.map(({ value, label }) => (
      <option key={value} value={value}>
        {label}
      </option>
    ))}
  </select>
);

export default Select;
