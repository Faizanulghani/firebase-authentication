"use client";

import Link from "next/link";
import { useAuth } from "../lib/contexts/AuthContext";

const DashboardLayout = ({ children }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) return <h3>Loading...</h3>;

  if (!user) {
    return (
      <div>
        <h1>You are not Logged In!</h1>
        <Link href="/login">
          <button className="bg-black text-white px-3 py-2 rounded-full">
            Login
          </button>
        </Link>
      </div>
    );
  }

  return <>{children}</>;
};

export default DashboardLayout;
