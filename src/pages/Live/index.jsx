import { CgMediaLive } from "react-icons/cg";
import HeaderTitle from "../../components/HeaderTitle";
import NotFound from "../../components/NotFound";

export default function Live() {
  return (
    <>
      <HeaderTitle
        title="Jogos ao Vivo"
        description="Acompanhe os jogos que estão acontecendo agora"
        icon={<CgMediaLive className="text-blue-500 text-4xl" />}
      />
      <div className="flex flex-col justify-center items-center ">
        <NotFound />
      </div>
    </>
  );
}
