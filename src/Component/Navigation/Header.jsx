

import { useState, useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const activeClass = "text-white bg-blue-500 btn";

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  // theme state
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const links = (
    <>
      {/* Theme Toggle */}
      <label className="swap swap-rotate">
        <input
          type="checkbox"
          onChange={(e) => handleTheme(e.target.checked)}
          checked={theme === "dark"}
        />
        {theme === "light" ? (
          <svg
            className="swap-off h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>
        ) : (
          <svg
            className="swap-on h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        )}
      </label>

      {/* Nav Links */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? activeClass : "btn btn-ghost normal-case"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/bills"
        className={({ isActive }) =>
          isActive ? activeClass : "btn btn-ghost normal-case"
        }
      >
        Bills
      </NavLink>
      {user && (
        <NavLink
          to="/payBills"
          className={({ isActive }) =>
            isActive ? activeClass : "btn btn-ghost normal-case"
          }
        >
          My Pay Bills
        </NavLink>
      )}

      {/* Auth Links */}
      {user ? (
        <div className="relative">
          <img
            referrerPolicy="no-referrer"
            src={
              user?.photoURL
                ? user?.photoURL
                : "https://i.ibb.co/QN5f5Hc/Default-avatar.jpg"
            }
            className="w-10 h-10 rounded-full cursor-pointer border"
            onClick={() => setShowProfile(!showProfile)}
            alt="profile"
          />

          {showProfile && (
            <div className="absolute right-0 mt-2 w-48 shadow-lg rounded-lg p-3 z-50 bg-base-100">
              <p className="font-semibold">{user?.displayName || "User"}</p>
              <p className="text-sm mb-2">{user?.email}</p>

              <button
                onClick={handleLogout}
                className="btn btn-sm bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white w-full"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? activeClass : "btn btn-ghost normal-case"
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive ? activeClass : "btn btn-ghost normal-case"
            }
          >
            Register
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <header className="bg-base-100 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <NavLink to="/">
            <img
              className="w-16 h-16 rounded-[50%]"
              src="/logo-4.jpg"
              alt="site logo"
            />
          </NavLink>
        </div>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-4">{links}</nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="btn btn-ghost" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden shadow-md">
          <div className="flex flex-col gap-2 p-4">{links}</div>
        </nav>
      )}
    </header>
  );
};

export default Header;
