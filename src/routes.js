import Welcome from "./pages/Welcome"
import { Route,BrowserRouter, Routes } from "react-router-dom";

function AppRoutes() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="" element={<Welcome/>}/>
        </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;