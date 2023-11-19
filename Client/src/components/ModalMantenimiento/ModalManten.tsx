import { RiSearch2Line } from "react-icons/ri"; 
import { AiOutlinePlus } from "react-icons/ai"; 
import { GrClose } from "react-icons/gr"; 
import { registros as listaDeUsuarios } from "../Record/Db.json"
import { useState  } from "react";

type Usuario = {
  nombre: string;
  id: number;
  estado_pago: string;
  tipo_transaccion: string;
  cantidad_kw: number;
  total: number;
};

interface modalManten{
  showManten: boolean;
  setShowManten(showManten:boolean): void;
}

function ModalManten(props:modalManten) {

  const [searchName, setSearchName] = useState<string>('');
  const [foundUsers, setFoundUsers] = useState<Usuario[]>([]);
  const [notfound, setNotfound] = useState<boolean>(false);

  const buscarUsuarios = () => {
    const usuariosEncontrados = listaDeUsuarios.filter((usuario) =>
      usuario.nombre.toLowerCase().startsWith(searchName.toLowerCase())
    );

    setFoundUsers(usuariosEncontrados);
    setNotfound(true);
  };

  return props.showManten ? (
    <div className="bg-[#0000003d] fixed top-0 left-0 h-full w-full flex justify-center items-center">
      
      <div className="flex flex-col justify-start items-center bg-slate-50 h-[100%] md:h-full w-full md:w-[60%] p-4 md:p-6 mt-40 md:mt-0">
        
        <div className="text-[#000000] text-2xl flex justify-end w-full">
          <button 
          onClick={() => {props.setShowManten(false),setFoundUsers([])}}            
          >
          <GrClose />
          </button>          
        </div>
      
        <h1 className="text-[#000000] text-xl md:text-2xl mb-6">
          Mantenimiento del sistema
        </h1>      

        <h1 className="text-[#000000] md:w-full text-lg md:mb-2">
          Actualizaciones
        </h1>

        <div className="text-[#000000] flex justify-between items-center border-2 w-full h-14 text-xl md:text-lg mb-8 px-2 md:px-0">
          <h1 className="hidden md:flex text-slate-50 w-20"></h1>
          <h1 className="text-[#757376] md:pl-0">ACTUALIZACION GAIA 2.0</h1>
          <h1 className="text-sm md:w-20 cursor-pointer">Actualizar</h1>          
        </div>

        <h1 className="text-[#000000] md:w-full text-lg md:text-lg mb-4 md:mb-6">
          Gestion de usuarios
        </h1>

        <div className="flex flex-row flex-wrap w-full">
          <h1 className="hidden md:flex justify-start text-slate-50 md:text-[#757376] text-md md:text-md md:mb-2 w-[50%]">Buscar usuario en la red Gaia</h1>
          <h1 className="hidden md:flex justify-end text-slate-50 md:text-[#757376] text-md md:text-md md:mb-2 w-[50%] ">Crear nuevo usuario</h1>
          
          <input 
          type="text" 
          className="md:mb-2 w-[60%] md:w-[45%] text-[#292929] px-2 border-2" 
          placeholder=""
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          />
          <button
          className="w-[10%] flex justify-center items-center text-[#636264] text-3xl md:mb-2 cursor-pointer"
          onClick={() => {buscarUsuarios(),setSearchName("")}}>
          <RiSearch2Line />
          </button>   


          <div className="text-[#515052] text-4xl md:mb-2 w-[25%] md:w-[45%] flex justify-end pr-[6%]"><AiOutlinePlus /> </div>
        </div>

        {notfound && foundUsers.length === 0 && <p className="text-black w-full">No se encontraron usuarios</p>}
   
        {foundUsers.length > 0 && (
            <div className="flex flex-col w-full border-2 h-auto py-4 mt-4 text-xs sm:text-[14px]">  

              {foundUsers.map((usuario) => (
                <div className="flex flex-grow text-black ">
                  <h1 key={usuario.nombre} className="w-[28%] flex justify-center">{usuario.nombre}</h1>
                  <h1 className="w-[18%] flex justify-center items-center">Id: {usuario.id}</h1>
                  <h1 className="w-[18%] flex justify-center items-center underline font-semibold cursor-pointer">Asignar rol</h1>
                  <h1 className="w-[18%] flex justify-center items-center underline font-semibold cursor-pointer">Editar</h1>
                  <h1 className="w-[18%] flex justify-center items-center underline font-semibold cursor-pointer">Eliminar</h1>
                </div>                                  
              ))} 
              
            </div>
          )}

        <div className="w-full mt-10">          
          <ul className="text-[#000000] text-[12px] md:text-[13px] flex flex-col w-[60%] xl:w-[30%] underline">
            <li className="mb-2 cursor-pointer">Supervisar medidas de seguridad</li>
            <li className="mb-2 cursor-pointer">Supervisar y gestionar recursos</li>
            <li className="mb-2 cursor-pointer">Realizar Backup de Gaia</li>
            <li className="mb-2 cursor-pointer">Realizar Auditoria</li>
          </ul>
        </div>

      </div>
    </div>
  ) : null
}

export default ModalManten