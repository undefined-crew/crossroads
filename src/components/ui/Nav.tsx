import Link from "next/link"
import LoginBtn from "../utils/LoginBtn"
import styles from "@/styles/ui/nav.module.css"

export default function Nav() {
  return (
    <div className={styles.nav}>
      <Link href="/" style={{ fontSize: "1.15rem" }}>
        <span style={{ fontWeight: 700 }}>Crossroads</span>
        <span style={{ color: "var(--color-secondary)" }}> · The Life Sandbox</span>
      </Link>
      <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
        <Link href="/scenarios" className={styles.navLink}>Scenarios</Link>
        <Link href="/about" className={styles.navLink}>About</Link>
        <LoginBtn />
      </div>
    </div>
  )
}
