
import React from "react";
import Header from './components/Header'
import FirstView from './components/FirstView'
import About from './components/About'
import Skills from './components/Skills'
import Works from './components/Works'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './styles/common.scss';


const App = () => {
  return (
    <div className="body">
    <main id="main_area">
    <Header />
    <FirstView />
    <About />
    <Skills />
    <Works />
    <Contact />
    <Footer />
    </main>
    </div>
);
};
export default App;

