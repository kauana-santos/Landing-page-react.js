import React from 'react'
import "./Valores.css"

const Valores = () => {
  return (
   
    <section className='valores'>
        <h2>Nossos Valores</h2>
        <div className='container-valor left'>
            <div ><img src="" alt="imagem" /></div>
            <div>
                <h4>Inovação</h4>
                <p>A tecnologia é a chave para transformar a saúde. Na InovaCare, estamos sempre inovando para garantir que nossos pacientes tenham acesso às ferramentas mais avançadas, trazendo mais eficiência e conforto ao seu cuidado.</p>
            </div>
        </div>
        <div className='container-valor right'>
            <div ><img src="" alt="imagem" /></div>
            <div>
                <h4>Transparência</h4>
                <p>Nossa relação com os pacientes é construída na base da confiança. Valorizamos a clareza e a transparência em cada etapa, desde os planos de saúde até os diagnósticos e tratamentos. </p>
            </div>
        </div>
        <div className='container-valor left' >
            <div ><img src="" alt="imagem" /></div>
            <div>
                <h4>Acessibilidade</h4>
                <p>Na InovaCare, acreditamos que o cuidado com a saúde deve ser acessível a todos. Por isso, oferecemos soluções que cabem no seu bolso, com a conveniência de consultas online e atendimento a qualquer hora. </p>
            </div>
        </div>
        <div className='container-valor right'>
            <div ><img src="" alt="" /></div>
            <div>
                <h4>Cuidado Humanizado</h4>
                <p>Por trás de cada consulta digital, há um profissional comprometido com o bem-estar e a empatia. Na InovaCare, tratamos nossos pacientes com o carinho e o respeito que eles merecem. </p>
            </div>
        </div>
    </section>
  )
}

export default Valores