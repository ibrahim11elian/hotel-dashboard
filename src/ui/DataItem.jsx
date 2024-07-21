const DataItem = ({ icon, label, children }) => {
  return (
    <div className="flex items-center gap-4 py-2">
      <span className="flex items-center gap-2 font-semibold">
        <span className="text-2xl">{icon}</span>
        <span>{label}</span>
      </span>
      {children}
    </div>
  );
};

export default DataItem;
