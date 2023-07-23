import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../layouts/Layout"
import Accueil from "./pages/Accueil";
import Fiche from './pages/Logements';
import APropos from "./pages/About";
import Erreur404 from "./pages/404";


function RoutesPath() {
    return(
        <HashRouter>
            <Layout>
                <Routes>
                    <Route element={<Navigate replace to="/accueil" />} path="/" />
                    <Route path="/accueil" element={<Accueil />}/>
                    <Route path="/logement/:id" element={<Fiche />}/>
                    <Route path="/a-propos" element={<APropos />}/>
                    <Route path="*" element={<Erreur404 />}/>
                </Routes>
            </Layout>
        </HashRouter>
    );
}

export default RoutesPath;