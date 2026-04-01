import Nav from "@/components/ui/Nav"
import ChatSection from "@/components/main/ChatSection"
import styles from "@/styles/main/page.module.css"

export default function Home() {
  return (
    <div className={styles.main}>
      <Nav />
      <div className={styles.hero}>
        <ChatSection />
      </div>
    </div>
  )
}
