"use client";

import { auth } from "../auth/firebase";
import { useEffect, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";

export function useUser() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(undefined);
      }
    });

    return unsubscribe;
  }, []);

  return user;
}
