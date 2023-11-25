import Data from "./Data.json";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import Chart from 'chart.js/auto';

import { Pie, Bar } from "react-chartjs-2";
import { useState, useEffect } from "react";
import PopUpAlert from "../../components/PopUpALert/PopUpAlert.tsx";
import { NavLink } from "react-router-dom";
// import PanelUsuarioFinal from "../panelUsuarioFinal/PanelUsuarioFinal.tsx";
import { format } from "date-fns";
// import Polygon5 from "../../assets/Polygon5.svg";

interface Data {
  energia_solar: number[];
  energia_termica: number[];
  energia_eolica: number[];
  // total_generado: number[];
  // total_consumido: number[];
  // total_excedente: number[];
}


interface BarData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    barThickness: number;
  }[];
}

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const dataPie = {
  labels: ["Energia Eólica", "Energia Térmica", "Energia Solar"],
  datasets: [
    {
      // type: "pie", no hace falta el type
      data: [10000, 7000, 3000],
      backgroundColor: ["#699CD0", "#74C7ED", "#F0B778"],
    },
  ],
};
// estilos
const optionsPie = {
  responsive: true,
  maintainAspectRatio: false,
};

const optionsBar = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      display: false,
      beginAtZero: true,
      max: 20000,
    },
  },
  elements: {
    bar: {
      borderRadius: [10],
    },
  },
};

const GraficoEnergia = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [tipoEnergia, setTipoEnergia] = useState<keyof Data>("Solar");
  const [barData, setBarData] = useState<BarData>({
    labels: ["", "", "", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        // type: "bar",
        label: "Valores de energía",
        data: Array.from({ length: 11 }, () => 0),
        backgroundColor: ["#74C7ED", "#F37B7B", "#699CD0"],
        barThickness: 25,
      },
    ],
  });



  const updateBarChart = () => {
    // console.log("Updating bar chart with tipoEnergia:", tipoEnergia);

    const newData = tipoEnergia && Data[tipoEnergia]
    ? Data[tipoEnergia]
    : Array.from({ length: 11 }, () => 0);

    // console.log('Tipo de Energía:', tipoEnergia);
    // console.log('Datos de Energía:', Data[tipoEnergia]);
    // console.log('New data:', newData);
    console.log(typeof newData[0]); 

    const newBarData: BarData = {
      ...barData,
      datasets: [
        {
          ...barData.datasets[0],
          data: newData,
        },
      ],
    };
  
    setBarData(newBarData);
  };

  useEffect(() => {
    console.log('Data from JSON:', Data);

    const intervalId = setInterval(updateBarChart, 1500);

    return () => {
      clearInterval(intervalId);
    };
  }, [tipoEnergia]);

  const currentDate = new Date();

  const showDate = format(currentDate, "dd/MM/yyyy HH:mm");

  const handleSeleccion = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTipoEnergia(event.target.value);
  };

//json data
const totalGenerado = Data["total_generado"][0] || 0; // Si la propiedad no está definida, asigna 0
const totalConsumido = Data["total_consumido"][0] || 0;
const totalExcedente = Data["total_excedente"][0] || 0;





  
const openPopup = () => {
  setPopupOpen(true);
};

const closePopup = () => {
  setPopupOpen(false);
};

  return (
    <div className="w-full">
      <section className="bg-white md:p-8">
        <div className="flex flex-col md:flex-row  p-2 justify-center">
          <div className=" ms:w-228 ] md:w-[349px] h-[203px]  rounded overflow-hidden shadow-lg flex flex-col m-4">
            <div className="flex justify-center items-center h-full">
              <span className="font-[600] text-[40px] text-center text-[#0487F2] mt-auto">
                {totalGenerado}Kw
              </span>
            </div>
            <div className="flex justify-end items-end h-full">
              <span className="text-[#A7A4B2E0] mb-4 mr-4">Total Generado</span>
            </div>
          </div>
          <div className="ms:w-228 md:w-[349px] h-[203px] rounded overflow-hidden shadow-lg flex flex-col m-4">
            <div className="flex justify-center items-center h-full">
              <span className="font-[600] text-[40px] text-center text-[#0487F2] mt-auto">
                {totalConsumido}Kw
              </span>
            </div>
            <div className="flex justify-end items-end h-full">
              <span className="text-[#A7A4B2E0] mb-4 mr-4">
               totalConsumido
              </span>
            </div>
          </div>
          <div className="ms:w-228 md:w-[349px] h-[203px] rounded overflow-hidden shadow-lg flex flex-col m-4">
            <div className="flex justify-center items-center h-full">
              <span className="font-[600] text-[40px] text-center text-[#0487F2] mt-auto">
                {totalExcedente} Kw
              </span>
            </div>
            <div className="flex justify-end items-end h-full">
              <span className="text-[#A7A4B2E0] mb-4 mr-4">
                Total Excedente
              </span>
            </div>
          </div>

          <div className="flex flex-col p-2 mb-24 md:ml-10 items-center md:items-start">
            <button className="text-[#699CD0] text-[18px] underline mt-4 md:mt-0 text-center md:text-left">
              Panel de generación y consumo
            </button>
            <NavLink to="/panelUsuarioFinal">
              <button className="text-[#699CD0] text-[18px] underline mt-4 md:mt-0 text-center md:text-left">
                Administrar Dispositivos.
              </button>
            </NavLink>
            <button
              className="text-[#699CD0] text-[18px] underline mt-4 md:mt-0 text-center md:text-left"
              onClick={openPopup}
            >
              Crear Alertas
            </button>
            {popupOpen && <PopUpAlert onClose={closePopup} />}
          </div>
        </div>

        <div className="justify-center h-96 mb-24">
          <Pie
            className="w-[400px] h-[400px] justify-center"
            data={dataPie}
            options={optionsPie}
          ></Pie>
        </div>

        <div className="mt-12 flex flex-col items-center sm:flex-row sm:justify-center">
          <select
            id="tipoEnergia"
            name="tipoEnergia"
            onChange={handleSeleccion}
            value={tipoEnergia}
            className="w-[150px] sm:w-[151px] h-[47px] bg-neutral-100 rounded-[15px] text-[#857D7D] m-1"
          >
            <option value="">Selecciona...</option>
            <option value="Solar">Energía Solar</option>
            <option value="Termica">Energía Termica</option>
            <option value="Eolica">Energía Eolica</option>
          </select>
          <select
            id="tipoEnergia"
            name="tipoEnergia"
            onChange={handleSeleccion}
            value={tipoEnergia}
            className="w-[150px] sm:w-[151px] h-[47px] bg-neutral-100 rounded-[15px] text-[#857D7D] m-1"
          >
            <option value="solar">Generado</option>
          </select>
          <select
            id="tipoEnergia"
            name="tipoEnergia"
            onChange={handleSeleccion}
            value={tipoEnergia}
            className="w-[150px] sm:w-[151px] h-[47px] bg-neutral-100 rounded-[15px] text-[#857D7D] m-1"
          >
            <option value="solar">Tiempo Real</option>
          </select>

          <div className="mt-4 sm:mt-0 sm:ml-4 flex flex-col items-center sm:flex-row">
            <div className="flex items-center mb-2 sm:mb-0">
              <span className="text-[#857D7D] text-[16px] font-[700]">
                0 Kws
              </span>
              <p className="text-[#857D7D] ml-2">Actual</p>
            </div>
            <div className="flex items-center mb-2 sm:mb-0 sm:ml-4">
              <span className="text-[#857D7D] text-[16px] font-[700]">
                0 Kws
              </span>
              <p className="text-[#857D7D] ml-2">Basico</p>
            </div>
            <div className="flex items-center">
              <span className="text-[#857D7D] text-[16px] font-[700]">
                0 Kws
              </span>
              <p className="text-[#857D7D] ml-2">Total</p>
            </div>
            <br />
          </div>
        </div>

        <div className="flex mx-auto max-w-screen-md h-[200px]">
          <Bar data={barData} options={optionsBar} />
          <div className="border-4 m-auto ml-32 bg-gray-100 h-32 rounded-full hidden lg:flex items-center justify-center border-gray-300">
            <p className="text-gray-400 text-xl m-2 text-center">{showDate}</p>
          </div>
        </div>


      </section>
    </div>
  );
};

export default GraficoEnergia;
