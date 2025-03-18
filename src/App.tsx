import LateralMenu from "./components/LateralMenu"
import UserInfo from "./components/UserInfo"
import TableProducts from "./components/TableProducts"
import styles from "./App.module.css"
import SpecialPriceForm from "./components/SpecialPriceForm"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  return (
    <Router>
      <div className={styles.bodycontainer}>
        <div className={styles.menucontainer}>
          <LateralMenu/>
          
        </div>
        <div className={styles.datacontainer}>
          <UserInfo userId={'67b885d2016b104d63a75922'}></UserInfo>
          <Routes>
            <Route path="/Articulos" element={<TableProducts userId={'67b885d2016b104d63a75922'} />} />
            <Route path="/Subida" element={<SpecialPriceForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
