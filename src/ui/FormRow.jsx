export function FormRow({ label, error, children }) {
  return (
    <div className="grid grid-cols-[1fr_1fr_1.2fr] items-center gap-6 border-gray-100 py-3 first:pt-1 last:pb-0">
      {label && (
        <label
          htmlFor={children.props.id}
          className="font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      {children}
      {error && <Error>{error}</Error>}
    </div>
  );
}

function Error({ children }) {
  return <div className="text-red-700">{children}</div>;
}
