import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Accueil from "../Pages/Accueil";
import Fiche from '../Pages/Logements';
import Header from "../Mise_en_page/Header/Header";
import Footer from "../Mise_en_page/Footer/Footer";

function RoutesPath() {
    return(
        <HashRouter>
                <Header />
                <Routes>
                    <Route element={<Navigate replace to="/accueil" />} path="/" />
                    <Route path="/Accueil" element={<Accueil />}/>
                    <Route path="/Logements/:id" element={<Fiche />}/>
                
                  
                </Routes>
                <Footer />
        </HashRouter>
    );
}

export default RoutesPath;