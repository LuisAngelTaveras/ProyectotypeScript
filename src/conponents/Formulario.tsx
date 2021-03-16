
import { useForm } from "../hooks/useForm";

interface FormData {

     email:string;
     nombre: string;
     edad: number;
}

export const Formulario = () => {

const {nombre,email,edad, handlechange, formulario } = useForm<FormData>({

    email:'luisangelpenacemas@gmail.com',
    nombre:'Luis Angel',
    edad:17
});

//const  {email, nombre, edad} = formulario;


    //const [formulario, setFormulario] = useState ({
              
         // email:'',
         // Nombre:''
              

//});


//const handlechange = ({target}: ChangeEvent<HTMLInputElement>) => {
       //const {name,value}= target;

     //  setFormulario({
         //  ...formulario,
        //   [ name ]: value

  //});
//}



    return (
           <form autoComplete="off"> 
                  <div className="mb-3">
                       <label className="form-label">Email:</label>
                             <input type ="email"
                                    className="form-control"
                                    name="email"  
                                    value={email}
                                    onChange={handlechange}                           
                             />
                                     
         </div>


         <div className=""mb-3>
                       <label className="form-label">Nombre:</label>
                             <input type ="text"
                                          className="form-control"
                                          name="nombre"  
                                    value={formulario.nombre} 
                                    onChange={handlechange}                          
                             />
                    </div>

                    <div className=""mb-3>
                       <label className="form-label">Edad:</label>
                             <input type ="number"
                                          className="form-control"
                                          name="edad"  
                                    value={edad} 
                                    onChange={handlechange}                          
                             />
                    </div>

 
            <pre>{JSON.stringify (formulario)}</pre>
</form>

    )

}