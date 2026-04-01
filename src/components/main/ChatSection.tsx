import PromptBox from "../ui/PromptBox"
import styles from "@/styles/main/chatSection.module.css"

export default function ChatSection() {
  return (
    <div className={styles.chatSection}>
      <div style={{ color: "var(--color-placeholder)", fontSize: "0.9em", fontWeight: 600 }}>LIFE SKILLS SIMULATOR</div>
      <div style={{ fontSize: "1.75em" }}>Real Life does not come with a <span className={styles.manual}>manual.</span></div>
      <div style={{ color: "var(--color-secondary)", fontSize: "0.9em", lineHeight: "1.2rem" }}>
        Pick a scenario or describe your own. Crossroads generates an interactive panel story with real choices and consequences.
      </div>
      <PromptBox />
      <div style={{ borderTop: "3px solid var(--border-color)", borderRadius: 5 }} />
      <div style={{ fontSize: "0.85em", color: "var(--color-placeholder)" }}>HOW IT WORKS</div>
      <ol className={styles.steps}>
        <li>
          <span className={styles.number}>01</span>
          <div>Describe a situation or pick a scenario from the right</div>
        </li>
        <li>
          <span className={styles.number}>02</span>
          <div>AI generates comic panels with a narrative and decision point</div>
        </li>
        <li>
          <span className={styles.number}>03</span>
          <div>Make your choice, see the consequence, learn what to actually do</div>
        </li>
      </ol>
    </div>
  )
}
