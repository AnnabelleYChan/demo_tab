import MyComponent from "@/components/MyComponent/MyComponent"
import styles from "@/app/page.module.css"
import MyTabs from "@/components/MyTab/MyTabs"
import MyTab from "@/components/MyTab/MyTab"

export default function Page() {
  return(
    <div className={styles.page}>
      <MyComponent/> 
      <MyTabs> 
        <MyTab title="FirstTab">  </MyTab>
        <MyTab title="Tab2">  </MyTab>
      </MyTabs>
    </div>
  );
}
