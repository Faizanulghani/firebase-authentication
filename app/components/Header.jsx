"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "../lib/contexts/AuthContext";

const Header = () => {
  let pathName = usePathname();
  let { user, handleLogout } = useAuth();

  let getPathName = () => {
    if (pathName === "/login") return "Login";
    if (pathName === "/dashboard") return "Dashboard";
    return "My App";
  };
  return (
    <nav className="flex justify-between p-4 border-b">
      <div className="flex gap-2 items-center">
        <img src="/logo.jpg" className="h-9" alt="" />
        <h1 className="font-bold">{getPathName()}</h1>
      </div>
      <div className="flex items-center gap-2">
        {user && <Link href="/dashboard">{user?.displayName}</Link>}
        {user && (
          <button
            onClick={handleLogout}
            className="bg-black text-white px-3 py-2 rounded-full"
          >
            Logout
          </button>
        )}
        {!user && (
          <Link
            href="/login"
            className="bg-black text-white px-3 py-2 rounded-full"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
