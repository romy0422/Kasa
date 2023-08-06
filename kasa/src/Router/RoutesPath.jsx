import React from "react"
import { HashRouter, Routes, Route, Navigate } from "react-router-dom"
import Accueil from "../Pages/Accueil"
import APropos from "../Pages/About"
import Logements from '../Pages/Logements'
import Header from "../Composants/Header"
import Footer from "../Composants/Footer"
import Erreur404 from "../Pages/404";


function RoutesPath() {
    return(
        <HashRouter>
                <Header />
                <Routes>
                    <Route element={<Navigate replace to="/accueil" />} path="/" />
                    <Route path="/accueil" element={<Accueil />}/>
                    <Route path="/about" element={<APropos />}/>
                    <Route path="/logement/:id" element={<Logements />}/>
                    <Route path="*" element={<Erreur404 />}/>
                </Routes>
                <Footer />
        </HashRouter>
    );
}

export default RoutesPath;