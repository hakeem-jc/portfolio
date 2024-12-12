import { FC } from 'react';

interface SkillProps {
    name: string,
    image: string
}

const Skill:FC<SkillProps> = ({ name, image }) => {
    return (
      <div className="w-40 rounded-lg shadow bg-gray-800 border-gray-700 p-5">
        <div className="flex flex-col items-center pb-2">
          <img
            className="w-12 h-12 mb-3 rounded-full shadow-lg"
            src={image}
            alt="Skill Logo"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {name}
          </h5>
        </div>
      </div>
    );
}   

export default Skill;