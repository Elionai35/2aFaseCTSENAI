import { useState } from 'react'
import './App.css'

function App() {
  const [usuario, setUsuario] = useState("Juca")

let nome = "Ulib"
function lerNome(){
    nome = prompt("Digite o nome (vou ignorar):")
    console.nome(nome);

  }
function lerUsuario(){
  let resposta = prompt("Digite o novo usuário:")
  setUsuario(resposta)
}

  return (
    <>
   <h1>ESTADOS</h1>
    Nome: {nome}
    <div>
    Usuario: {usuario}
    <button onClick={lerNome}>Trocar nome</button>
    <button onClick={lerUsuario}>Trocar usuario</button>
    </div>
    </>
  )
}

export default App 