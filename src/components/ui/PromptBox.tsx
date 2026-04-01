"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import styles from "@/styles/ui/promptBox.module.css"

export default function PromptBox() {
  const [value, setValue] = useState("")

  const suggestions = [
    "Paycheck confusion",
    "Hospital bill",
    "Landlord issues",
    "Salary question"
  ]

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputContainer}>
        <textarea
          placeholder="Describe your situation... e.g. landlord won't fix the heat"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={styles.textarea}
        />
        <button className={styles.button}>
          <ArrowRight />
        </button>
      </div>

      <div className={styles.suggestions}>
        {suggestions.map((item) => (
          <button
            key={item}
            className={styles.chip}
            onClick={() => setValue(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  )
}
