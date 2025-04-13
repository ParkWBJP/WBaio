import React, { useState } from 'react';
import './FAQSection.css';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';
import { translations } from "../lang";

const FAQSection = ({ language = "ko" }) => {
    const t = translations[language]?.faqSection;
  
    const [openIndex, setOpenIndex] = useState(null);
  
    const toggle = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    return (
      <section className="faq-section" id="faq">
        <div className="faq-inner">
          <div className="faq-title-area">
            <h2>{t?.title}</h2> {/* ✅ 타이틀도 다국어 */}
          </div>
          <div className="faq-items">
            {t?.items.map((item, idx) => (
              <div key={idx} className={`faq-box ${openIndex === idx ? "open" : ""}`} onClick={() => toggle(idx)}>
                <div className="faq-question">
                  {item.question}
                  <span className="faq-icon">
                    {openIndex === idx ? <FiChevronDown /> : <FiChevronRight />}
                  </span>
                </div>
                {openIndex === idx && (
                  <div
                    className="faq-answer"
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default FAQSection;
