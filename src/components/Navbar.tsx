"use client";

import Link from "next/link";
import LoginBtn from "./utils/LoginBtn";
import { useUser } from "@/lib/hooks/useUser";
import Profile from "./Profile";

export default function Navbar() {
  const user = useUser();

  return (
    <div className="flex w-full items-center justify-between p-4 md:py-4 md:px-12 border-b-2 border-neutral-800">
      <Link className="text-lg font-bold" href="/">
        Crossroads
        <span className="font-normal text-neutral-400 ml-2">
          · The Life Sandbox
        </span>
      </Link>
      <div className="flex items-center space-x-6">
        <Link
          href="/scenarios"
          className="hover:text-secondary-foreground hidden sm:block"
        >
          Scenarios
        </Link>
        <Link
          href="/about"
          className="hover:text-secondary-foreground hidden sm:block"
        >
          About
        </Link>
        {user ? <Profile /> : <LoginBtn />}
      </div>
    </div>
  );
}
