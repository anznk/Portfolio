
import React from "react";
import Header from './components/Header'
import FirstView from './components/FirstView'
import About from './components/About'
import Skills from './components/Skills'
import Works from './components/Works'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './styles/common.scss';
import { useTranslation } from 'react-i18next';


const App = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
  i18n.changeLanguage(language);
  }

  return (
    <div className="body">
    <main id="main_area">
    <Header onChangeHeadline={(language) => changeLanguage(language)} />
    <FirstView />
    <About text={t('text.about')}/>
    <Skills skill1={t('text.skill1')} skill2={t('text.skill2')} skill3={t('text.skill3')} skill4={t('text.skill4')}/>
    <Works />
    <Contact />
    <Footer />
    </main>
    </div>
);
};
export default App;

