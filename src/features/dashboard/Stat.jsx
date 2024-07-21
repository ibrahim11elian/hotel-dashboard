function Stat({ icon, title, value, color }) {
  const bgColor = `var(--color-${color}-100)`;
  const textColor = `var(--color-${color}-700)`;

  return (
    <div className="grid grid-cols-[4rem_1fr] grid-rows-[auto_auto] gap-x-4 gap-y-1 rounded-md border border-gray-100 bg-white p-4">
      <div
        className="row-span-full flex aspect-square items-center justify-center rounded-full"
        style={{ backgroundColor: bgColor }}
      >
        <div className="text-3xl" style={{ color: textColor }}>
          {icon}
        </div>
      </div>
      <h5 className="self-end text-xs font-semibold uppercase tracking-wide text-gray-500">
        {title}
      </h5>
      <p className="text-2xl font-medium leading-none text-gray-700">{value}</p>
    </div>
  );
}

export default Stat;
