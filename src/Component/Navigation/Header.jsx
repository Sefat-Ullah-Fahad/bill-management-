// import { use, useState } from "react";
// import { NavLink } from "react-router";
// import { AuthContext } from "../../Context/AuthContext";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   // Tailwind class for active link
//   const activeClass = "text-white bg-blue-500 btn";

//   const {user} = use(AuthContext)


//   const links = (
//     <>
//       <NavLink
//         to="/"
//         className={({ isActive }) =>
//           isActive ? activeClass : "btn btn-ghost normal-case"
//         }
//       >
//         Home
//       </NavLink>
//       <NavLink
//         to="/bills"
//         className={({ isActive }) =>
//           isActive ? activeClass : "btn btn-ghost normal-case"
//         }
//       >
//         Bills
//       </NavLink>

//       <NavLink
//         to="/payBills"
//         className={({ isActive }) =>
//           isActive ? activeClass : "btn btn-ghost normal-case"
//         }
//       >
//         My Pay Bills
//       </NavLink>


//         {
//           user ?    <button
//        // তোমার logout function
//       className="btn btn-ghost normal-case"
//     >
//       LogOut
//     </button>: <><NavLink
//         to="/login"
//         className={({ isActive }) =>
//           isActive ? activeClass : "btn btn-ghost normal-case"
//         }
//       >
//         Login
//       </NavLink>
//       <NavLink
//         to="/register"
//         className={({ isActive }) =>
//           isActive ? activeClass : "btn btn-ghost normal-case"
//         }
//       >
//         Register
//       </NavLink></> 

//         }

        


//     </>
//   );

//   return (
//     <header className="bg-white shadow-md sticky top-0 z-50">
//       <div className="container mx-auto flex justify-between items-center p-4">
//         {/* Logo */}
//         <div className="text-2xl font-bold text-gray-800">
//           <NavLink to="/">
//             <img className="w-14 h-14" src="/public/logo.jpg" alt="" />
//           </NavLink>
//         </div>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex items-center gap-4">{links}</nav>

//         {/* Mobile Hamburger */}
//         <div className="md:hidden">
//           <button className="btn btn-ghost" onClick={() => setIsOpen(!isOpen)}>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <nav className="md:hidden bg-white shadow-md">
//           <div className="flex flex-col gap-2 p-4">{links}</div>
//         </nav>
//       )}
//     </header>
//   );
// };

// export default Header;














// import { useState, useContext } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../Context/AuthContext";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showProfile, setShowProfile] = useState(false);

//   const { user, logOut } = useContext(AuthContext);
//   const navigate = useNavigate();

//   console.log(user)

//   // Tailwind class for active link
//   const activeClass = "text-white bg-blue-500 btn";

//   const handleLogout = async () => {
//     try {
//       await logOut();
//       navigate("/");
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const links = (
//     <>
//       <NavLink
//         to="/"
//         className={({ isActive }) =>
//           isActive ? activeClass : "btn btn-ghost normal-case"
//         }
//       >
//         Home
//       </NavLink>

//       <NavLink
//         to="/bills"
//         className={({ isActive }) =>
//           isActive ? activeClass : "btn btn-ghost normal-case"
//         }
//       >
//         Bills
//       </NavLink>

//       <NavLink
//         to="/payBills"
//         className={({ isActive }) =>
//           isActive ? activeClass : "btn btn-ghost normal-case"
//         }
//       >
//         My Pay Bills
//       </NavLink>

//       {/* If user logged in */}
//       {user ? (
//         <div className="relative">
//           {/* Avatar */}
//           <img
//             src={user?.photoURL || "https://i.ibb.co/QN5f5Hc/Default-avatar.jpg"}
//             className="w-10 h-10 rounded-full cursor-pointer border"
//             onClick={() => setShowProfile(!showProfile)}
//           />

//           {/* Dropdown */}
//           {showProfile && (
//             <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-3 z-50">
//               <p className="font-semibold">{user.displayName}</p>
//               <p className="text-sm text-gray-600 mb-2">{user.email}</p>

//               <button
//                 onClick={handleLogout}
//                 className="btn btn-sm btn-error w-full"
//               >
//                 Logout
//               </button>
//             </div>
//           )}
//         </div>
//       ) : (
//         <>
//           <NavLink
//             to="/login"
//             className={({ isActive }) =>
//               isActive ? activeClass : "btn btn-ghost normal-case"
//             }
//           >
//             Login
//           </NavLink>

//           <NavLink
//             to="/register"
//             className={({ isActive }) =>
//               isActive ? activeClass : "btn btn-ghost normal-case"
//             }
//           >
//             Register
//           </NavLink>
//         </>
//       )}
//     </>
//   );

//   return (
//     <header className="bg-white shadow-md sticky top-0 z-50">
//       <div className="container mx-auto flex justify-between items-center p-4">
//         {/* Logo */}
//         <div className="text-2xl font-bold text-gray-800">
//           <NavLink to="/">
//             <img className="w-14 h-14" src="/public/logo.jpg" alt="" />
//           </NavLink>
//         </div>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex items-center gap-4">{links}</nav>

//         {/* Mobile Hamburger */}
//         <div className="md:hidden">
//           <button className="btn btn-ghost" onClick={() => setIsOpen(!isOpen)}>
//             ☰
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <nav className="md:hidden bg-white shadow-md">
//           <div className="flex flex-col gap-2 p-4">{links}</div>
//         </nav>
//       )}
//     </header>
//   );
// };

// export default Header;















import { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  console.log(user)

  const activeClass = "text-white bg-blue-500 btn";

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  const links = (
    <>
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

      <NavLink
        to="/payBills"
        className={({ isActive }) =>
          isActive ? activeClass : "btn btn-ghost normal-case"
        }
      >
        My Pay Bills
      </NavLink>

      {user ? (
        <div className="relative">
          <img
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
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-3 z-50">
              <p className="font-semibold">{user?.displayName || "User"}</p>
              <p className="text-sm text-gray-600 mb-2">{user?.email}</p>

              <button
                onClick={handleLogout}
                className="btn btn-sm btn-error w-full"
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
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <NavLink to="/">
            <img className="w-14 h-14" src="/logo.jpg" alt="site logo" />
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
        <nav className="md:hidden bg-white shadow-md">
          <div className="flex flex-col gap-2 p-4">{links}</div>
        </nav>
      )}
    </header>
  );
};

export default Header;
