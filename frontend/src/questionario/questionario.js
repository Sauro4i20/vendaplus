import React, { useState } from 'react';
import './questionario.css';
import { motion } from 'framer-motion';

export default function Questionario() {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    segment: '',
    need: '',
    platform: ''
  });
  const [questionIndex, setQuestionIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    { label: "Qual o seu nome?", key: "name", type: "text" },
    { label: `Qual o nome da sua empresa, ${formData.name}?`, key: "companyName", type: "text" },
    { label: `Qual o segmento que a empresa ${formData.companyName} segue?`, key: "segment", type: "text" },
    { label: "Qual a necessidade da utilização de uma automação de vendas em sua empresa?", key: "need", type: "textarea" },
    { label: "Em qual plataforma vai ser usada a automação?", key: "platform", type: "select", options: ["WhatsApp", "Telegram", "Instagram", "Facebook", "SMS", "Sistema"] }
  ];

  const handleChange = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleNext = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <motion.div className="questionnaire-container" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <h1>Questionário de Automação de Vendas</h1>
      {submitted ? (
        <motion.div className="thank-you-message" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <p>Obrigado, {formData.name}! Em até 5 dias, você receberá um retorno via e-mail com o orçamento e um plano detalhado de automação.</p>
        </motion.div>
      ) : (
        <motion.form initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="form-group">
            <label>{questions[questionIndex].label}</label>
            {questions[questionIndex].type === "textarea" ? (
              <textarea value={formData[questions[questionIndex].key]} onChange={(e) => handleChange(questions[questionIndex].key, e.target.value)} required />
            ) : questions[questionIndex].type === "select" ? (
              <select value={formData[questions[questionIndex].key]} onChange={(e) => handleChange(questions[questionIndex].key, e.target.value)} required>
                <option value="">Selecione</option>
                {questions[questionIndex].options.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            ) : (
              <input type={questions[questionIndex].type} value={formData[questions[questionIndex].key]} onChange={(e) => handleChange(questions[questionIndex].key, e.target.value)} required />
            )}
          </div>

          <motion.button type="button" onClick={handleNext} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ fontSize: "24px" }}>
            {questionIndex < questions.length - 1 ? "✅" : "✅"}
          </motion.button>

        </motion.form>
      )}


    </motion.div>
  );
}
