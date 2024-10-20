const SkillCard = ({
  skill,
  iconName,
}: {
  skill: string;
  iconName: JSX.Element;
}) => {
  return (
    <div className="border-2 flex flex-col justify-center items-center gap-3 rounded-md w-36 h-36 border-black p-3">
      <div className="text-7xl">{iconName}</div>
      <p>{skill}</p>
    </div>
  );
};

export default SkillCard;

//! NextJs
//! ReactJs
//! Redux
//! MySql
//! Tailwindcss
//! Node.JS
//! Express.Js
//! firebase
//! Zod
