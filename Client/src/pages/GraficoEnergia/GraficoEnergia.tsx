import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
)

const data = {
  labels: ['Energia Eólica', 'Energia Térmica', 'Energia Solar'],
  datasets: [
    {
      data: [10000, 7000, 3000], // VALORES HARDCODEADOS
      backgroundColor: ['#699CD0', '#74C7ED', '#F0B778'], 
      
    },
  ],
};


const options = {
  responsive: true,
  maintainAspectRatio: false,

  // ... otras opciones
};

const GraficoEnergia = () => {
  return (
    <div>
      <section className="border-2">
        <div className="flex m-2 p-2 border-2 justify-center">
          <div className="w-[349px] h-[203px] rounded overflow-hidden shadow-lg flex flex-col m-4">
            <div className="flex justify-center items-center h-full">
              <span className="font-[600] text-[40px] text-center text-[#0487F2] mt-auto">
                10.000 Kw
              </span>
            </div>
            <div className="flex justify-end items-end h-full">
              <span className="text-[#A7A4B2E0] mb-4 mr-4">Total Generado</span>
            </div>
          </div>
          <div className="w-[349px] h-[203px] rounded overflow-hidden shadow-lg flex flex-col m-4">
            <div className="flex justify-center items-center h-full">
              <span className="font-[600] text-[40px] text-center text-[#0487F2] mt-auto">
                7.000 Kw
              </span>
            </div>
            <div className="flex justify-end items-end h-full">
              <span className="text-[#A7A4B2E0] mb-4 mr-4">Total Consumido</span>
            </div>
          </div>
          <div className="w-[349px] h-[203px] rounded overflow-hidden shadow-lg flex flex-col m-4">
            <div className="flex justify-center items-center h-full">
              <span className="font-[600] text-[40px] text-center text-[#0487F2] mt-auto">
                3.000 Kw
              </span>
            </div>
            <div className="flex justify-end items-end h-full">
              <span className="text-[#A7A4B2E0] mb-4 mr-4">Total Excedente</span>
            </div>
          </div>
        </div> 
      </section>
      <section>
        <div className=' border-2  justify-center'> 
        <Doughnut className='w-[321px] h-[400px] justify-center'
          data = {data}
          options = {options}
          ></Doughnut>
        </div>
        <div className="mt-12 flex ">
            <button className="w-[151px] h-[47px]  bg-neutral-100 rounded-[15px] text-[#857D7D] m-1">
              Energia Solar
            </button>
            <button className="w-[151px] h-[47px] bg-neutral-100 rounded-[15px] text-[#857D7D] m-1">
              Generado
            </button>
            <button className="w-[151px] h-[47px] bg-neutral-100 rounded-[15px] text-[#857D7D] m-1">
              Tiempo real
            </button>
            <div className='ml-20'>
            <span className='text-[#857D7D] text-[16px] font-[700]'>0 Kws</span>
            <p className='text-[#857D7D]'>Actual</p>
            </div>
            <div className='ml-20'>
            <span className='text-[#857D7D] text-[16px] font-[700]'>0 Kws</span>
            <p className='text-[#857D7D]'>Basico</p>
            </div>
            <div className='ml-20'>
            <span className='text-[#857D7D] text-[16px] font-[700]'>0 Kws</span>
            <p className='text-[#857D7D]'>Total</p>
            </div>
          </div>
      </section>
    </div>
  );
};

export default GraficoEnergia;
