import { BsCheck2Circle } from "react-icons/bs"; 
import { HiOutlineBell } from "react-icons/hi"; 
import { FiAlertCircle } from "react-icons/fi"; 
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Energia Eólica", "Energia Térmica", "Energia Solar"],
  datasets: [
    {
      data: [10000, 7000, 3000], // VALORES HARDCODEADOS
      backgroundColor: ["#699CD0", "#74C7ED", "#F0B778"],
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,

  // ... otras opciones
};

const SuperUser = () => {
  return (
    <div className="flex flex-row ">

      <div className="w-[30%] flex flex-col items-start h-[30vh]">
        <div style={{ transform: "scale(0.70)" }} className="h-[30vh]">

          <div className="w-[300px] h-[100px] rounded overflow-hidden shadow-lg flex flex-col m-4">
            <div className="flex justify-end mr-2">
              <span className="text-[#757376] text-2xl">
                <FiAlertCircle />
              </span>
            </div>
            <div className="flex justify-center items-center h-full">
            <span className="text-[#757376]">
                La red Gaia esta inestable
              </span>
            </div>
            <div className="flex justify-end mr-2">
              <span className="text-[#A7A4B2E0]">
                Alerta
              </span>
            </div>
          </div>
       
        <div className="w-[300px] h-[100px] rounded overflow-hidden shadow-lg flex flex-col m-4">
          <div className="flex justify-end mr-2">
            <span className="text-[#757376] text-2xl">
              <HiOutlineBell />
            </span>
          </div>
          <div className="flex justify-center items-center h-full">
          <span className="text-[#757376]">
              Hay actualizaciones de software
            </span>
          </div>
          <div className="flex justify-end mr-2">
            <span className="text-[#A7A4B2E0]">
              Notificacion
            </span>
          </div>
        </div>
        
        </div>
      </div>


      

      <div className="w-[40%]">
        <section className="flex justify-center items-center border-2 h-[30vh] mb-6">
          <div style={{ transform: "scale(0.70)" }}>
            <div className="flex m-2 p-2 border-2 justify-center items-center ">
              <div className="w-[349px] h-[203px] rounded overflow-hidden shadow-lg flex flex-col m-4">
                <div className="flex justify-center items-center h-full">
                  <span className="font-[600] text-[40px] text-center text-[#0487F2] mt-auto">
                    100.000 Kw
                  </span>
                </div>

                <div className="flex justify-end items-end h-full">
                  <span className="text-[#A7A4B2E0] mb-4 mr-4">
                    Total Generado en la red
                  </span>
                </div>
              </div>

              <div className="w-[349px] h-[203px] rounded overflow-hidden shadow-lg flex flex-col m-4">
                <div className="flex justify-center items-center h-full">
                  <span className="font-[600] text-[40px] text-center text-[#0487F2] mt-auto">
                    70.000 Kw
                  </span>
                </div>

                <div className="flex justify-end items-end h-full">
                  <span className="text-[#A7A4B2E0] mb-4 mr-4">
                    Total Consumido en la red
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="border-2">
            <Doughnut
              className="w-[221px] h-[300px] justify-center"
              data={data}
              options={options}
            ></Doughnut>
          </div>

          <div style={{ transform: "scale(0.75)" }} className="mt-6 flex justify-center">            
            <button className="w-[151px] h-[47px]  bg-neutral-100 rounded-[15px] text-[#857D7D] m-1">
              Energia Solar
            </button>

            <button className="w-[151px] h-[47px] bg-neutral-100 rounded-[15px] text-[#857D7D] m-1 ml-8">
              Tiempo real
            </button>

            <div className="ml-8 w-28">
              <span className="text-[#857D7D] text-[16px] font-[700]">
                0 Kws
              </span>
              <p className="text-[#857D7D]">Uso de la red</p>
            </div>      
          </div>
        </section>
      </div>




      <div className="w-[30%] flex flex-col justify-center items-center h-[30vh]">
        <div style={{ transform: "scale(0.70)" }} className="h-[30vh]">

          <div className="w-[340px] h-[250px] rounded overflow-hidden shadow-lg flex flex-col">
            <div className="flex justify-center items-center h-32">
              <span className="text-center text-8xl  text-[#4bc844]">
                <BsCheck2Circle />
              </span>
            </div>

            <div className="flex justify-center items-center h-10">
              <span className="text-center text-[#757376]">
                El estado de la red es seguro
              </span>
            </div>

            <div className="flex justify-center items-center h-10">
              <span className="text-[#A7A4B2E0]">
                1000 kWh de capacidad actual
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-end items-end mt-10">
           
            <button className="w-[250px] h-[40px] bg-[#74C7ED] rounded-[5px] text-lg text-[#ffffff] mt-4" >
              Configuracion del sistema
            </button>
            <button className="w-[250px] h-[40px] bg-[#74C7ED] rounded-[5px] text-lg text-[#ffffff] mt-4" >
              Mantenimiento del sistema
            </button>
            <button className="w-[250px] h-[40px] bg-[#74C7ED] rounded-[5px] text-lg text-[#ffffff] mt-4" >
              Administrar generadores
            </button>
            <button className="w-[250px] h-[40px] bg-[#74C7ED] rounded-[5px] text-lg text-[#ffffff] mt-4" >
              Administrar transacciones
            </button>
            <button className="w-[250px] h-[40px] bg-[#74C7ED] rounded-[5px] text-lg text-[#ffffff] mt-4" >
              Configuracion de las tarifas
            </button>
            <button className="w-[250px] h-[40px] bg-[#74C7ED] rounded-[5px] text-lg text-[#ffffff] mt-4" >
              Control de la red
            </button>
            <button className="w-[250px] h-[40px] bg-[#74C7ED] rounded-[5px] text-lg text-[#ffffff] mt-4" >
              Informes y Analisis
            </button>
            

           
          </div>

        </div>
      </div>

      
    </div>
  );
};

export default SuperUser;
