import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo_Header.png";
const menuItems = [
  { path: "/about", label: "会社概要" },
  { path: "/service", label: "事業内容" },
  { path: "/recruit", label: "採用情報" },
  { path: "/contact", label: "お問い合わせ" },
];

const MenuItems = () => {
  useEffect(() => {
    document.querySelectorAll(".nav-link").forEach((navLink) => {
      const text = navLink.textContent.trim().split("");
      navLink.innerHTML =
        "<div>" +
        text.map((letter) => `<span>${letter}</span>`).join("") +
        "</div>";
    });
  }, []);

  return menuItems.map((item, index) => (
    <li key={index}>
      <NavLink
        to={item.path}
        activeClassName="bg-red-500 text-white"
        className="nav-link inline-block bg-red-500   hover:bg-red-300 p-4 mx-2 transition duration-300 ease-in-out "
      >
        {item.label}
      </NavLink>
    </li>
  ));
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [header, setHeader] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setHeader(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      <div className={`drawer drawer-end ${isOpen ? "open" : ""}`}>
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div
            className={`${
              header
                ? "bg-blue-950 text-white shadow-lg py-3"
                : "bg-transparent shadow-none py-5"
            } fixed w-full max-w-full mx-auto  transition-all duration-300  navbar  z-10`}
          >
            <div className="flex-none lg:hidden">
              {/* Hamburger Icon */}
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
                onClick={toggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className={`inline-block w-6 h-6 stroke-current ${
                    isOpen ? "open" : ""
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      isOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">Navbar Title</div>
            <div className="flex-none hidden lg:block z-10">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                <MenuItems />
              </ul>
            </div>
          </div>
          {/* Page content here */}
          {/* Content */}
        </div>
        <div className="drawer-side z-20  ">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
            onClick={toggleMenu}
          />
          <ul className="menu p-4 w-80 min-h-full bg-white text-black">
            <MenuItems />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
