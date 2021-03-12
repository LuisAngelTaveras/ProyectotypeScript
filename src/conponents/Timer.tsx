import userEvent from "@testing-library/user-event";
import { userInfo } from "node:os";
import { useEffect, useRef, useState } from "react";

type TimerArgs = {
  milisegundos: number,
  
}

export const Timer = ({milisegundos}: TimerArgs) => {

    const [segundos, setsegundos] = useState (0);
    const ref = useRef <NodeJS.Timeout> ();

    useEffect( ()=> {
       ref.current && clearInterval (ref.current);
     
     ref.current = setInterval ( () => setsegundos ($ => $ +1), milisegundos  );

    },[milisegundos])

    

    return(
    
        <>
    <h4>Timer: <small>{segundos}</small></h4>
        </>
    
    )
    
    }