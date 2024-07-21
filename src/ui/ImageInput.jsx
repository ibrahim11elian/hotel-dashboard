import React from "react";

const ImageInput = React.forwardRef(function inputFile(
  { children, ...restOfProps },
  ref,
) {
  return (
    <div className="flex items-center gap-2">
      {children}
      <input
        ref={ref}
        type="file"
        className="text-sm text-slate-500 file:mr-4 file:rounded-full file:border-0 file:bg-indigo-100 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-indigo-700 hover:file:bg-indigo-100"
        {...restOfProps}
      />
    </div>
  );
});

function Image({ img, alt, title }) {
  return (
    <img
      id="preview_img"
      className="h-16 w-16 rounded-full object-cover"
      src={img}
      alt={alt || "photo"}
      title={title}
    />
  );
}

ImageInput.Image = Image;

export default ImageInput;
