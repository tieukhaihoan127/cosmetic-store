import FooterClient from "../components/layout/Footer/FooterClient"
import HeaderClient from "../components/layout/Header/HeaderClient"
import HomePage from "../pages/HomePage"


const MainLayout = () => {
  return (
    <div>
        <HeaderClient/>
        <HomePage/>
        <FooterClient/>
    </div>
  )
}

export default MainLayout