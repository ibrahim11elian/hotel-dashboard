import { useSearchParams } from "react-router-dom";

const Filter = ({ filterField, options }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterValue = searchParams.get(filterField) || options[0].value;
  const handleClick = (value) => {
    searchParams.set(filterField, value);
    if (searchParams.get("page")) searchParams.set("page", 1);
    setSearchParams(searchParams);
  };

  return (
    <div className="flex gap-1 rounded-md border border-gray-100 bg-white p-1 shadow-sm">
      {options.map((option) => (
        <FilterButton
          key={option.value}
          onClick={() => handleClick(option.value)}
          active={option.value === filterValue}
          disabled={option.value === filterValue}
        >
          {option.label}
        </FilterButton>
      ))}
    </div>
  );
};

export default Filter;

const FilterButton = ({ children, active, ...props }) => (
  <button
    className={`rounded-md border-none px-2.5 py-1 text-sm font-medium transition-all duration-300 ${
      active ? "bg-blue-600 text-[#f2f2f2]" : "bg-white text-gray-700"
    } capitalize hover:bg-blue-600 hover:text-[#f2f2f2]`}
    {...props}
  >
    {children}
  </button>
);
