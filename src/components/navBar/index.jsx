import { useState, useEffect } from "react";
import Logo from "../../assets/Logo.svg";
import { Link, useLocation } from "react-router-dom";
import { RiSearchLine } from "@remixicon/react";
import { TextInput } from "@tremor/react";
import { RiHome6Fill } from "react-icons/ri";
import { CgMediaLive } from "react-icons/cg";
import { PiSoccerBallFill } from "react-icons/pi";
import { IoMdTrophy } from "react-icons/io";

export default function NavBar() {
  const [selectedItem, setSelectedItem] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const items = [
    {
      path: "/",
      label: "Início",
      icon: RiHome6Fill,
    },
    {
      path: "/live",
      label: "Ao Vivo",
      icon: CgMediaLive,
    },
    {
      path: "/team",
      label: "Times",
      icon: PiSoccerBallFill,
    },
    {
      path: "/tournament",
      label: "Campeonatos",
      icon: IoMdTrophy,
    },
  ];
  const handleSelected = (item) => {
    setSelectedItem(item);
    setIsMenuOpen(false);
  };
  useEffect(() => {
    setSelectedItem(location.pathname);
  }, [location]);

  return (
    <nav className="bg-white p-4 px-8 flex justify-between items-center shadow-md ">
      <div className="w-28">
        <a href="/">
          <img src={Logo} alt="" />
        </a>
      </div>
      <div className="sm: hidden md:block ">
        <ul className=" flex justify-center items-center space-x-6  ">
          {items.map((item) => (
            <Link key={item.name} to={item.path}>
              <button
                onClick={() => setSelectedItem(item.path)}
                className={`text-gray-700 text-base  p-1 hover:text-gray-900  ${
                  selectedItem === item.path
                    ? "border-b-4 rounded-md border-blue-500"
                    : ""
                }`}
              >
                <div className="flex flex-row gap-2 items-center ">
                  <item.icon className="text-blue-600" />
                  {item.label}
                </div>
              </button>
            </Link>
          ))}
        </ul>
      </div>

      <div className="md:hidden sm:block">
        <button
          onClick={() => setIsMenuOpen(true)}
          className="p-1.5 border rounded-lg border-gray-300 focus:outline-none focus:border-blue-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-0 left-0  w-72 h-screen bg-white shadow-lg border z-10 flex flex-col space-y-8 p-12">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <ul className="flex flex-col items-center space-y-6">
            <div className="">
              <TextInput
                icon={RiSearchLine}
                placeholder="Pesquisar"
                className="w-60  focus:outline-none focus:border-blue-500"
              />
            </div>
            {items.map((item) => (
              <Link key={item.name} to={item.path}>
                <button
                  onClick={() => handleSelected(item.path)}
                  className={`text-gray-700 text-base  p-1 hover:text-gray-900  ${
                    selectedItem === item.path
                      ? "border-b-4 rounded-md border-blue-500"
                      : ""
                  }`}
                >
                  <div className="flex flex-row gap-2 items-center ">
                    <item.icon className="text-blue-600" />
                    {item.label}
                  </div>
                </button>
              </Link>
            ))}
          </ul>
        </div>
      )}

      <div className="hidden md:block ">
        <TextInput
          icon={RiSearchLine}
          placeholder="Pesquisar"
          className="w-60  focus:outline-none focus:border-blue-500"
        />
      </div>
    </nav>
  );
}
