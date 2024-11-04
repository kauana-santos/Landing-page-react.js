import React from 'react'
import Cards from "../Cards/Cards"
import { FaAmbulance } from "react-icons/fa"

const Servicos = () => {
  return (
    <section className='serviços'>
        <Cards
        icone={<FaAmbulance/>}
        descricao={"Atendimento remoto com médicos e especialistas de diferentes áreas (geral, cardiologia, psicologia, nutrição, etc.)."}/>
        <Cards descricao={"Planos de Acompanhamento: Pacotes mensais que incluem consultas recorrentes, exames preventivos e acompanhamento personalizado."}/> 
        <Cards descricao={"Monitoramento de Saúde: Aplicativos integrados para acompanhar sinais vitais, marcar consultas e gerenciar a saúde de forma proativa."}/> 
        <Cards descricao={"Atendimento 24/7: Suporte de emergência e consultas disponíveis a qualquer momento, com prioridade para casos urgentes."}/> 
        
    </section>
  )
}

export default Servicos