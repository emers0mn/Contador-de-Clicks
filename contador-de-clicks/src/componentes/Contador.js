import React from 'react';
import '../hojas-de-estilos/Contador.css'

function Contador({ numClicks }) {
    return(
        <div className='contador'>
            {numClicks}
        </div>
    )
}

export default Contador;