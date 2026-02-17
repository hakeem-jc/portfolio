import Image from "next/image";

const GridBG = () => {
  return (
    <div className="w-full pt-20 pb-5">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/bg-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
          width={2000}
          height={2000}
        />
      </div>
    </div>
  );
};

export default GridBG;
