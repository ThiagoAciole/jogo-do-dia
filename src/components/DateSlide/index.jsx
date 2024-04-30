import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function DateSlide() {
  // eslint-disable-next-line no-unused-vars
  const [date, setDate] = useState(Array.from({ length: 31 }, (_, i) => i + 1));

  const today = new Date();

  const Mes = today.toLocaleString("default", { month: "long" });
  const Ano = today.getFullYear();

  const [selectedItem, setSelectedItem] = useState(today.getDate());
  const [startIndex, setStartIndex] = useState(selectedItem - 3);

  const handleNext = () => {
    if (startIndex + 5 < date.length) {
      setStartIndex(startIndex + 1);
    } else {
      setStartIndex(0);
    }
  };

  const handlePrev = () => {
    if (startIndex - 1 >= 0) {
      setStartIndex(startIndex - 1);
    } else {
      setStartIndex(date.length - 5);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="text-blue-500 font-bold text-lg">
        {Mes} {Ano}
      </div>
      <div className="flex flex-row space-x-4 w-full justify-between items-center">
        <button onClick={handlePrev}>
          <FaChevronLeft className="text-blue-500" />
        </button>
        {date.slice(startIndex, startIndex + 5).map((day) => (
          <div
            onClick={() => setSelectedItem(day)}
            key={day}
            className={`cursor-pointer  flex flex-col items-center justify-center rounded-full bg-tremor-background-subtle ${
              selectedItem === day
                ? "border-blue-500 border-2 text-blue-500 w-16 h-16 text-lg font-bold"
                : "text-gray-600 w-12 h-12 text-md"
            }`}
          >
            {day}
          </div>
        ))}
        <button onClick={handleNext}>
          <FaChevronRight className="text-blue-500" />
        </button>
      </div>
    </div>
  );
}
