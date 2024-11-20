import { CiStar } from "react-icons/ci";

export default function Level({ level }) {
  // TODO: 난이도 별 색깔 처리
  return (
    <div className="relative inline-flex items-center justify-center text-red-400">
      <CiStar className="w-6 h-6 sm:w-8 sm:h-8" />
      <span className="w-6 h-6 sm:w-8 sm:h-8 absolute text-[10px] sm:text-12 font-bold  flex justify-center items-center">
        {level}
      </span>
    </div>
  );
}
