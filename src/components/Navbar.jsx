import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const navItems = [
  {
    route: "会社概要",
    pathname: "/about",
  },
  {
    route: "事業内容",
    pathname: "/service",
  },
  {
    route: "採用情報",
    pathname: "/recruit",
  },
  {
    route: "お問い合わせ",
    pathname: "/contact",
  },
];

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

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <div className={`drawer drawer-end ${isOpen ? "open" : ""}`}>
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div
            className={`${
              header
                ? "bg-blue-950 text-white shadow-lg py-3"
                : "bg-transparent shadow-none py-5"
            } fixed w-full max-w-full mx-auto z-auto transition-all duration-300  navbar `}
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
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                {navItems.map((item, index) => (
                  <li key={index} className="mr-4">
                    <Link
                      className="cursor-pointer border px-3 rounded-xl hover:bg-red-50 hover:text-black"
                      onClick={() => scrollToSection(item.pathname)}
                      to={item.pathname}
                    >
                      {item.route}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Page content here */}
          {/* Content */}
        </div>
        <div className="drawer-side ">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
            onClick={toggleMenu}
          />
          <ul className="menu p-4 w-80 min-h-full bg-white text-black">
            {/* Sidebar content here */}
            {navItems.map((item, index) => (
              <li key={index} className="mb-4">
                <Link href={item.pathname}>{item.route}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
