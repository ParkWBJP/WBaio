import React, { useState } from 'react';
import { translations } from './lang'; // ✅ 번역파일 import

import Header from './components/Header';
import MainBanner from './components/MainBanner';
import AIIntroSection from './components/AIIntroSection';
import MiddleBanner from './components/MiddleBanner';  
import BottomBanner from './components/BottomBanner';  
import BottomBanner2 from './components/BottomBanner2';  
import FAQSection from './components/FAQSection';  
import Contact from './components/Contact';  
import Footer from './components/Footer';  

function App() {
  const [language, setLanguage] = useState('ko'); // ✅ 언어 상태

  return (
    <>
      <Header language={language} setLanguage={setLanguage} />
      <MainBanner language={language} />
      <AIIntroSection language={language} />
      <MiddleBanner language={language} />
      <BottomBanner language={language} />
      <BottomBanner2 language={language} />
      <FAQSection language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </>
  );
}

export default App;
