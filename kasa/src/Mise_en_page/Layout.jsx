import React from "react";
import "../css/style.css";
import Header from "../Mise_en_page/Header/Header";
import Footer from "../Mise_en_page/Footer/Footer";

function Layout({children}) {
    return (
        <>
              <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}

export default Layout;