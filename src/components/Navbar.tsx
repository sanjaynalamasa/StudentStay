// import React, { useState } from 'react';
// import { Menu, X, User, Home, List, Info, MessageSquare, Repeat } from 'lucide-react';
// import { Link, useLocation } from 'react-router-dom';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   const isActive = (path: string) => location.pathname === path;

//   const navLinks = [
//     { path: '/', label: 'Home', icon: Home },
//     { path: '/listings', label: 'Listings', icon: List },
//     { path: '/reviews', label: 'Reviews', icon: MessageSquare },
//     { path: '/room-swap', label: 'Room Swap', icon: Repeat },
//     { path: '/about', label: 'About', icon: Info },
//   ];

//   return (
//     <nav className="bg-white shadow-md relative z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           <Link to="/" className="flex items-center">
//             <span className="text-2xl font-bold text-indigo-600">StudentStay</span>
//           </Link>
          
//           <div className="hidden md:flex items-center space-x-8">
//             {navLinks.map(({ path, label }) => (
//               <Link
//                 key={path}
//                 to={path}
//                 className={`${
//                   isActive(path)
//                     ? 'text-indigo-600 font-semibold'
//                     : 'text-gray-700 hover:text-indigo-600'
//                 }`}
//               >
//                 {label}
//               </Link>
//             ))}
//             <div className="flex items-center space-x-4">
//               <Link
//                 to="/landlord/signin"
//                 className="text-gray-700 hover:text-indigo-600"
//               >
//                 Landlord Portal
//               </Link>
//               <Link
//                 to="/signin"
//                 className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600"
//               >
//                 <User size={20} />
//                 <span>Sign In</span>
//               </Link>
//             </div>
//           </div>
          
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-700 hover:text-indigo-600"
//             >
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <div
//         className={`${
//           isOpen ? 'block' : 'hidden'
//         } md:hidden absolute top-16 inset-x-0 bg-white shadow-lg`}
//       >
//         <div className="px-2 pt-2 pb-3 space-y-1">
//           {navLinks.map(({ path, label, icon: Icon }) => (
//             <Link
//               key={path}
//               to={path}
//               className={`${
//                 isActive(path)
//                   ? 'bg-indigo-50 text-indigo-600'
//                   : 'text-gray-700 hover:bg-gray-50'
//               } flex items-center px-3 py-2 rounded-md text-base font-medium`}
//               onClick={() => setIsOpen(false)}
//             >
//               <Icon size={20} className="mr-2" />
//               {label}
//             </Link>
//           ))}
//           <Link
//             to="/landlord/signin"
//             className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
//             onClick={() => setIsOpen(false)}
//           >
//             <Home size={20} className="mr-2" />
//             Landlord Portal
//           </Link>
//           <Link
//             to="/signin"
//             className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
//             onClick={() => setIsOpen(false)}
//           >
//             <User size={20} className="mr-2" />
//             Sign In
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



















// import React, { useState } from 'react';
// import { Menu, X, User, Home, List, Info, MessageSquare, Repeat } from 'lucide-react';
// import { Link, useLocation } from 'react-router-dom';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   const isActive = (path) => location.pathname === path;

//   const navLinks = [
//     { path: '/', label: 'Home', icon: Home },
//     { path: '/listings', label: 'Listings', icon: List },
//     { path: '/reviews', label: 'Reviews', icon: MessageSquare },
//     { path: '/room-swap', label: 'Room Swap', icon: Repeat },
//     { path: '/about', label: 'About', icon: Info },
//   ];

//   return (
//     <nav className="bg-white shadow-md fixed top-0 inset-x-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           <Link to="/" className="flex items-center">
//             <span className="text-2xl font-bold text-indigo-600">StudentStay</span>
//           </Link>

//           <div className="hidden md:flex items-center space-x-8">
//             {navLinks.map(({ path, label }) => (
//               <Link
//                 key={path}
//                 to={path}
//                 className={`${
//                   isActive(path)
//                     ? 'text-indigo-600 font-semibold'
//                     : 'text-gray-700 hover:text-indigo-600'
//                 }`}
//               >
//                 {label}
//               </Link>
//             ))}
//             <div className="flex items-center space-x-4">
//               <Link
//                 to="/landlord/signin"
//                 className="text-gray-700 hover:text-indigo-600"
//               >
//                 Landlord Portal
//               </Link>
//               <Link
//                 to="/signin"
//                 className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600"
//               >
//                 <User size={20} />
//                 <span>Sign In</span>
//               </Link>
//             </div>
//           </div>

//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-700 hover:text-indigo-600"
//             >
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <div
//         className={`${
//           isOpen ? 'block' : 'hidden'
//         } md:hidden absolute top-16 inset-x-0 bg-white shadow-lg`}
//       >
//         <div className="px-2 pt-2 pb-3 space-y-1">
//           {navLinks.map(({ path, label, icon: Icon }) => (
//             <Link
//               key={path}
//               to={path}
//               className={`${
//                 isActive(path)
//                   ? 'bg-indigo-50 text-indigo-600'
//                   : 'text-gray-700 hover:bg-gray-50'
//               } flex items-center px-3 py-2 rounded-md text-base font-medium`}
//               onClick={() => setIsOpen(false)}
//             >
//               <Icon size={20} className="mr-2" />
//               {label}
//             </Link>
//           ))}
//           <Link
//             to="/landlord/signin"
//             className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
//             onClick={() => setIsOpen(false)}
//           >
//             <Home size={20} className="mr-2" />
//             Landlord Portal
//           </Link>
//           <Link
//             to="/signin"
//             className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
//             onClick={() => setIsOpen(false)}
//           >
//             <User size={20} className="mr-2" />
//             Sign In
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;









import React, { useState } from 'react';
import { Menu, X, User, Home, List, Info, MessageSquare, Repeat } from 'lucide-react';
import { Link, useLocation, Outlet } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/listings', label: 'Listings', icon: List },
    { path: '/reviews', label: 'Reviews', icon: MessageSquare },
    { path: '/room-swap', label: 'Room Swap', icon: Repeat },
    { path: '/about', label: 'About', icon: Info },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-indigo-600">StudentStay</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`${
                  isActive(path)
                    ? 'text-indigo-600 font-semibold'
                    : 'text-gray-700 hover:text-indigo-600'
                }`}
              >
                {label}
              </Link>
            ))}
            <div className="flex items-center space-x-4">
              <Link
                to="/landlord/signin"
                className="text-gray-700 hover:text-indigo-600"
              >
                Landlord Portal
              </Link>
              <Link
                to="/signin"
                className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600"
              >
                <User size={20} />
                <span>Sign In</span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden absolute top-16 inset-x-0 bg-white shadow-lg`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map(({ path, label, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              className={`${
                isActive(path)
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-gray-700 hover:bg-gray-50'
              } flex items-center px-3 py-2 rounded-md text-base font-medium`}
              onClick={() => setIsOpen(false)}
            >
              <Icon size={20} className="mr-2" />
              {label}
            </Link>
          ))}
          <Link
            to="/landlord/signin"
            className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            <Home size={20} className="mr-2" />
            Landlord Portal
          </Link>
          <Link
            to="/signin"
            className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
            onClick={() => setIsOpen(false)}
          >
            <User size={20} className="mr-2" />
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

const Layout = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main className="mt-16 px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;




































