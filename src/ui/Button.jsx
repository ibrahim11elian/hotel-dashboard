import classNames from "classnames";

const sizeClasses = {
  small: "text-xs px-2 py-1 font-semibold uppercase text-center w-full",
  medium: "text-sm px-4 py-3 font-medium",
  large: "text-base px-6 py-3 font-medium",
};

const variationClasses = {
  primary: "text-[white] bg-blue-600 hover:bg-blue-500",
  secondary:
    "text-gray-600 bg-gray-50 border border-gray-200 hover:bg-gray-100",
  danger: "text-red-100 bg-red-700 hover:bg-red-800",
};

const Button = ({
  size = "medium",
  variation = "primary",
  children,
  ...props
}) => {
  const buttonClass = classNames(
    "inline-block rounded  disabled:cursor-not-allowed", // common classes
    sizeClasses[size],
    variationClasses[variation],
  );

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
