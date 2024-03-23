import MyComponent from "@/components/MyComponent/MyComponent"
import styles from "@/app/page.module.css"

export default function Page() {
  return(
    <div className={styles.page}>
      <MyComponent/>
    </div>
  );
}
