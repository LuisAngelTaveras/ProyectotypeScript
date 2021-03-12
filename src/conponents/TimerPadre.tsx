import { useState } from "react";
import { Timer } from "./Timer";

export const TimerPadre = () => {

const [millisegundos, setmillisegundos] = useState (1000);


return(

    <>
<span>Milisegundos {millisegundos} </span>
<br/>

<button className="btn btn-outline-warning"
        onClick={ () => setmillisegundos(1000) }>
   1000
</button>

<button className="btn btn-outline-warning"
   onClick={ () => setmillisegundos(2000) }>
   2000
</button>

<Timer milisegundos={millisegundos}/>
<hr/>   

    </>


)

}