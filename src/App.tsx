import LateralMenu from "./components/LateralMenu"
import UserInfo from "./components/UserInfo"
import TableProducts from "./components/TableProducts"
import styles from "./App.module.css"

function App() {

  return (
    <div className={styles.bodycontainer}>
      <div className={styles.menucontainer}>
        <LateralMenu></LateralMenu>
      </div>
      <div className={styles.datacontainer}>
        <UserInfo></UserInfo>
        <TableProducts></TableProducts>

      </div>
    </div>
    
  )
}

export default App
