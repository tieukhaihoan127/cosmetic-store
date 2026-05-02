import FooterClient from "../shared/components/common/Footer/FooterClient";
import HeaderClient from "../shared/components/common/Header/HeaderClient";
import { Outlet } from "react-router-dom";
import { LoginDialog } from "../features/auth";
import { CartDrawer } from "../features/cart";
import { WishlistDrawer } from "../features/wishlist";


const MainLayout = () => {

  return (
    <div>
      <HeaderClient />
      <Outlet />
      <FooterClient />
      <WishlistDrawer />
      <CartDrawer />
      <LoginDialog />
    </div>
  );
};

export default MainLayout;