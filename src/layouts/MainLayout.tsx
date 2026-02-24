import { Outlet } from "react-router-dom"
import FooterClient from "../components/layout/Footer/FooterClient"
import HeaderClient from "../components/layout/Header/HeaderClient"


const MainLayout = () => {
  return (
    <div>
        <HeaderClient/>
          <Outlet/>
        <FooterClient/>
    </div>
  )
}

export default MainLayout 