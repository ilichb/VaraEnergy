

const Transaction = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white w-4/5 h-56 rounded-md mt-10 flex items-center gap-10 justify-around p-2.5">
      <div className="w-80 h-48 flex flex-col bg-gradient-to-r from-secondary to-primary rounded-md">
          <div className="flex gap-10 p-2.5 items-center justify-between">
            <img className="w-14 h-14" src="/LOGOGAIASOLO.png" alt="" />
            <div className="flex gap-1">
              <button
                className="cursor-pointer transition-all bg-blue-500 text-white px-2 py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px] "
              >
                Convertir
              </button>
              <button className="cursor-pointer transition-all bg-blue-500 text-white px-2 py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">Enviar</button>
            </div>
          </div>
          <div className="flex items-center justify-between p-2.5">
            <h2 className="text-3xl">Gaias</h2>
            <h2 className="text-3xl"> 10</h2>
          </div>
          <h2 className="p-2.5 text-3xl ">$1000 USD</h2>
        </div>




        <div className="w-80 h-48 flex flex-col bg-gradient-to-r from-vara to-black rounded-md">
          <div className="flex gap-10 p-2.5 items-center justify-between">
            <img className="w-14 h-14" src="/VaraCrypto.png" alt="" />
            <div className="flex gap-1">
              <button
                className="cursor-pointer transition-all bg-blue-500 text-white px-2 py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px] "
              >
                Convertir
              </button>
              <button className="cursor-pointer transition-all bg-blue-500 text-white px-2 py-2 rounded-lg
border-blue-600
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">Enviar</button>
            </div>
          </div>
          <div className="flex items-center justify-between p-2.5">
            <h2 className="text-3xl">VARA</h2>
            <h2 className="text-3xl"> 7</h2>
          </div>
          <h2 className="p-2.5 text-3xl ">$2,367 USD</h2>
        </div>





        <div className="w-80 h-48 bg-secondary rounded-md"></div>
      </div>
    </div>
  );
};

export default Transaction;
