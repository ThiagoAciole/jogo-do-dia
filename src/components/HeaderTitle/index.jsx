/* eslint-disable react/prop-types */

export default function HeaderTitle({ title, description, icon }) {
  return (
    <>
      <div className="flex flex-row space-x-2">
        {icon}
        <div className="flex flex-col ">
          <h1 className="text-3xl font-bold text-gray-600">{title}</h1>
          <p className="text-gray-500 text-md">{description}</p>
        </div>
      </div>
    </>
  );
}
