import { useState, useEffect } from "react";
import logo from "../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const TopNavigation = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [navBg, setNavBg] = useState("#black");
  const [darkEnabled, setDarkEnabled] = useDarkMode();
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const themeToggler = () => setDarkEnabled(!darkEnabled);

  return (
    <div
      className={sidebarOpen ? "w-full h-screen bg-orange-200 md:bg-black" : ""}
    >
      <div className="fixed w-full h-[120px] bg-black dark:bg-orange-200 rounded-b-2xl">
        <div className="flex items-center justify-between  place-items-center mx-10  ">
          <div className=" hover:scale-110 ease-in duration-300 ">
            <Image
              onClick={themeToggler}
              className=" cursor-pointer"
              src={logo}
              width={120}
              height={120}
              alt="/"
            />
          </div>
          <div>
            <ul
              style={{ color: "white" }}
              className=" text-white hidden md:flex"
            >
              <Link href="/">
                <li className=" text-sm ml-10 uppercase hover:border-b">
                  Home
                </li>
              </Link>
              <Link href="/">
                <li className=" text-sm ml-10 uppercase hover:border-b">
                  Shop New Arrivals
                </li>
              </Link>
              <Link href="/">
                <li className=" text-sm ml-10 uppercase hover:border-b">
                  About Us
                </li>
              </Link>
            </ul>
            <div
              onClick={toggleSidebar}
              className="md:hidden dark:text-cyan-200 text-pink-400"
            >
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          sidebarOpen ? "md:hidden fixed right-0 top-0 w-full h-screen" : ""
        }
      >
        <div
          className={
            sidebarOpen
              ? "fixed  right-0 top-0 w-[75%] sm:w-[60%] p-[40px] ease-in duration-500 h-screen bg-white"
              : "fixed left-[-100%]"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <div
                onClick={toggleSidebar}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="my-4">
              <Link href="/">
                <li onClick={toggleSidebar} className="w-[85%] md:w-[90%] py-4">
                  Home
                </li>
              </Link>
              <Link href="/">
                <li onClick={toggleSidebar} className="w-[85%] md:w-[90%] py-4">
                  About Me
                </li>
              </Link>
              <Link href="/">
                <li onClick={toggleSidebar} className="w-[85%] md:w-[90%] py-4">
                  Contact
                </li>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
};

const useDarkMode = () => {
  const [enabled, setEnabled] = useLocalStorage("dark-theme");
  const isEnabled = typeof enabledState === "undefined" && enabled;

  useEffect(() => {
    const className = "dark";
    const bodyClass = window.document.body.classList;

    isEnabled ? bodyClass.add(className) : bodyClass.remove(className);
  }, [enabled, isEnabled]);

  return [enabled, setEnabled];
};
export default TopNavigation;
