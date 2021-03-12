import { useState } from "react";

export const Counter = ( ) => {

const [counter, setcounter] = useState(0);
const incrementar= (numero: number= 1):void => {

    setcounter(counter + numero );


    
}

return (
    

<div className="mt-5">

<h3>Counter: UseState </h3> 
<span>Valor: { counter } </span>

<br/>

<button 
 onClick={ () => incrementar () }
className="btn btn-outline-warning mt-2">
+1
</button>

<br/>

<button 

 onClick={() => incrementar (2)}
className="btn btn-outline-warning mt-2">
+2
</button>

<br/>

<button 

 onClick={() => setcounter (0)}
className="btn btn-outline-danger mt-2">
Reset
</button>


</div>



)

}

