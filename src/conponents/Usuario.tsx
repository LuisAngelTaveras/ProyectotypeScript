import { useState } from "react"


interface user {

uid: string;
name:string;

}




export const Usuario = ( ) =>{

const [user, setuser] = useState<user> ();

const login = () => {
     setuser({

     uid:'Ab678',
     name: 'Luis Angel'


     });


}

return(

<div className="mt-5">

<h3>Usuario: useState</h3>

<button 

onClick={login}
className="btn btn-outline-primary">
login

</button>

{

  (!user)

  ? <pre> Usuario no encontrado </pre>
  : <pre>{JSON.stringify(user)} </pre>
  

}



</div>



)


}