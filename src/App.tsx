import { Contador } from "./conponents/Contador";
import {Counter} from "./conponents/Counter";
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
      



    </>
  );
}

export default App;
