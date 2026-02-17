import { FC } from "react";
import Image from "next/image";

interface SkillProps {
  name: string;
  image: string;
}

const Skill: FC<SkillProps> = ({ name, image }) => {
  return (
    <div className="w-44 rounded-lg shadow bg-secondary border-gray-700 p-5 max-h-32">
      <div className="flex flex-col items-center pb-2">
        <Image
          src={image}
          alt={`${name} logo`}
          width={56}
          height={56}
          className="mb-3 shadow-lg"
          loading="lazy"
          sizes="56px"
        />
        <h5 className="mb-1 font-medium text-white">
          {name}
        </h5>
      </div>
    </div>
  );
};

export default Skill;