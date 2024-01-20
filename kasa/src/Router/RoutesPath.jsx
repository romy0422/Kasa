import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Accueil from "../Pages/Accueil"
import APropos from "../Pages/About"
import Logements from '../Pages/Logements'
import Header from "../Composants/Header"
import Footer from "../Composants/Footer"
import Erreur404 from "../Pages/404";


function RoutesPath() {
    return(
        <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Accueil />}/>
                    <Route path="/about" element={<APropos />}/>
                    <Route path="/logement/:id" element={<Logements />}/>
                    <Route path="*" element={<Erreur404 />}/>
                </Routes>
                <Footer />
        </BrowserRouter>
    );
}

export default RoutesPath;