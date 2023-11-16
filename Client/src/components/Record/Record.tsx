import Db from './Db.json'

const Record = () => {
const data = Db
console.log(data);

  return (
    <div className="flex flex-col items-center">
      <div className="bg-white w-4/5 h-96 rounded-md mt-5 flex flex-col items-center gap-5  p-2.5">
        {data.registros.map((e)=>(
                <div className='bg-black text-white flex items-center justify-between w-full h-10'>
                <h1>{e.nombre}</h1>
                <h1>{e.tipo_transaccion}</h1>
                <h1>{e.tipo_transaccion}</h1>
                <h1>{e.cantidad_kw}Kw</h1>
                <h1>{e.total}</h1>
            </div>

        ))}
      </div>
    </div>
  );
};

export default Record;
