import './App.css';
import freeCodeCampLogo from './img/freecodecamp-logo.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState} from 'react';


function App() {

  const [numClicks, setNumClicks] = useState(0);



  const manjearClick = () => {
    setNumClicks(numClicks + 1);
  }

  const reiniciarContador = () => {
    setNumClicks(0);
  }


  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="Logo de FreeCodeCamp"
        />
      </div>

      <Contador
      numClicks= {numClicks}
      />

      <div className="contenedor-principal">
        <Boton
          texto='Click'
          esBotonDeClick={true}
          manjearClick={manjearClick}
        />

        <Boton
          texto='Reiniciar'
          esBotonDeClick={false}
          manjearClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
