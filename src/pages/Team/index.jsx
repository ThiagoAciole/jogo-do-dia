import { PiSoccerBallFill } from "react-icons/pi";
import HeaderTitle from "../../components/HeaderTitle";
import NotFound from "../../components/NotFound";
export default function Team() {
  return (
    <>
      <HeaderTitle
        title="Times"
        description="Acompanhe todos os jogos do seu time favorito"
        icon={<PiSoccerBallFill className="text-blue-500 text-4xl" />}
      />
        <div className="flex flex-col justify-center items-center ">
        <NotFound />
      </div>
    </>
  );
}
