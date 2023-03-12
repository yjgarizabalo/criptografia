import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

import './App.css';

function App() {
  const [text, setText] = useState('')
  const [password, setPassword] = useState('')
  const [cifradosText, setCifradosText] = useState('')
  const [descifradosText, setDescifradosText] = useState('')

  const cifradoText = () => {
    const cifrado = CryptoJS.AES.encrypt(text, password).toString();
    setCifradosText(cifrado);
  };

  const descifradoText = () => {
    const descifrado = CryptoJS.AES.decrypt(cifradosText, password).toString(CryptoJS.enc.Utf8);
    setDescifradosText(descifrado);
  }

  return (
    <div className='container-cripto'>

      <h2>Criptografia 📩🔒</h2>

      <div className='item-cripto'>
        <label>Mensaje</label>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Ingresar mensaje ✉️" />
        <label>Contraseña</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Ingresar contraseña 🔑" />
        <p><b>Mensaje Cifrado 🔐:</b></p>
        <p>{cifradosText}</p>
        <button onClick={cifradoText}>Cifrar</button>
      </div>

      <div className='item-cripto'>
        <p><b>Mensaje Descifrado 🔑</b>:</p>
        <p>{descifradosText}</p>
        <button onClick={descifradoText}>Descifrar</button>
      </div>

    </div>
  );
}

export default App;
