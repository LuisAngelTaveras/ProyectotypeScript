import {Counter} from "./conponents/Counter";
import { TimerPadre } from "./conponents/TimerPadre";
import { Usuario } from "./conponents/Usuario";

function App() {
  return (
    <>

    
      <h2>
         React + Typescript
      </h2>
      <hr/>
      

      <Counter/>
      <Usuario/>

      <h2> UseEffect - useref </h2>
      <hr/>

      <TimerPadre/>     


    </>
  );
}

export default App;
