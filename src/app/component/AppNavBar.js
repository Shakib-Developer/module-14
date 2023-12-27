"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AppNavBar = () => {
  const router = useRouter();
  const Logout = async () => {
    const response = await fetch("/api/login");
    const json = await response.json();
    if (json["status"] === true) {
      router.replace("/");
    }
  };

  return (
    <div className="w-3/4 mx-auto flex items-center justify-center bg-blue-300 text-white font-medium py-4 text-lg">
      <Link className="mx-4 transition-all hover:text-slate-100" href="/">
        Home
      </Link>
      <button
        className="mx-4 transition-all hover:text-slate-100"
        onClick={Logout}
      >
        Logout
      </button>
    </div>
  );
};

export default AppNavBar;
