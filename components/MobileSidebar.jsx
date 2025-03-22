const MobileSidebar = ({ mobileSidebarOpen, navList, ActionButtons }) => {
  return (
    <aside
      className={`${
        mobileSidebarOpen
          ? "translate-x-0 opacity-100 z-20"
          : "-translate-x-full opacity-0 z-[-1]"
      } lg:hidden bg-gray-50 shadow px-4 pb-4 text-center fixed z-50 top-14 right-0 w-full transition-all duration-300`}
    >
      <ul className="text-gray-600 space-y-5 text-left">
        {navList.map(({ id, path, label }) => (
          <li
            key={id}
            className="hover:border-b-primary-500 border-b-2 border-transparent transition-all duration-500 cursor-pointer capitalize p-2 rounded"
          >
            <a href={path ?? id}>{label}</a>
          </li>
        ))}
      </ul>
      <div className="lg:hidden justify-center mt-5">
        {/* <ActionButtons /> */}
      </div>
    </aside>
  );
};

export default MobileSidebar;
