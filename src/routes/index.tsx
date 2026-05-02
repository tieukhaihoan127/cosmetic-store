import { useRoutes } from "react-router-dom";
import { ClientRoutes } from "./ClientRoutes";
import { AdminRoutes } from "./AdminRoutes";


const AppRoutes = () => {

    const element = useRoutes([
        ...ClientRoutes,
        ...AdminRoutes
    ]);

  return element;
}

export default AppRoutes;