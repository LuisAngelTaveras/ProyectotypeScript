import { Contador } from "./conponents/Contador";
import {Counter} from "./conponents/Counter";
import { Formulario } from "./conponents/Formulario";
import { Formulario2 } from "./conponents/Formulario2";
import { TimerPadre } from "./conponents/TimerPadre";
import { Usuario } from "./conponents/Usuario";

function App() {
  return (
    <>

    
      <h3>
         React + Typescript
      </h3>
      <hr/>
      

      <Counter/>
      <Usuario/>

      <h3> UseEffect - useref </h3>
      <hr/>

      <TimerPadre/>  
   
      
      <h3>useReducer</h3>
      <hr/>
      <Contador/>   
      
      <br/>
      <br/><br/>

      <h3>Customhooks</h3>
      <hr/>

      <Formulario/>

      <br/>

      <Formulario2/>


<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>



    </>
  );
}

export default App;
