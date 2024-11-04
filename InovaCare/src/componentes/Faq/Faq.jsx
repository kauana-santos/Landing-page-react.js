import React from 'react'
import "./Faq.css"

const Faq = () => {
    const src = [
        {
            summary: "Os planos da InovaCare cobrem consultas de especialistas?",
            detail: "Sim! Oferecemos diferentes planos que incluem tanto consultas com médicos clínicos gerais quanto com especialistas, como cardiologistas, nutricionistas e psicólogos."
        },
        {
            summary: "Como funciona o processo de consulta online na InovaCare?",
            detail: "Nossas consultas online são simples e rápidas. Basta escolher o profissional de saúde, agendar um horário que funcione para você e, no momento da consulta, conectar-se através da nossa plataforma, diretamente pelo seu dispositivo."
        },
        {
            summary: "Como é garantida a privacidade e segurança dos meus dados de saúde?",
            detail: "A InovaCare segue os mais altos padrões de segurança cibernética e todas as informações de saúde são criptografadas. Garantimos que seus dados estejam protegidos e acessíveis apenas por você e pelos profissionais autorizados."
        }
    ]
  return (
    <section className='faq'>
        <h2>Perguntas frequentes</h2>
        <div className='container'>
            {src.map(item => (
                <details key={item.summary}>
                <summary>{item.summary}</summary>
                    <p>{item.detail}</p>
                    
                </details>
            ))}
        </div>
    </section>
  )
}

export default Faq