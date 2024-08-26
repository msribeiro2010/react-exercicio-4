import { useState } from 'react'
function App() {
  
const [password, setPassword] = useState('');
const [copyText, setCopyText] = useState('Copiar');

 
function generatePassword() {
     const chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
     const length = 12;
     let newPassword = '';
     for (let i = 0; i < length; i++) {
       const position = Math.floor(Math.random() * chars.length);
       newPassword += chars[position]

     }
     setPassword(newPassword); 
  }

  function copyPassword() {
    navigator.clipboard.writeText(password);
    setCopyText('Copiado!');
    setTimeout(() => setCopyText('Copiar'), 2000);
  }
  

  return (
    <div className="app">
      <h1 >Gerador de Senhas</h1>
      <button onClick={generatePassword}>Gerar Senha</button>
      <button onClick={copyPassword}>{copyText}</button>
      <div>{password}</div>
    </div>
  
  )
}

export default App
