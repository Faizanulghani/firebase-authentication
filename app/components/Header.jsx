"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  let pathName = usePathname();
  console.log(pathName);

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
      <Link
        href="/login"
        className="bg-black text-white px-3 py-2 rounded-full"
      >
        Login
      </Link>
    </nav>
  );
};

export default Header;
