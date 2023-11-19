import { useState } from "react"
import ModalConfig from "../ModalConfig/ModalConfig";
import { GrClose } from "react-icons/gr"; 

interface modalAdministrar{
  showAdmin: boolean;
  setShowAdmin(show:boolean): void;
}

function ModalAdministrar(props:modalAdministrar) {

  const [show, setShow] = useState(false)

  return props.showAdmin ?(
    <>
    <div className="bg-[#0000003d] fixed top-0 left-0 h-full w-full flex justify-center items-center">
      <div className="flex flex-col justify-start items-center bg-slate-200 h-[400px] w-[320px] rounded-2xl overflow-hidden shadow-lg p-4">

          <div className="text-[#000000] text-2xl flex justify-end w-full">
            <button 
            onClick={() => {props.setShowAdmin(false)}}            
            >
              <GrClose />
            </button>          
          </div>

          <div>
            <div className="w-[320px] h-full rounded flex flex-col">
              <div className="flex flex-col items-center">           
                <button onClick={() => {setShow(true)}} className="w-[250px] h-[30px] bg-[#74C7ED] rounded-[5px] text-md text-[#ffffff] mt-4" >
                  Configuracion del sistema
                </button>
                
                <button className="w-[250px] h-[30px] bg-[#74C7ED] rounded-[5px] text-md text-[#ffffff] mt-4" >
                  Mantenimiento del sistema
                </button>

                <button className="w-[250px] h-[30px] bg-[#74C7ED] rounded-[5px] text-md text-[#ffffff] mt-4" >
                  Administrar generadores
                </button>

                <button className="w-[250px] h-[30px] bg-[#74C7ED] rounded-[5px] text-md text-[#ffffff] mt-4" >
                  Administrar transacciones
                </button>

                <button className="w-[250px] h-[30px] bg-[#74C7ED] rounded-[5px] text-md text-[#ffffff] mt-4" >
                  Configuracion de las tarifas
                </button>

                <button className="w-[250px] h-[30px] bg-[#74C7ED] rounded-[5px] text-md text-[#ffffff] mt-4" >
                  Control de la red
                </button>

                <button className="w-[250px] h-[30px] bg-[#74C7ED] rounded-[5px] text-md text-[#ffffff] mt-4" >
                  Informes y Analisis
                </button>           
              </div>
            </div>

          </div>
          
      </div>

    </div>
    <ModalConfig show={show} setShow={setShow}/>
    </>
  ) : null
}

export default ModalAdministrar