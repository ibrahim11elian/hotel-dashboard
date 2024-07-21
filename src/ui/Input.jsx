import React from "react";

const Input = React.forwardRef(function input(props, ref) {
  return (
    <input
      className="rounded-md border border-gray-200 bg-white p-2 text-gray-900 shadow-sm ring-blue-600 focus:outline-none focus:ring-2 disabled:bg-gray-200"
      {...props}
      ref={ref}
    />
  );
});

export default Input;
