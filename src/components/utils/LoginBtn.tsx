"use client"

import { auth } from "@/lib/auth/firebase"
import { useEffect, useState } from "react"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import styles from "@/styles/utils/loginBtn.module.css"

export default function LoginBtn() {
  const provider = new GoogleAuthProvider()
  const [username, setUsername] = useState("")

  useEffect(() => {
    console.log("username: ", username)
  }, [username])

  function handleSignIn() {
    signInWithPopup(auth, provider).then((result) => {
      const { displayName } = result.user
      if (displayName) {
        setUsername(displayName)
      }
    }).catch((error) => {
      console.error(error)
    })
  }

  return <div className={styles.loginBtn} onClick={handleSignIn}>Login</div>
}
