import { useReducer } from "react";

const initialState = {

    contador:0,

}

type Actiontype = 
    |{type: 'incrementar'}
    | {type: 'decremnetar'}
    | {type: 'custom', payload: number};


const contadorReducer = (state: typeof initialState, action: Actiontype) =>{

    switch (action.type) {
        case 'incrementar':
            
            return{

                ...state,
                contador: state.contador + 1

            }


            case 'decremnetar':
            
            return{

                ...state,
                contador: state.contador - 1

            }


            case 'custom':
            
            return{

                ...state,
                contador: action.payload
            }




    
        default:
            return state;
    }



}



export const Contador = () => {

const [{contador}, dispatch] = useReducer (contadorReducer, initialState);


return (
<>

<h3>Contador: {contador}</h3>
<button className="btn btn-outline-primary"
        onClick={() => dispatch({type: 'incrementar'}) }>
    +1
</button>

<button className="btn btn-outline-primary"
        onClick={() => dispatch({type: 'decremnetar'}) }>
    -1
</button>

<button className="btn btn-outline-danger"
        onClick={() => dispatch({type: 'custom', payload: 100}) }>
    100
</button>

</>

   )

}