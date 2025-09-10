import { useState } from "react";
import { RiMenuFold3Fill, RiMenuFold4Fill } from "react-icons/ri";
import BrainPage from "../../../../public/BrainPage.png";

const Header = () => {
  const [menuDisplay, setMenuDisplay] = useState<boolean>(false);

  return (
    <>
      {/* Desktop Header */}
      {/* bg-secondary for some pages */}
      <header className="hidden md:flex flex-row justify-between py-2 px-10 items-center">
        <h3 className="text-xl font-bold flex flex-row items-center gap-x-2">
          <span>
            <img src={BrainPage} alt="Brain Page Logo" className="w-14" />
          </span>
          Brain Page
        </h3>
        <div className="flex flex-row gap-10 items-center">
          <a
            href="#"
            className="border rounded-md px-2 py-1 bg-primary border-cardBorder hover:text-textSecondary"
          >
            Features
          </a>
          <a href="#" className="hover:text-textSecondary">
            Pricing
          </a>
          <a href="#" className="hover:text-textSecondary">
            About
          </a>
          <a href="#" className="hover:text-textSecondary">
            Contact
          </a>
        </div>
        <div className="flex flex-row gap-3 items-center">
          <a href="#" className="hover:text-textSecondary">
            Login
          </a>
          <a
            href="#"
            className="rounded-md px-2 py-1 bg-primary border border-cardBorder hover:text-textSecondary hover:border-textSecondary w-full"
          >
            Sign Up
          </a>
        </div>
      </header>

      {/* Tablet + mobile Header */}
      <header className="md:hidden flex flex-col px-5 gap-y-2">
        <div className="flex flex-row justify-between items-center">
          <h3 className="text-xl font-bold flex flex-row items-center gap-x-2">
            <span>
              <img src={BrainPage} alt="Brain Page Logo" className="w-14" />
            </span>
            Brain Page
          </h3>
          <div>
            {menuDisplay ? (
              <RiMenuFold4Fill
                onClick={() => setMenuDisplay(false)}
                className="cursor-pointer text-2xl"
              />
            ) : (
              <RiMenuFold3Fill
                onClick={() => setMenuDisplay(true)}
                className="cursor-pointer text-2xl"
              />
            )}
          </div>
        </div>

        {/* Animated Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out
            ${
              menuDisplay
                ? "max-h-[500px] opacity-100 mb-3"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div className="flex flex-col w-full gap-2 mt-2">
            <a
              href="#"
              className="border rounded-md px-2 py-1 bg-primary border-cardBorder hover:text-textSecondary hover:border-textSecondary"
            >
              Features
            </a>
            <a href="#" className="hover:text-textSecondary">
              Pricing
            </a>
            <a href="#" className="hover:text-textSecondary">
              About
            </a>
            <a href="#" className="hover:text-textSecondary">
              Contact
            </a>
          </div>

          <div className="bg-gradient-to-l from-secondary to-secondary via-cardBorder py-[0.3px] mx-5 my-3"></div>

          <div className="flex flex-row gap-3 w-full">
            <a
              href="#"
              className="rounded-md px-2 py-1 bg-primary border border-cardBorder hover:text-textSecondary hover:border-textSecondary w-full"
            >
              Log In
            </a>
            <a
              href="#"
              className="rounded-md px-2 py-1 bg-primary border border-cardBorder hover:text-textSecondary hover:border-textSecondary w-full"
            >
              Sign Up
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
