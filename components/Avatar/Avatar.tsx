import styles from "./Avatar.module.css"

export default function Avatar({ name }: { name: string }) {
  const getInitials = (name: string) => {
    // Check if PascalCase: starts with uppercase, then at least one more uppercase
    // Simple check: splitting by uppercase letters
    const parts = name.match(/([A-Z]?[^A-Z]*)/g)?.filter(Boolean) || []

    // Simplistic PascalCase detection: is it one word and does it have multiple capitals?
    if (name.length > 2 && /^[A-Z][a-z]+[A-Z][a-z]+$/.test(name)) {
      return name.match(/[A-Z]/g)?.slice(0, 2).join("") || name[0]
    }

    return name[0].toUpperCase()
  }

  return (
    <div className={styles.avatar}>
      {getInitials(name)}
    </div>
  )
}
