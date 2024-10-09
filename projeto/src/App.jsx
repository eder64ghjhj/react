
import './App.css'
import Link from './components/Link'
import Titulo from './components/Titulo'
import Botao from './components/Botao'
import Lista from './components/Lista'
import Tentativa from './components/If.jsx'
import Hora from './components/Bomdia.jsx'
import Texto from './components/Div.jsx'


function App() {
  
  return (
    <>
    <Link/>
    <Titulo/>
    <Lista/>
    <Botao/>
    <Titulo titulo="Guerra no irã" subtitulo="Começou a guerra do irã"/>
    <Titulo titulo="Guerra no Afegabistão" subtitulo="Começou a guerra no Afeganistão"/>
    <Tentativa eGoal={true}/>
    <Hora queHora={false}/>
    <Texto/>
    
    </>
  )
}

export default App
