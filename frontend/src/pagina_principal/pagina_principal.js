import React, { useState } from 'react';
import './pagina_principal.css';
import Questionario from '../questionario/questionario';

export default function PaginaPrincipal() {
    const [showQuestionnaire, setShowQuestionnaire] = useState(false);

    const toggleQuestionnaire = () => {
        setShowQuestionnaire(!showQuestionnaire);
    };

    return (
        <div className="pagina-principal">
            {/* Cabeçalho */}
            <header className="header">
                <div className="logo">Automação de Vendas</div>
                <nav className="nav">
                    <a href="#features">Funcionalidades</a>
                    <a href="#testimonials">Depoimentos</a>
                    <a href="#contact">Contato</a>
                </nav>
            </header>

            {/* Seção Principal */}
            <section className="main-section">
                <h1>Automação de Vendas para Empresas Inteligentes</h1>
                <p>Oferecemos soluções de automação de vendas para otimizar sua equipe e maximizar resultados. Aumente sua produtividade e alcance com tecnologia de ponta.</p>
                <button className="start-button" onClick={toggleQuestionnaire}>
                    {showQuestionnaire ? "Fechar Atendimento" : "Iniciar Atendimento"}
                </button>
            </section>

            {/* Questionário visível apenas se showQuestionnaire for true */}
            {showQuestionnaire && <Questionario />}

            {/* Funcionalidades */}
            <section id="features" className="features">
                <h2>Principais Funcionalidades</h2>
                <div className="feature-item">
                    <h3>Gestão Eficiente de Leads</h3>
                    <p>Organize e segmente automaticamente os leads, otimizando o acompanhamento e aumentando suas chances de conversão.</p>
                </div>
                <div className="feature-item">
                    <h3>Relatórios Avançados</h3>
                    <p>Obtenha relatórios completos e analíticos em tempo real para decisões mais rápidas e eficazes.</p>
                </div>
                <div className="feature-item">
                    <h3>Integração Total</h3>
                    <p>Nosso sistema integra-se facilmente com ferramentas de CRM e plataformas de marketing, criando um fluxo de trabalho contínuo.</p>
                </div>
            </section>

            {/* Depoimentos */}
            <section id="testimonials" className="testimonials">
                <h2>O que nossos clientes dizem</h2>
                <div className="testimonial">
                    <p>"A automação de vendas transformou nossa empresa. A integração com nosso CRM e o gerenciamento de leads nos trouxe resultados rápidos e eficazes." - Cliente A</p>
                </div>
                <div className="testimonial">
                    <p>"Uma solução poderosa para otimizar o processo de vendas. Nos ajudou a aumentar nossa conversão em 30%." - Cliente B</p>
                </div>
            </section>

            {/* Contato */}
            <section id="contact" className="contact">
                <h2>    <a href="/login" className="login-link">Entre em Contato </a></h2>
                <p>Para mais informações, você pode entrar em contato diretamente com o fundador da nossa plataforma.</p>
                <div className="contact-info">
                    <p><strong>Email:</strong> brunocaetano1952@gmail.com</p>
                    <p><strong>Telefone:</strong> (14) 99810-9598</p>
                </div>
            </section>

            {/* Rodapé */}
            <footer className="footer">
                <p>&copy; 2025 Automação de Vendas. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}
