import React from 'react'
import "./Faq.css"

const Faq = () => {
    const src = [
        {
            summary: "Problema 4",
            detail: "Texto texto texto"
        },
        {
            summary: "Problema 2",
            detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ad reprehenderit consectetur animi earum, esse eaque aperiam nostrum. Dolorum delectus, omnis labore nihil incidunt fugit eos optio aut earum reiciendis?"
        },
        {
            summary: "Problema 3",
            detail: "Texto texto texto"
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