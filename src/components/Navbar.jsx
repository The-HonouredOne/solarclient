import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navigate=useNavigate()

  // active link style
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-green-700"
      : "hover:text-green-700";

  return (
    <header className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

      
        <div className="flex items-center gap-2 cursor-pointer"
        onClick={()=>navigate('/')}>
          <div className="h-8 w-8 rounded-full bg-green-700 flex items-center justify-center text-white font-bold">
            S
          </div>
          <span className="text-xl font-semibold text-green-700">
            Solar
          </span>
        </div>

        
        <nav className="hidden md:flex items-center gap-10 text-gray-700 font-medium">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={linkClass}>
            About Us
          </NavLink>

          <NavLink to="/schems" className={linkClass}>
            Schems
          </NavLink>
        </nav>

        <div className="hidden md:block">
          <button className="rounded-full border border-gray-300 px-6 py-2 text-sm font-medium hover:border-green-700 hover:text-green-700 transition"
          onClick={()=>navigate('/contact')}>
            Contact Us
          </button>
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col px-6 py-4 gap-4 font-medium text-gray-700">
            <NavLink to="/" className={linkClass} onClick={() => setOpen(false)}>
              Home
            </NavLink>

            <NavLink to="/about" className={linkClass} onClick={() => setOpen(false)}>
              About Us
            </NavLink>

            <NavLink to="/projects" className={linkClass} onClick={() => setOpen(false)}>
              Projects
            </NavLink>

            <button className="mt-2 rounded-full border border-gray-300 px-6 py-2 text-sm hover:border-green-700 hover:text-green-700">
              Contact Us
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
