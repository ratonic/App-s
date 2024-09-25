import Button from "@/components/ui/button";
import Input from "@/components/ui/input";

const Form = () => {
    return (
      <div className="w-full max-w-md">
        <div className="mb-5">
          <h2 className="text-2xl font-semibold">¡Bienvenidos!</h2>
          <p className="text-gray-500">
           Ingresa tu email y contraseña para ingresar a la pagina 
          </p>
        </div>
        <form className="w-full">
          <Input type="text" placeholder="Email"/>
          <Input type="password" placeholder="Contraseña"/>
          <div className="flex justify-end">
            <button type="button" className="text-gray-500">
                ¿Olvidaste tu contraseña?

            </button>
          </div>
          <Button type = "submit" label = "Login"/>
        </form>
      </div>
    );
  };
  
  export default Form;