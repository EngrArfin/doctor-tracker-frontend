import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "@/assets/icons/logo.svg";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa6";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Jobs", path: "/jobs" },
  { label: "Post Job", path: "/post-job" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const socialLinks = [
  { href: "#", label: "Facebook", icon: () => <FaFacebook /> },
  { href: "#", label: "Twitter", icon: () => <FaLinkedin /> },
  { href: "#", label: "LinkedIn", icon: () => <FaYoutube /> },
];

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex gap-8 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-gray-700 hover:text-blue-600 transition-colors font-medium ${
                  isActive ? "text-blue-600" : ""
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex gap-4">
          <Link to="/join">
            <Button
              variant="outline"
              className="px-6 py-2 border border-[#D4DDDB] cursor-pointer"
            >
              Sign in
            </Button>
          </Link>
          <Link to="/jobs">
            <Button className="px-6 py-2 bg-blue-600 text-white hover:bg-blue-700 cursor-pointer">
              Find a job
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600"
          >
            {isMenuOpen ? (
              <AiOutlineClose className="text-2xl" />
            ) : (
              <HiOutlineMenuAlt2 className="text-2xl" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-y-0 right-0 z-50 w-4/5 max-w-xs bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-[#D4DDDB]">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
            <Button
              variant="ghost"
              className=" cursor-pointer"
              size="icon"
              onClick={() => setIsMenuOpen(false)}
            >
              <AiOutlineClose className="text-2xl text-gray-600 cursor-pointer" />
            </Button>
          </div>

          {/* Links */}
          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 text-lg font-medium hover:text-blue-600 transition-colors"
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Buttons */}
          <div className="p-6 border-t border-[#D4DDDB] flex flex-col gap-4">
            <Link to="/join">
              <Button
                variant="outline"
                className="w-full py-2 border border-[#D4DDDB]"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign in
              </Button>
            </Link>
            <Link to="/jobs">
              <Button
                className="w-full py-2 bg-blue-600 text-white hover:bg-blue-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Find a job
              </Button>
            </Link>
          </div>

          {/* Socials */}
          <div className="p-4 flex justify-center gap-4 border-t border-[#D4DDDB]">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-15 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition"
                aria-label={label}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/30 z-40 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default NavBar;

// import { useState } from "react";
// import logo from "@/assets/tomslive/Icon/Logo1.svg";
// import Container from "@/common/Container";
// import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import { navLinks } from "./navLinks";
// import { Button } from "@/components/ui/button";
// import { X } from "lucide-react";
// import { HiOutlineMenuAlt2 } from "react-icons/hi";
// import { AiOutlineCloseCircle } from "react-icons/ai";
// import { socialLinks } from "../Footer/footerLinks";
// import { Link } from "react-router-dom";
// import { LinkButton } from "../LinkButton";
// import { useAppSelector } from "@/redux/hooks/redux-hook";
// import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { useAppDispatch } from "@/hooks/useRedux";
// // import { useLogout } from "@/hooks/useLogout";
// import { logOut } from "@/redux/features/auth/authSlice";
// import { toast } from "sonner";

// const hiddenNavbarRoutes = ["/join", "/login", "/signup", "/forgot-password"];

// const NavBar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { pathname } = useLocation();
//   const dispatch = useAppDispatch();
// //   const { logout } = useLogout();
//   const navigator = useNavigate();
//   const user = useAppSelector((state) => state.auth.user);

//   if (hiddenNavbarRoutes.some((route) => pathname.startsWith(route))) {
//     return null;
//   }

//   const handelLogout = async () => {
//     try {
//     //   await logout();
//       dispatch(logOut());
//       navigator("/");
//       setIsMenuOpen(false);
//       toast.success("Logout successfully");
//     } catch (error) {
//       console.log(error);
//       toast.error("Something went wrong");
//     }
//   };

//   const filteredNavLinks = navLinks.filter((link) => {
//     if (link.label === "Post job" && user?.role === "USER") {
//       return false;
//     }
//     return true;
//   });

//   return (
//     <nav className="sticky top-0 z-50 shadow bg-white">
//       <Container className="flex items-center justify-between md:py-4 py-4 lg:py-4">
//         {/* Left: Logo */}
//         <div className="w-1/4">
//           <Link to={"/"} className="flex w-fit items-center gap-2">
//             <img src={logo} alt="FarmLink Logo" className="h-8 w-auto" />
//           </Link>
//         </div>

//         {/* Center: Nav Links */}
//         <div className="hidden lg:flex justify-center gap-8 flex-1">
//           {filteredNavLinks.map((link) => (
//             <NavLink
//               key={link.path}
//               to={link.path}
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-primary-blue font-medium text-lg"
//                   : "text-[#6B7280] text-lg hover:text-primary-blue transition-colors"
//               }
//             >
//               {link.label}
//             </NavLink>
//           ))}
//         </div>

//         {/* Right: Buttons - Show on md and above */}
//         <div className="hidden lg:flex gap-4 w-1/4 justify-end">
//           {user ? (
//             <>
//               {user.role === "USER" && (
//                 <LinkButton variant="primary" to="/my-account/applications">
//                   My Account
//                 </LinkButton>
//               )}

//               {user.role === "FARM_OWNER" && (
//                 <DropdownMenu>
//                   <DropdownMenuTrigger asChild>
//                     <div className="flex justify-between items-center gap-5 rounded-2xl cursor-pointer hover:bg-gray-50 transition-colors">
//                       <div className="flex items-center gap-3">
//                         {user?.profilePictureUrl ? (
//                           <img
//                             src={user.profilePictureUrl}
//                             alt="user"
//                             className="w-12 h-12 rounded-full"
//                           />
//                         ) : (
//                           <div className="bg-[#205CA5] size-12 rounded-full flex items-center justify-center text-xl text-white">
//                             <span>
//                               {user?.name?.slice(0, 2)?.toUpperCase()}
//                             </span>
//                           </div>
//                         )}
//                         <div className="hidden xl:block">
//                           <h2 className="text-xl font-semibold whitespace-nowrap capitalize text-[#101312]">
//                             {user?.name}
//                           </h2>
//                           <p className="text-paragraph-secondary-gray">
//                             Recruiter
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </DropdownMenuTrigger>

//                   <DropdownMenuContent
//                     align="end"
//                     className="bg-white w-60 shadow-lg rounded-xl border border-gray-200 p-2"
//                   >
//                     <NavLink to="/owner-dashboard/settings">
//                       {({ isActive }) => (
//                         <DropdownMenuItem
//                           className={`px-4  py-3 border-none hove:border-none mb-1 cursor-pointer rounded-lg text-base font-medium transition-colors ${
//                             isActive
//                               ? "bg-blue-400 text-white"
//                               : "text-gray-700 hover:bg-[#205CA5] hover:text-white"
//                           }`}
//                         >
//                           Settings
//                         </DropdownMenuItem>
//                       )}
//                     </NavLink>
//                     <NavLink to="/owner-dashboard">
//                       {({ isActive }) => (
//                         <DropdownMenuItem
//                           className={`px-4 py-3 mb-1 border-none hove:border-none cursor-pointer rounded-lg text-base font-medium transition-colors ${
//                             isActive
//                               ? "bg-blue-400 text-white"
//                               : "text-gray-700 hover:bg-[#205CA5] hover:text-white"
//                           }`}
//                         >
//                           Dashboard
//                         </DropdownMenuItem>
//                       )}
//                     </NavLink>
//                     <DropdownMenuItem className="border-none hove:border-none">
//                       <button
//                         onClick={handelLogout}
//                         className="w-full px-4 py-3 mb-1 cursor-pointer flex justify-start rounded-lg text-base font-medium text-destructive transition-colors hover:bg-[#FCECEE] border-none shadow-none"
//                       >
//                         Sign Out
//                       </button>
//                     </DropdownMenuItem>
//                   </DropdownMenuContent>
//                 </DropdownMenu>
//               )}

//               {user.role === "SUPER_ADMIN" && (
//                 <DropdownMenu>
//                   <DropdownMenuTrigger asChild>
//                     <div className="flex justify-between items-center gap-5 rounded-2xl cursor-pointer hover:bg-gray-50 transition-colors">
//                       <div className="flex items-center gap-3">
//                         {user?.profilePictureUrl ? (
//                           <img
//                             src={user.profilePictureUrl}
//                             alt="user"
//                             className="w-12 h-12 rounded-full"
//                           />
//                         ) : (
//                           <div className="bg-[#205CA5] size-12 rounded-full flex items-center justify-center text-xl text-white">
//                             <span>
//                               {user?.name?.slice(0, 2)?.toUpperCase()}
//                             </span>
//                           </div>
//                         )}
//                         <div className="hidden xl:block">
//                           <h2 className="text-xl font-semibold whitespace-nowrap capitalize text-[#101312]">
//                             {user?.name}
//                           </h2>
//                           <p className="text-paragraph-secondary-gray">Admin</p>
//                         </div>
//                       </div>
//                     </div>
//                   </DropdownMenuTrigger>

//                   <DropdownMenuContent
//                     align="end"
//                     className="bg-white w-60 shadow-lg rounded-xl border border-gray-200 p-2"
//                   >
//                     <NavLink to="/admin-dashboard/settings">
//                       {({ isActive }) => (
//                         <DropdownMenuItem
//                           className={`px-4 py-3 mb-1 cursor-pointer rounded-lg text-base font-medium transition-colors border-none hover:border-none ${
//                             isActive
//                               ? "bg-blue-400 text-white"
//                               : "text-gray-700 hover:bg-[#205CA5] hover:text-white"
//                           }`}
//                         >
//                           Settings
//                         </DropdownMenuItem>
//                       )}
//                     </NavLink>
//                     <NavLink to="/admin-dashboard">
//                       {({ isActive }) => (
//                         <DropdownMenuItem
//                           className={`px-4 py-3 mb-1 cursor-pointer rounded-lg text-base font-medium transition-colors border-none hover:border-none ${
//                             isActive
//                               ? "bg-blue-400 text-white"
//                               : "text-gray-700 hover:bg-[#205CA5] hover:text-white"
//                           }`}
//                         >
//                           Dashboard
//                         </DropdownMenuItem>
//                       )}
//                     </NavLink>
//                     <DropdownMenuItem className="border-none hover:border-none">
//                       <button
//                         onClick={handelLogout}
//                         className="w-full px-4 py-3 mb-1 cursor-pointer flex justify-start rounded-lg text-base font-medium text-gray-700 transition-colors hover:bg-[#FCECEE] border-none shadow-none"
//                       >
//                         Sign Out
//                       </button>
//                     </DropdownMenuItem>
//                   </DropdownMenuContent>
//                 </DropdownMenu>
//               )}
//             </>
//           ) : (
//             <>
//               <Link to="/join">
//                 <Button className="px-6 py-5 lg:px-8" variant="outline">
//                   Sign in
//                 </Button>
//               </Link>

//               <LinkButton
//                 to="/jobs"
//                 className="px-6 py-5 lg:px-8"
//                 variant="primary"
//               >
//                 Find a job
//               </LinkButton>
//             </>
//           )}
//         </div>

//         <div className="flex lg:hidden items-center gap-2">
//           {/* Mobile Buttons - Only show on small screens */}
//           <div className="hidden sm:flex gap-2">
//             {user ? (
//               <>
//                 {user.role === "USER" && (
//                   <LinkButton variant="primary" to="/my-account/applications">
//                     My Account
//                   </LinkButton>
//                 )}

//                 {(user.role === "FARM_OWNER" ||
//                   user.role === "SUPER_ADMIN") && (
//                   <DropdownMenu>
//                     <DropdownMenuTrigger asChild>
//                       <div className="flex items-center gap-2 p-2 rounded-2xl cursor-pointer hover:bg-gray-50 transition-colors">
//                         <div className="flex items-center gap-2">
//                           {user?.profilePictureUrl ? (
//                             <img
//                               src={user.profilePictureUrl}
//                               alt="user"
//                               className="size-8 rounded-full"
//                             />
//                           ) : (
//                             <div className="bg-[#205CA5] size-8 rounded-full flex items-center justify-center text-sm text-white">
//                               <span>
//                                 {user?.name?.slice(0, 2)?.toUpperCase()}
//                               </span>
//                             </div>
//                           )}
//                           <div className="hidden md:block">
//                             <h2 className="text-sm font-semibold whitespace-nowrap capitalize text-[#101312]">
//                               {user?.name?.length > 15
//                                 ? `${user.name.substring(0, 12)}...`
//                                 : user?.name}
//                             </h2>
//                             <p className="text-xs text-paragraph-secondary-gray">
//                               {user.role === "FARM_OWNER"
//                                 ? "Recruiter"
//                                 : "Admin"}
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </DropdownMenuTrigger>

//                     <DropdownMenuContent
//                       align="end"
//                       className="bg-white w-60 shadow-lg rounded-xl border border-gray-200 p-2"
//                     >
//                       <NavLink to="/owner-dashboard/settings">
//                         {({ isActive }) => (
//                           <DropdownMenuItem
//                             className={`px-4 py-3 mb-1 border-none hover:border-none cursor-pointer rounded-lg text-base font-medium transition-colors ${
//                               isActive
//                                 ? "bg-blue-400 text-white"
//                                 : "text-gray-700 hover:bg-[#205CA5] hover:text-white"
//                             }`}
//                           >
//                             Settings
//                           </DropdownMenuItem>
//                         )}
//                       </NavLink>
//                       <NavLink to="/owner-dashboard">
//                         {({ isActive }) => (
//                           <DropdownMenuItem
//                             className={`px-4 py-3 mb-1 border-none hover:border-none cursor-pointer rounded-lg text-base font-medium transition-colors ${
//                               isActive
//                                 ? "bg-blue-400 text-white"
//                                 : "text-gray-700 hover:bg-[#205CA5] hover:text-white"
//                             }`}
//                           >
//                             Dashboard
//                           </DropdownMenuItem>
//                         )}
//                       </NavLink>
//                       <DropdownMenuItem className="border-none hover:border-none">
//                         <button
//                           onClick={handelLogout}
//                           className="w-full px-4 py-3 mb-1 cursor-pointer flex justify-start rounded-xl text-base font-medium cursor-pointer text-destructive transition-colors hover:bg-[#FCECEE] border-none shadow-none"
//                         >
//                           Sign Out
//                         </button>
//                       </DropdownMenuItem>
//                     </DropdownMenuContent>
//                   </DropdownMenu>
//                 )}
//               </>
//             ) : (
//               <>
//                 <Link to="/join">
//                   <Button className="px-4 py-3" variant="outline">
//                     Sign in
//                   </Button>
//                 </Link>

//                 <LinkButton to="/jobs" className="px-4 py-3" variant="primary">
//                   Find a job
//                 </LinkButton>
//               </>
//             )}
//           </div>

//           {/* Mobile Menu Button */}
//           <Button
//             variant="ghost"
//             size="icon"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="text-[#7a7a7a]"
//           >
//             {isMenuOpen ? (
//               <AiOutlineCloseCircle className="size-6 md:size-8" />
//             ) : (
//               <HiOutlineMenuAlt2 className="size-6 md:size-8" />
//             )}
//           </Button>
//         </div>
//       </Container>

//       {/* Mobile Menu - slides from right */}
//       <div
//         className={`lg:hidden fixed inset-y-0 right-0 z-50 w-full max-w-[90%] md:max-w-[45%] bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
//           isMenuOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="flex flex-col h-full">
//           {/* Header with close button */}
//           <div className="flex w-full justify-between p-4 border-b border-border-primary">
//             <div className="flex items-center gap-2">
//               <img src={logo} alt="FarmLink Logo" className="h-8 w-auto" />
//             </div>
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={() => setIsMenuOpen(false)}
//               className="size-7 md:size-8 bg-blue-200 text-[#3d3d3d]"
//             >
//               <X className="size-4 md:size-5 text-gray-500" />
//             </Button>
//           </div>

//           {/* User Profile Info - Only show when logged in */}
//           {user && (
//             <div className="p-6 border-b border-border-primary">
//               <div className="flex items-center gap-4">
//                 {user?.profilePictureUrl ? (
//                   <img
//                     src={user.profilePictureUrl}
//                     alt="user"
//                     className="size-16 rounded-full"
//                   />
//                 ) : (
//                   <div className="bg-[#205CA5] size-16 rounded-full flex items-center justify-center text-2xl text-white">
//                     <span>{user?.name?.slice(0, 2)?.toUpperCase()}</span>
//                   </div>
//                 )}
//                 <div>
//                   <h2 className="text-xl font-semibold capitalize text-[#101312]">
//                     {user?.name}
//                   </h2>
//                   <p className="text-paragraph-secondary-gray">
//                     {user.role === "USER"
//                       ? "Job Seeker"
//                       : user.role === "FARM_OWNER"
//                       ? "Recruiter"
//                       : "Admin"}
//                   </p>
//                 </div>
//               </div>

//               {/* User-specific buttons in mobile menu */}
//               <div className="mt-4 flex flex-col gap-3">
//                 {user.role === "USER" && (
//                   <LinkButton
//                     variant="primary"
//                     to="/my-account/applications"
//                     onClick={() => setIsMenuOpen(false)}
//                     className="w-full"
//                   >
//                     My Account
//                   </LinkButton>
//                 )}

//                 {(user.role === "FARM_OWNER" ||
//                   user.role === "SUPER_ADMIN") && (
//                   <>
//                     <Button
//                       variant="outline"
//                       className="w-full"
//                       onClick={() => {
//                         setIsMenuOpen(false);
//                         navigator(
//                           user.role === "FARM_OWNER"
//                             ? "/owner-dashboard"
//                             : "/admin-dashboard"
//                         );
//                       }}
//                     >
//                       Dashboard
//                     </Button>
//                     <Button
//                       variant="outline"
//                       className="w-full"
//                       onClick={() => {
//                         setIsMenuOpen(false);
//                         navigator(
//                           user.role === "FARM_OWNER"
//                             ? "/owner-dashboard/settings"
//                             : "/admin-dashboard/settings"
//                         );
//                       }}
//                     >
//                       Settings
//                     </Button>
//                   </>
//                 )}

//                 <Button
//                   variant="destructive"
//                   className="w-full"
//                   onClick={handelLogout}
//                 >
//                   Sign Out
//                 </Button>
//               </div>
//             </div>
//           )}

//           {/* Navigation Links */}
//           <div className="flex-1 overflow-y-auto p-6">
//             <div className="flex flex-col md:space-y-4">
//               {filteredNavLinks.map((link) => (
//                 <NavLink
//                   key={link.path}
//                   to={link.path}
//                   onClick={() => setIsMenuOpen(false)}
//                   className={({ isActive }) =>
//                     isActive
//                       ? "text-primary-blue font-medium text-base md:text-xl py-2 border-l-3 border-primary-blue pl-3"
//                       : "text-[#6B7280] text-base md:text-xl py-2 pl-4 hover:text-primary-blue transition-colors"
//                   }
//                 >
//                   {link.label}
//                 </NavLink>
//               ))}
//             </div>
//           </div>

//           {/* Buttons at bottom - Only show when NOT logged in */}
//           {!user && (
//             <div className="p-6 border-t border-border-primary flex flex-col gap-5">
//               <div className="flex md:hidden flex-col space-y-4">
//                 <Link to="/join">
//                   <Button
//                     className="w-full py-4"
//                     variant="outline"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     Sign in
//                   </Button>
//                 </Link>

//                 <Button
//                   className="w-full py-4"
//                   variant="primary"
//                   onClick={() => {
//                     setIsMenuOpen(false);
//                     navigator("/jobs");
//                   }}
//                 >
//                   Find a job
//                 </Button>
//               </div>
//               <div className="text-base flex justify-around">
//                 {socialLinks.map(({ href, icon: Icon, label }) => (
//                   <a
//                     key={label}
//                     target="_blank"
//                     href={href}
//                     aria-label={label}
//                     className="bg-white w-9 h-9 border flex items-center justify-center rounded-xl text-[#205CA5]"
//                   >
//                     <Icon />
//                   </a>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Overlay when menu is open */}
//       {isMenuOpen && (
//         <div
//           className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
//           onClick={() => setIsMenuOpen(false)}
//         />
//       )}
//     </nav>
//   );
// };

// export default NavBar;
