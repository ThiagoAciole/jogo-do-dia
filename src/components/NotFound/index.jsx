/* eslint-disable react/prop-types */
import notfound from "../../assets/notfound.svg";

export default function NotFound() {
  return (
    <>
      <div className="py-32">
        <div className="flex flex-col justify-center items-center space-y-8">
          <img src={notfound} alt="" width={150} />
          <p className="text-gray-500 text-lg">Nenhum jogo encontrado</p>
        </div>
      </div>
    </>
  );
}
