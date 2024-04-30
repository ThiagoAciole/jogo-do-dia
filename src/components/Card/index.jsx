/* eslint-disable react/prop-types */
import { PiSoccerBallFill } from "react-icons/pi";

import { Card } from "@tremor/react";
export default function CardGame({
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  date,
}) {
  function formatarDataHora(dataHora) {
    const data = new Date(dataHora);
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const ano = data.getFullYear();
    const hora = String(data.getHours()).padStart(2, "0");
    const minuto = String(data.getMinutes()).padStart(2, "0");

    return `${dia}/${mes}/${ano} às ${hora}:${minuto}`;
  }
  const data = new Date(date);

  const today = new Date();

  const TagToday = today.getDate() === data.getDate();

  return (
    <Card
      className="space-y-4 transition ease-in-out delay-80 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
      decoration="top"
      decorationColor="indigo"
    >
      <div className="flex justify-between">
        <div className="text-gray-500 text-sm ">
          <p>{formatarDataHora(date)}</p>
        </div>
        {TagToday && (
          <div className="flex items-center space-x-1 border border-blue-500 px-4 rounded-full">
            <span className="text-blue-600">Hoje</span>
          </div>
        )}
      </div>
      <div className="flex flex-col justify-between space-y-2 ">
        <div className="flex justify-between">
          <div className="flex space-x-1 items-center">
            <PiSoccerBallFill className="text-blue-600" />
            <span className="font-semibold">{homeTeam}</span>
          </div>
          <span className="text-gray-600">{homeScore}</span>
        </div>
        <div className="flex justify-between">
          <div className="flex space-x-1 items-center">
            <PiSoccerBallFill className="text-blue-600" />
            <span className="font-semibold">{awayTeam}</span>
          </div>
          <span className="text-gray-600">{awayScore}</span>
        </div>
      </div>
    </Card>
  );
}
