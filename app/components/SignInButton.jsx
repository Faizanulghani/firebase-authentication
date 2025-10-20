"use client";
import Link from "next/link";
import { useAuth } from "../lib/contexts/AuthContext";

export const SignInButton = () => {
  const { user, isLoading, error, handleSignInWithGoogle, handleLogout } =
    useAuth();

  if (user) {
    return (
      <div>
        <h1>LoggedIn: </h1>
        <h1>{user?.displayname}</h1>
        <h1>{user?.email}</h1>
        <Link href="/dashboard">
          <button className="underline text-blue-600">Go To Dashboard</button>
        </Link>
      </div>
    );
  }

  return (
    <>
      {error && <p className="text-red-400">{error}</p>}
      <button
        onClick={handleSignInWithGoogle}
        disabled={isLoading}
        className="px-3 py-2 flex gap-2 items-center bg-black text-white rounded-full"
      >
        <img className="h-6" src="/google.png" alt="" />
        <h1>{isLoading ? "Loading..." : "Sign In With Google"}</h1>
      </button>
    </>
  );
};
