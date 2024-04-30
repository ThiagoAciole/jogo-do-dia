import { IoMdTrophy } from "react-icons/io";
import HeaderTitle from "../../components/HeaderTitle";
import NotFound from "../../components/NotFound";
export default function Tournament() {
  return (
    <>
      <HeaderTitle
        title="Campeonatos"
        description="Acompanhe os principais campeonatos do Brasil e do Mundo"
        icon={<IoMdTrophy className="text-blue-500 text-4xl" />}
      />
      <div className="flex flex-col justify-center items-center ">
        <NotFound />
      </div>
    </>
  );
}
