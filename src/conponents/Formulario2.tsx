import { useForm } from "../hooks/useForm"




export const Formulario2 = () => {

    const {formulario, handlechange} =useForm({
           
           postal:'ABCDE',
           ciudad:'Moca'

    });

    const {postal, ciudad}= formulario;


    return (
           <form autoComplete="off"> 
                  <div className="mb-3">
                       <label className="form-label">Codigo Postal</label>
                             <input type ="text"
                                    className="form-control"
                                    name="postal"  
                                    value={postal}
                                    onChange={handlechange}                           
                             />
                                     
         </div>


         <div className=""mb-3>
                       <label className="form-label">Ciudad</label>
                             <input type ="text"
                                    className="form-control"
                                    name="ciudad"   
                                    value={ciudad}
                                    onChange={handlechange}                          
                             />
                    </div>

 
            <pre>{JSON.stringify (formulario)}</pre>
</form>

    )

}