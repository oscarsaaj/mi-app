
import { useState } from 'react';
import './Miapp.css';

const App = () => {
  const [contador, setcontador] = useState(0);

  return (
    <>
  <h1>Pankekes uwu</h1>
  <p> ozkr pankekes tilin </p>
  <h3>Contador: { contador }</h3>
  <button id="tilin" className="btns" onClick={() => setcontador(contador+1)}> Incrementa</button>
  <button id="pankekes" className="btns"onClick={() => setcontador(contador-1)}> Decrementa</button>
  <button id="aña" className="btns"onClick={() => setcontador(0)}>Reiniciar</button>
    </>
  )
}

export default App;