const CustomButton = ({
  children,
  secondary = false,
  spanned = false,
  action,
}) => {
  return (
    <button
      className={`border border-gray-300 px-10 py-6 text-center text-2xl font-bold ${
        secondary ? "text-white bg-orange-500" : "text-gray-900 bg-slate-200"
      } ${spanned ? "col-span-2" : ""} `}
      onClick={action}
    >
      {children}
    </button>
  );
};

export default CustomButton;
