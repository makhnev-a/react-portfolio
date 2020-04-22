import React from 'react';
import Header from "./components/Header/Header";
import MySkills from "./components/MySkills/MySkills";
import About from "./components/About/About";
import MyWorks from "./components/MyWorks/MyWorks";
import WorkOptions from "./components/WorkOptions/WorkOptions";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Header/>
            <About/>
            <MySkills/>
            <MyWorks/>
            <WorkOptions/>
            <Contacts/>
            <Footer/>
        </div>
    );
};

export default App;