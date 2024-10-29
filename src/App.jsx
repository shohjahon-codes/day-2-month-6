import { Routes , Route } from "react-router-dom";
import { Login } from "./pages/logi";
import { Massages } from "./pages/massages";
import { MainLayout } from "./layout/main-layout";
import { Register } from "./pages/register";

function App(){
    return <>
    <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/app" element={<MainLayout/>}>
            <Route index element={<Massages/>}/>
        </Route>
    </Routes>
    </>
}
export default App;