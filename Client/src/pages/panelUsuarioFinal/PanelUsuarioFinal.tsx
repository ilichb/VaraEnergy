
import Polygon from "../../assets/Polygon.svg";
import PolygonUp from "../../assets/PolygonUp.svg";
import back from "../../assets/back.svg";
import { useState } from "react";

const PanelUsuarioFinal = () => {
  const [menuAbierto, setMenuAbierto] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuAbierto((prevMenuAbierto) => !prevMenuAbierto);
  };

  return (
    <section className="">
      <div className="h-[39px] text-end">
        <p className="text-[#699CD0] text-[20px] ">Panel de usuario final</p>
      </div>
      <div className="flex justify-center ml-auto mb-12">
        <h1 className="text-4xl  text-[#5A5A5A]  ">Dispositivos Encontrados</h1>
        <button className="w-28 h-10 bg-neutral-100 rounded-[5px] text-[#857D7D] ">
          Actualizar
        </button>
        <button>
          <img className="w-10 h-10 " src={back} alt="" />
        </button>
      </div>
      <div className=" border-2 p-4 w-[762px] h-[146px] mx-auto my-auto mb-8">
          <h2 className="text-[#5A5A5A] text-2xl mb-1">
          Solar Shed Light Indoor Outdoor 1200LM 144LED
          </h2>
          <p className="text-[#5A5A5A] text-[15px]">
            Tipo de Dispositivo: Generador Eolico
          </p>
          <p className="text-[#5A5A5A] text-[15px]">
            Fabricante: No especifica
          </p>
       
        
         
         <div className="">
          <p className="text-end text-[#5A5A5A] font-light">Conectado</p>
            <br />
            </div>
            <div className=" flex justify-center mt-[-32px]">
            <button
          className="flex items-center  text-[#5A5A5A] text-[16px] text-base font-semibold"
          onClick={toggleMenu}
        >
          Ver mas
          <img className="cursor-pointer ml-1" src={Polygon} alt="" />
        </button>
        </div>
           
         
        </div>
      
      {menuAbierto && (
        <div className=" border-2 p-4 w-[762px] h-[400px] mx-auto my-auto">
          <h2 className="text-[#5A5A5A] text-2xl mb-6">
            Vertical Wind Turbine Generator, 3000 Win...
          </h2>
          <p className="text-[#5A5A5A] text-[15px]">
            Tipo de Dispositivo: Generador Eolico
          </p>
          <p className="text-[#5A5A5A] text-[15px]">
            Fabricante: No especifica
          </p>
          <p className="text-[#5A5A5A] text-[15px]">
            Marca/Modelo: Generator 3000
          </p>
          <p className="text-[#5A5A5A] text-[15px]">
            Firmware Version: Firmware v2.10
          </p>
          <p className="text-[#5A5A5A] text-[15px]">Voltaje: 40w</p>
          <p className="text-[#5A5A5A] text-[15px]">
            Fabricante: No especifica
          </p>
          <p className="text-[#5A5A5A] text-[15px]">
          Temperatura: 10° C
          </p>
         
          <div className="mt-12">
            <button className="w-[99px] h-[40px] bg-neutral-100 rounded-[5px] text-[#857D7D] m-1">
              Reiniciar
            </button>
            <button className="w-[99px] h-[40px] bg-neutral-100 rounded-[5px] text-[#857D7D] m-1">
              Actualizar
            </button>
            <button className="w-[99px] h-[40px] bg-neutral-100 rounded-[5px] text-[#857D7D] m-1">
              Diagnosticar
            </button>
          </div>
          <div className="flex justify-between items-center  mt-6">
            <a href="#" className="text-end text-[#5A5A5A] text-[15px] underline ">
              Opciones Avanzadas
            </a>
            <button
          className="flex items-centers ml-auto text-[#5A5A5A] text-[16px] text-base font-semibold"
          onClick={toggleMenu}
        >
          Ver menos
          <img className="cursor-pointer ml-1 mt-2.5" src={PolygonUp} alt="" />
        </button>
            <span className=" text-[#5A5A5A] font-light  ml-auto">Desconectado</span>
            <br />
          </div>
        </div>
      )}
    </section>
  );
};

export default PanelUsuarioFinal;
