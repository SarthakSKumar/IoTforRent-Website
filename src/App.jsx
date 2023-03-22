import { useState } from "react";
import Header from "./components/header.jsx";
import Hero from "./components/Hero.jsx";
import SubHeader from "./components/SubHeader.jsx";
import Catalogue from "./components/Catalogue.jsx";
import About from "./components/About.jsx";
import FAQ from "./components/FAQ.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
    return (
        <div className='App'>
            <Header />
            <Hero />
            <SubHeader />
            <About />
            <Catalogue />
            <FAQ />
            <Footer />
        </div>
    );
}

export default App;
