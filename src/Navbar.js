import React, { useState } from "react";
import Link from "./components/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "Products", path: "/products" },
    { id: 3, name: "Orders", path: "/orders" },
    { id: 4, name: "Contact", path: "/contact" },
  ];
  return (
    <nav className="bg-purple-300 w-full">
      <div
        onClick={() => setToggle(!toggle)}
        className="h-6 w-6 text-blue-500 md:hidden"
      >
        {toggle ? <XMarkIcon /> : <Bars3Icon />}
      </div>
      <ul
        className={`bg-purple-300 w-full md:flex justify-center absolute duration-500 ease-out md:static ${
          toggle ? "top-6" : "top-[-120px]"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
