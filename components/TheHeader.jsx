import { useState } from "react";

import MobileSidebar from "./MobileSidebar";
import { NAV_LIST } from "./constant";
import HamburgerIcon from "./HamburgerIcon";
import Button from "./Button";

const TheHeader = ({ ActionButtons, headerClasses, className = "" }) => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <>
      <header
        className={`shadow ${headerClasses} w-full sticky top-0 z-50 bg-[#021452]/95 backdrop-blur-2xl shadow-2xl`}
      >
        <section className="">
          <div
            className={"flex w-full justify-between items-center py-6 px-12 "}
          >
            <div className="h-7 xl:h-9">
              <a href="/">
                <img
                  src="/Frame 404.png"
                  alt="Logo"
                  className="size-full"
                  loading="lazy"
                />
              </a>
            </div>
            <nav className="max-lg:hidden">
              <ul className="flex items-center gap-6 text-white ">
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
            <Button
              className={` px-10 py-[14px] bg-[#FF693B] text-white text-[14px] rounded-sm leading-[20px] text-center font-medium hidden lg:inline-block `}
            >
              See Pricing
            </Button>

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
