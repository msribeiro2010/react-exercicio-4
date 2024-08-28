import { useState } from 'react'
function App() {
  
const [password, setPassword] = useState('');
const [copyText, setCopyText] = useState('Copiar');
const [passwordSize, setPasswordSize] = useState(12); 

 
function generatePassword() {
     const chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
     let newPassword = '';
     for (let i = 0; i < passwordSize; i++) {
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
      <div><label htmlFor="passwordSize">Tamanho:</label>
      <input 
      type="number"  
      id="passwordSize"  
      min={1}
      value={passwordSize}
      onChange={e => setPasswordSize(e.target.value) }  /> 
      </div>
      <button onClick={generatePassword}>Gerar Senha de {passwordSize} caracteres!</button>
      <button onClick={copyPassword}>{copyText}</button>
      <div>{password}</div>
    </div>
  
  )
}

export default App
