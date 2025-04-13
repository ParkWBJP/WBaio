import React, { useState } from "react";
import "./Contact.css";
import { translations } from "../lang";

const ContactForm = ({ language = "ko" }) => {
  const t = translations[language]?.contactSection;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    // 🔽 이후 firebase 연동 가능
  };

  return (
    <section className="contact-form-section" id="contact">
      <h2>{t?.title || "Contact / 문의하기"}</h2>
      {submitted ? (
        <p className="success-message">{t?.success || "문의가 정상적으로 접수되었습니다. 감사합니다 😊"}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder={t?.name}
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder={t?.email}
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder={t?.message}
            value={formData.message} // ✅ 고친 부분
            onChange={handleChange}
            required
          />
          <button type="submit">{t?.submit}</button>
        </form>
      )}
    </section>
  );
};

export default ContactForm;
