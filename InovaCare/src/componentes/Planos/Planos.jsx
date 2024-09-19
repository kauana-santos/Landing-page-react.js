
import "./Planos.css"

const Planos = () => {
  return (
    <section className="planos">
        <div>
            <h2>Nossoa Planos</h2>
        </div>

        <div className="contanier-cards">
            <div className="Planos-card">
                <h3>Titulo</h3>
                <ul>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    
                </ul>
                <div className="planos-card-desc">
                    <span>Valor</span>
                    <button>Assinar Plano</button>
                </div>
            </div>
            <div className="Planos-card">
                <h3>Titulo</h3>
                <ul>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                </ul>
                <div className="planos-card-desc">
                    <span>Valor</span>
                    <button>Assinar Plano</button>
                </div>
            </div>
            <div className="Planos-card">
                <h3>Titulo</h3>
                <ul>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    
                </ul>
                <div className="planos-card-desc">
                    <span>Valor</span>
                    <button>Assinar Plano</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Planos