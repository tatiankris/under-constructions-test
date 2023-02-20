import './App.css'
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import './App.css'
import s from "./components/footer/Footer.module.scss";
import React from "react";
import Popup from "./components/popup/Popup";

function App() {


  return (
    <div className={'app'}>
        <img className={'leftDecorate'} src={'../../public/leftDecorate.svg'} />
        <img className={'rightDecorate'} src={'../../public/rightDecorate.svg'} />

        <div className={'container'}>
            <Header />
            <Main />
        </div>
        <Footer />

    </div>
  )
}

export default App
