import React from "react";

const Textarea = React.forwardRef(function text(props, ref) {
  return (
    <textarea
      ref={ref}
      className="h-32 w-full rounded border border-gray-200 bg-white p-2 text-gray-800 shadow-sm ring-blue-600 focus:outline-none focus:ring-2"
      {...props}
    />
  );
});

export default Textarea;
