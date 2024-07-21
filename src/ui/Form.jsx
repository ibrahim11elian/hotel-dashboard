import classNames from "classnames";

const Form = ({ type = "regular", children, ...props }) => {
  const formClass = classNames(
    "overflow-hidden text-sm", // common classes
    {
      "p-6 bg-white border border-gray-100 rounded-md w-full ":
        type !== "modal",
      "w-[40rem] divide-y": type === "modal",
    },
  );

  return (
    <form className={formClass} {...props}>
      {children}
    </form>
  );
};

export default Form;
