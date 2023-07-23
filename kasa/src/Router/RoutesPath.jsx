import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Accueil from "../Pages/Accueil";
import Fiche from '../Pages/Logements';
import APropos from "../Pages/About";
import Erreur404 from "../Pages/404";


function RoutesPath() {
    return(
        <HashRouter>
                <Routes>
                    <Route element={<Navigate replace to="/accueil" />} path="/" />
                    <Route path="/accueil" element={<Accueil />}/>
                    <Route path="/logement/:id" element={<Fiche />}/>
                    <Route path="/a-propos" element={<APropos />}/>
                    <Route path="*" element={<Erreur404 />}/>
                </Routes>
        </HashRouter>
    );
}

export default RoutesPath;