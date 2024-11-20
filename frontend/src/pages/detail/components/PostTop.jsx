import Level from "@/components/Level";

export default function PostTop({ news }) {
  return (
    <div className="my-2">
      <div className="flex items-center justify-between">
        <h3 className="text-20 md:text-24 font-bold">{news.title}</h3>
        <Level level={news.level} />
      </div>
      <div className="flex items-center justify-between py-2 text-customGray text-14 md:text-16">
        <p className="flex gap-4">
          <span>{news.company}</span>
          <span>{news.upload_date}</span>
        </p>
        <p>학습시간 {news.learn_time}분</p>
      </div>
      <div className="my-4 h-56 sm:h-96 overflow-hidden border-b border-gray-400 border-solid">
        <img
          src={news.thumbnail}
          alt={news.title}
          className="h-full w-full object-cover object-center"
        />
      </div>
    </div>
  );
}
