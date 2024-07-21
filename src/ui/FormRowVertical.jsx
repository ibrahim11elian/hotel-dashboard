function FormRowVertical({ label, error, children }) {
  return (
    <div className="flex flex-col justify-center gap-2 py-3 first:pt-1 last:pb-0">
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
export default FormRowVertical;

function Error({ children }) {
  return <div className="text-red-700">{children}</div>;
}
