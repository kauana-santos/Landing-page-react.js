
import "./Planos.css"

const Planos = () => {

    const planos= [
        {
            nomePlano: "Plano Básico",
            descricao: "Acesso a consultas online ilimitadas com médicos de família e clínicos gerais.",
            valor: "R$ 30,00"
        },
        {
            nomePlano: "Plano Avançado",
            descricao: "Inclui acompanhamento personalizado com especialistas e exames preventivos.",
            valor: "R$ 30,00"
        },
        {
            nomePlano: "Plano Premium",
            descricao: "Acesso 24/7 a consultas, monitoramento remoto de saúde, plano personalizado de dieta e exercícios, e suporte prioritário.",
            valor: "R$ 30,00"
        }

    ]
  return (
    <section className="planos">
        <div>
            <h2>Nossos Planos</h2>
        </div>

        <div className="contanier-cards">
            {planos.map(plano => (
                <div className="Planos-card">
                <h3>{plano.nomePlano}</h3>
                <ul>
                    <li>{plano.descricao}</li>
        
                    
                </ul>
                <div className="planos-card-desc">
                    <span>{plano.valor}</span>
                    <button>Assinar Plano</button>
                </div>
            </div>
               
            ))}
            
        </div>
    </section>
  )
}

export default Planos