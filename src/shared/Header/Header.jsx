import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../../assets/images/logo.png";
import { BiSearch } from "react-icons/bi";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import { useState } from "react";
import { useCallback } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, []);
  return (
    <div className="flex justify-between items-center">
      {/* aircnc logo */}
      <div>
        <img className="w-32" src={Logo} alt="" />
      </div>
      <div>
        {/* search bar */}
        <div className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
          <div className="flex flex-row items-center justify-between">
            <div className="text-sm font-semibold px-6">Anywhere</div>
            <div className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center">
              Any Week
            </div>
            <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
              <div className="hidden sm:block">Add Guests</div>
              <div className="p-2 bg-rose-500 rounded-full text-white">
                <BiSearch size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* menu button */}
        <div className="relative">
          <div className="flex flex-row items-center gap-3">
            <div className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer">
              AirCNC your home
            </div>
            <div
              onClick={toggleOpen}
              className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
            >
              <AiOutlineMenu />
              <div className="hidden md:block">
                {/* <Avatar /> */}
              </div>
            </div>
          </div>
          {isOpen && (
            <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
              <div className="flex flex-col cursor-pointer">
                <Link
                  to="/"
                  className="block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Home
                </Link>
                {user ? (
                  <div
                    onClick={logOut}
                    className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
                  >
                    Logout
                  </div>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
