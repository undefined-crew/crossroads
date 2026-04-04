"use client";

import { auth } from "@/lib/auth/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Button } from "../ui/button";

export default function LoginBtn() {
  const provider = new GoogleAuthProvider();

  function handleSignIn() {
    signInWithPopup(auth, provider)
      .then(() => {
        console.log("User signed in successfully");
      })
      .catch((error) => {
        console.error("Error signing in: ", error);
      });
  }

  return (
    <Button
      onClick={handleSignIn}
      className="cursor-pointer bg-accent-foreground hover:bg-accent-foreground/80 text-primary-foreground text-sm"
    >
      Login
    </Button>
  );
}
