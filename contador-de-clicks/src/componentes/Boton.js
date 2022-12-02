import React from 'react';
import '../hojas-de-estilos/Boton.css'

function Boton({ texto, esBotonDeClick, manjearClick }) {
    return (
        <button className= { esBotonDeClick ? 'boton-click' : 'boton-reiniciar' }
        onClick={manjearClick}>
            {texto}
        </button>
    );
}


export default Boton;