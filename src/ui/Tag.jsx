const Tag = ({ type, children }) => {
  const colorClasses = {
    blue: {
      text: "text-blue-800",
      bg: "bg-blue-100",
    },
    green: {
      text: "text-green-800",
      bg: "bg-green-100",
    },
    silver: {
      text: "text-gray-800/90",
      bg: "bg-gray-100",
    },
  };

  return (
    <span
      className={`w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase ${
        colorClasses[type]?.text
      } ${colorClasses[type]?.bg}`}
    >
      {children}
    </span>
  );
};

export default Tag;
