const HamburgerIcon = ({ isOpen, className, ...rest }) => {
  return (
    <div
      {...rest}
      className={`relative w-8 h-[21px] cursor-pointer ${className}`}
    >
      <div
        className={`absolute left-0 w-full h-1 bg-gray-500 rounded-md duration-300 ${
          isOpen
            ? "top-1/2 -translate-y-1/2 rotate-45"
            : "top-0 translate-y-0 rotate-0"
        }`}
      />
      <div
        className={`absolute top-1/2 left-0 -translate-y-1/2 w-full h-1 bg-gray-500 rounded-md duration-300 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        className={`absolute left-0 w-full h-1 bg-gray-500 rounded-md duration-300 ${
          isOpen
            ? "bottom-1/2 translate-y-1/2 -rotate-45"
            : "bottom-0 translate-y-0 rotate-0"
        }`}
      />
    </div>
  );
};

export default HamburgerIcon;
