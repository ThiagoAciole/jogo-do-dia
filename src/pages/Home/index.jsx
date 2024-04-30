import Card from "../../components/Card";

import { useState } from "react";
import { IoToday } from "react-icons/io5";

import DateSlide from "../../components/DateSlide";
import HeaderTitle from "../../components/HeaderTitle";
import NotFound from "../../components/NotFound";

const games = [];
export default function Home() {
  const [displayedGames, setDisplayedGames] = useState(6);

  const handleShowMore = () => {
    setDisplayedGames(displayedGames + 6);
  };
  const handleAntMore = () => {
    setDisplayedGames(displayedGames - 6);
  };

  const visibleButton = games.length > displayedGames ? true : false;

  return (
    <div className="space-y-12">
      <HeaderTitle
        title="Jogos do Dia"
        description="Acompanhe os jogos e eventos mais importantes do futebol para o dia"
        icon={<IoToday className="text-blue-500 text-4xl" />}
      />

      {games.length < 1 ? (
        <div className="flex flex-col justify-center items-center ">
          <NotFound />
        </div>
      ) : (
        <>
          <DateSlide />
          <div className="space-y-24 ">
            <div className="space-y-6 ">
              <h2 className="text-lg font-semibold text-gray-500 border-l-4 border-blue-600 p-1 px-2">
                Superliga Dinamarquesa
              </h2>
              <div className="flex flex-wrap justify-between  mt-6 gap-4">
                {games.slice(0, displayedGames).map((game, index) => (
                  <div key={index} className="w-full lg:w-3/10 mb-4">
                    <Card
                      homeTeam={game.homeTeam}
                      awayTeam={game.awayTeam}
                      homeScore={game.homeScore}
                      awayScore={game.awayScore}
                      date={game.date}
                    />
                  </div>
                ))}
              </div>
              {visibleButton && (
                <div>
                  {displayedGames > games.length ? (
                    <button
                      onClick={handleShowMore}
                      className=" w-full border rounded-lg border-blue-600 text-blue-600 px-4 py-2 focus:outline-none focus:border-blue-500 hover:bg-blue-600 hover:text-white"
                    >
                      Ver mais
                    </button>
                  ) : (
                    <button
                      onClick={handleAntMore}
                      className=" w-full border rounded-lg border-blue-600 text-blue-600 px-4 py-2 focus:outline-none focus:border-blue-500 hover:bg-blue-600 hover:text-white"
                    >
                      Ver menos
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
