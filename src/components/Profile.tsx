"use client";

import { auth } from "@/lib/auth/firebase";
import { User } from "firebase/auth";
import { useEffect, useRef, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import LoginBtn from "./utils/LoginBtn";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function Profile() {
  const user = auth.currentUser as User;
  const displayName = user.displayName;
  const avatarUrl = user.photoURL;
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        closeMenu();
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [open]);

  return user ? (
    <DropdownMenu>
      <DropdownMenuTrigger className="mr-4 cursor-pointer">
        <Avatar>
          <AvatarImage src={avatarUrl || ""} />
          <AvatarFallback>{displayName?.charAt(0)}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64">
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer">
            <div className="flex flex-col">
              <span className="font-medium">Logged in as</span>
              <span className="text-sm text-neutral-500">
                {user.displayName}
              </span>
            </div>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            variant="destructive"
            onClick={() => auth.signOut()}
            className="cursor-pointer"
          >
            Logout
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    <LoginBtn />
  );
}
