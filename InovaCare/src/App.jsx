
import './App.css'
import Faq from './componentes/Faq/Faq'

import Hero from './componentes/Hero/Hero'
import NavBar from './componentes/NavBar/NavBar'
import Planos from './componentes/Planos/Planos'
import Rodape from './componentes/Rodape/Rodape'
import Servicos from './componentes/Servicos/servicos'
import Valores from './componentes/Valores/Valores'



function App() {
  

  return (
    <>
      <NavBar/>
      <Hero/>
      <Servicos/>
      <Planos/>
      <Valores/>
      <Faq/>
      <Rodape/>
    </>
  )
}

export default App
