import React from "react"
import { HashRouter, Routes, Route, Navigate } from "react-router-dom"
import Accueil from "../Pages/Accueil"
import APropos from "../Pages/About"
import Logements from '../Pages/Logements'
import Header from "../Composants/Header/Header"
import Footer from "../Composants/Footer/Footer"


function RoutesPath() {
    return(
        <HashRouter>
                <Header />
                <Routes>
                    <Route element={<Navigate replace to="/accueil" />} path="/" />
                    <Route path="/accueil" element={<Accueil />}/>
                    <Route path="/about" element={<APropos />}/>
                    <Route path="/logement/:id" element={<Logements />}/>
                </Routes>
                <Footer />
        </HashRouter>
    );
}

export default RoutesPath;