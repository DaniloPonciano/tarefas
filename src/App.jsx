import {useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cabecalho from './components/myComponents/Cabecalho'
import ComponentA from './components/myComponents/ComponentA'
import Rodape from './components/myComponents/Rodape'
import LoginStatus from './components/myComponents/LoginStatus'

function App() {
  //Código JavaScript
  const [count, setCount] = useState(0)

  //Retorno da função que é a visualização do componente
  return (
    <>
      <div>
        <Cabecalho/>
        <ComponentA/>
        <LoginStatus/>
        <Rodape/>
        <MenuSuperior/>
      </div>
      
    </>
  )
}

export default App
