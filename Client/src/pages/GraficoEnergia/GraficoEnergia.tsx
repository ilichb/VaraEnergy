import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
// import Eclipse from "../../assets/Eclipse.svg";
import { useState, useEffect } from "react";
import PopUpAlert from "../../components/PopUpALert/PopUpAlert.tsx";
import json from "./data.json";
import { NavLink } from "react-router-dom";
// import PanelUsuarioFinal from "../panelUsuarioFinal/PanelUsuarioFinal.tsx";
import { format } from "date-fns";
import Polygon5 from "../../assets/Polygon5.svg";

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
      max: 15000,
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
  const [tipoEnergia, setTipoEnergia] = useState("");
  const [barData, setBarData] = useState({
    labels: ["", "", "", "", "", "", "", "", "", "", ""],
    datasets: [
      {
        // type: "bar",
        label: "Valores de energía",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: ["#74C7ED", "#F37B7B", "#699CD0"],
        barThickness: 25,
      },
    ],
  });

  const handleSelectionEnergy = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedType = event.target.value;

    // Asigna el tipo de energía seleccionado y los datos correspondientes
    setTipoEnergia(selectedType);
    switch (selectedType) {
      case "solar":
        setBarData({
          labels: ["", "", "", "", "", "", "", "", "", "", " "],
          datasets: [
            {
              label: "Valores de energía",
              data: [json.energia_solar],
              backgroundColor: ["#74C7ED", "#F37B7B", "#699CD0"],
              barThickness: 25,
            },
          ],
        });
        break;
      case "Termica":
        setBarData({
          labels: ["", "", "", "", "", "", "", "", "", "", " "],
          datasets: [
            {
              label: "Valores de energía",
              data: json.energia_termica,
              backgroundColor: ["#74C7ED", "#F37B7B", "#699CD0"],
              barThickness: 25,
            },
          ],
        });
        break;
      case "Eolica":
        setBarData({
          labels: ["", "", "", "", "", "", "", "", "", "", " "],
          datasets: [
            {
              label: "Valores de energía",
              data: json.energia_eolica,
              backgroundColor: ["#74C7ED", "#F37B7B", "#699CD0"],
              barThickness: 25,
            },
          ],
        });
        break;
      default:
        // Puedes manejar un caso por defecto si es necesario
        break;
    }
  };

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch("src/pages/GraficoEnergia/data.json");
  //     const data = await response.json();
  //     return data;
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //     return null;
  //   }
  // };

  const updateBarChart = () => {
    const newData = Array.from({ length: 12 }, () =>
      Math.floor(Math.random() * 15001)
    );

    const newBarData = {
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
    const intervalId = setInterval(updateBarChart, 1500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const currentDate = new Date();

  const showDate = format(currentDate, "dd/MM/yyyy HH:mm");

  // const handleSeleccion = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setTipoEnergia(event.target.value);
  // };

  // no es necesario por ahora
  const mostrarSeleccion = () => {};
  return (
    <div className="w-full">
      <section className="bg-white md:p-8">
        <div className="flex flex-col md:flex-row  p-2 justify-center">
          <div className=" ms:w-228 ] md:w-[349px] h-[203px]  rounded overflow-hidden shadow-lg flex flex-col m-4">
            <div className="flex justify-center items-center h-full">
              <span className="font-[600] text-[40px] text-center text-[#0487F2] mt-auto">
                10.000 Kw
              </span>
            </div>
            <div className="flex justify-end items-end h-full">
              <span className="text-[#A7A4B2E0] mb-4 mr-4">Total Generado</span>
            </div>
          </div>
          <div className="ms:w-228 md:w-[349px] h-[203px] rounded overflow-hidden shadow-lg flex flex-col m-4">
            <div className="flex justify-center items-center h-full">
              <span className="font-[600] text-[40px] text-center text-[#0487F2] mt-auto">
                7.000 Kw
              </span>
            </div>
            <div className="flex justify-end items-end h-full">
              <span className="text-[#A7A4B2E0] mb-4 mr-4">
                Total Consumido
              </span>
            </div>
          </div>
          <div className="ms:w-228 md:w-[349px] h-[203px] rounded overflow-hidden shadow-lg flex flex-col m-4">
            <div className="flex justify-center items-center h-full">
              <span className="font-[600] text-[40px] text-center text-[#0487F2] mt-auto">
                3.000 Kw
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
            onChange={handleSelectionEnergy}
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
            onChange={handleSelectionEnergy}
            value={tipoEnergia}
            className="w-[150px] sm:w-[151px] h-[47px] bg-neutral-100 rounded-[15px] text-[#857D7D] m-1"
          >
            <option value="solar">Generado</option>
          </select>
          <select
            id="tipoEnergia"
            name="tipoEnergia"
            onChange={handleSelectionEnergy}
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
