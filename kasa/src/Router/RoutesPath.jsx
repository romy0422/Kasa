import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Accueil from "../Pages/Accueil";
import Fiche from '../Pages/Logements';
import Layout from "../Mise_en_page/Layout"

function RoutesPath() {
    return(
        <HashRouter>
                 <Layout>
                <Routes>
                    <Route element={<Navigate replace to="/accueil" />} path="/" />
                    <Route path="/Accueil" element={<Accueil />}/>
                    <Route path="/Logements/:id" element={<Fiche />}/>
                
                  
                </Routes>
                </Layout>
        </HashRouter>
    );
}

export default RoutesPath;