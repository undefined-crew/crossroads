"use client"

import Image from "next/image"
import { User } from "firebase/auth"
import LoginBtn from "../utils/LoginBtn"
import { auth } from "@/lib/auth/firebase"
import { useEffect, useRef, useState } from "react"
import styles from "@/styles/ui/profile.module.css"

export default function Profile() {
  const user = auth.currentUser as User
  const displayName = user.displayName
  const avatarUrl = user.photoURL
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => setOpen(prev => !prev)
  const closeMenu = () => setOpen(false)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        closeMenu()
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [open])

  return user ? (
    <div className={styles.profile} ref={menuRef}>
      <Image src={avatarUrl || ""} alt="" width={40} height={40} className={styles.profileImg} onClick={toggleMenu} />
      <div className={`${styles.menu} ${open ? styles.open : styles.closed}`}>
        <div className={`${styles.item} ${styles.disabledItem}`}>
          <span style={{ fontSize: "0.7rem" }}>Logged in as</span><br />
          <span>{displayName}</span>
        </div>
        <hr className={styles.separator} />
        <div style={{ color: "var(--color-red)" }} className={styles.item} onClick={() => auth.signOut()}>Logout</div>
      </div>
    </div>
  ) : <LoginBtn />
}
