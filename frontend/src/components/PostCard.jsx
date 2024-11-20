import CheckImage from "./CheckImage";
import Level from "./Level";
import { useNavigate } from "react-router-dom";

export default function PostCard({ type, id, ...props }) {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/postdetail/${id}`);
  };

  const renderCard = () => {
    const cardProps = { ...props, onClick: onClick };
    switch (type) {
      case "type1":
        return <Type1Card {...cardProps} />;
      case "type2":
        return <Type2Card {...cardProps} />;
      case "type3":
        return <Type3Card {...cardProps} />;
      case "type4":
        return <Type4Card {...cardProps} />;
      default:
        return null;
    }
  };

  return (
    <div className="post-card cursor-pointer" onClick={onClick}>
      {renderCard()}
    </div>
  );
}

// 작은 사각형
function Type1Card({
  thumbnail,
  title,
  upload_date,
  learn_time,
  level,
  onClick,
  quiz_correct,
}) {
  return (
    <div className="relative group p-2 shadow sm:p-0" onClick={onClick}>
      <div className="h-48 w-full overflow-hidden hidden sm:block">
        <CheckImage src={thumbnail} />
      </div>
      <div className="mt-2 px-2">
        <h2 className="text-16 mb-4 my-2 font-bold group-hover:underline">
          {title}
        </h2>
        <p className="text-12">{upload_date}</p>
        <p className="text-12 mt-1 pb-2">학습시간 {learn_time}분</p>
        {quiz_correct && (
          <p className="text-12 mt-1">
            퀴즈 정답 개수:
            <span className="text-red-500">{quiz_correct[0]}</span>/
            {quiz_correct[1]}
          </p>
        )}
        <span className="absolute right-1 bottom-1 md:bottom-0">
          <Level level={level} />
        </span>
      </div>
    </div>
  );
}

// 긴 직사각형
function Type2Card({
  thumbnail,
  title,
  upload_date,
  learn_time,
  level,
  onClick,
}) {
  return (
    <div className="flex relative group shadow " onClick={onClick}>
      <div className="w-[60%] h-36 overflow-hidden sm:h-40">
        <CheckImage src={thumbnail} />
      </div>
      <div className="ml-2 flex flex-col justify-between py-4 w-[40%]">
        <h2 className="text-16 mb-4 font-bold group-hover:underline">
          {title}
        </h2>
        <div className="">
          <p className="text-12">{upload_date}</p>
          <p className="text-12 mt-2 pb-2">학습시간 {learn_time}분</p>
        </div>
        <span className="absolute right-1 bottom-3 md:bottom-2">
          <Level level={level} />
        </span>
      </div>
    </div>
  );
}

// 세로 꽉 차는 직사각형
function Type3Card({
  thumbnail,
  title,
  upload_date,
  learn_time,
  level,
  onClick,
}) {
  return (
    <div
      className="relative flex h-28 md:h-36 overflow-hidden group shadow "
      onClick={onClick}
    >
      <div className="w-[50%] overflow-hidden hidden md:block">
        <CheckImage src={thumbnail} />
      </div>
      <div className="ml-2 flex flex-col justify-between py-4">
        <h2 className="text-16 font-bold group-hover:underline">{title}</h2>
        <div>
          <p className="text-12">{upload_date}</p>
          <p className="text-12 mt-2 ">학습시간 {learn_time}분</p>
        </div>
        <span className="absolute right-1 bottom-1">
          <Level level={level} />
        </span>
      </div>
    </div>
  );
}

// 엄청 큰
function Type4Card({
  thumbnail,
  title,
  upload_date,
  learn_time,
  level,
  onClick,
}) {
  return (
    <div className="relative group shadow py-2 sm:p-0" onClick={onClick}>
      <div className="overflow-hidden h-56 md:h-96">
        <CheckImage src={thumbnail} />
      </div>
      <div className="mt-2 px-2">
        <h2 className="text-16 sm:text-20 mt-6 my-5 md:mb-16 font-bold group-hover:underline">
          {title}
        </h2>
        <p className="text-12 sm:text-16">{upload_date}</p>
        <p className="text-12 sm:text-16 mt-2 pb-4">학습시간 {learn_time}분</p>
        <span className="absolute right-1 bottom-1">
          <Level level={level} />
        </span>
      </div>
    </div>
  );
}
