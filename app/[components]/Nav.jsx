import React from "react";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

const Nav = async () => {
  const session = await getServerSession(options);
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">My site</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/" className="no-underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/CreateUser" className="no-underline">
              CreateUser
            </Link>
          </li>
          <li>
            <Link href="/ClientMember" className="no-underline">
              ClientMember
            </Link>
          </li>
          <li>
            <Link href="/Member" className="no-underline">
              Member
            </Link>
          </li>
          <li>
            <Link href="/Public" className="no-underline">
              Public
            </Link>
          </li>

          {session ? (
            <li>
              <Link
                href="/api/auth/signout?callbackUrl=/"
                className="no-underline"
              >
                Logout
              </Link>
            </li>
          ) : (
            <li>
              <Link href="/api/auth/signin" className="no-underline">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Nav;

// <nav className="bg-gray-800 py-4">
//   <div className="max-w-7xl mx-auto px-4">
//     <div className="flex justify-between items-center">
//       <div className="flex-shrink-0">
//         <Link href="/">
//           <span className="text-white font-bold text-lg cursor-pointer">
//             Your Logo
//           </span>
//         </Link>
//       </div>
//       <div className="flex">
//         <Link href="/">
//           <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
//             Home
//           </span>
//         </Link>
//         <Link href="/CreateUser">
//           <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
//             CreateUser
//           </span>
//         </Link>
//         <Link href="/ClientMember">
//           <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
//             ClientMember
//           </span>
//         </Link>
//         <Link href="/Member">
//           <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
//             Member
//           </span>
//         </Link>
//       </div>
//     </div>
//   </div>
// </nav>
