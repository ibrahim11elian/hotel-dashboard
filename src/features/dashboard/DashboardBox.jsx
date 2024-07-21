function DashboardBox({ children, className }) {
  return (
    <div
      className={`${className} border-grey-100 flex flex-col gap-6 rounded-md border bg-white p-8`}
    >
      {children}
    </div>
  );
}

export default DashboardBox;
