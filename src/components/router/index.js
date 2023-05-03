import { Route, Routes } from "react-router-dom";

import Home from "../home";
import Contacto from "../contacto";

export default () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/contacto" element={<Contacto/>}/>
        </Routes>
    )
}