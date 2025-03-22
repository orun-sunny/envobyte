import { useState } from "react";

import MobileSidebar from "./MobileSidebar";
import { NAV_LIST } from "./constant";
import HamburgerIcon from "./HamburgerIcon";

const TheHeader = ({ ActionButtons, headerClasses, className = "" }) => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <>
      <header
        className={`shadow ${headerClasses} w-full sticky top-0 z-50 bg-[#021452]/95 backdrop-blur-2xl shadow-2xl`}
      >
        <section className="container">
          <div
            className={`flex w-full justify-between items-center py-4 ${className}`}
          >
            <div className="h-7 xl:h-9">
              <a href="/">
                <img
                  src="/Logo.png"
                  alt="Logo"
                  className="size-full"
                  loading="lazy"
                />
              </a>
            </div>
            <nav className="max-lg:hidden">
              <ul className="flex items-center gap-6 text-gray-500 hover:*:text-primary-500">
                {NAV_LIST.map(({ id, path, label, hasDropDown = true }) => (
                  <li key={id}>
                    <a href={path ?? id} className="max-md:text-xs">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            {/* Render action buttons */}
            {/* <ActionButtons className="max-lg:hidden" /> */}

            <HamburgerIcon
              className="lg:hidden"
              isOpen={mobileSidebarOpen}
              onClick={() => setMobileSidebarOpen((prev) => !prev)}
            />
          </div>
        </section>
      </header>
      {/* Render MobileSidebar */}
      <MobileSidebar
        mobileSidebarOpen={mobileSidebarOpen}
        navList={NAV_LIST}
        ActionButtons={ActionButtons}
      />
    </>
  );
};

export default TheHeader;
