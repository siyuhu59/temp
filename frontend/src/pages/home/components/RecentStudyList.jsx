import PostCard from "@/components/PostCard";
import { getNewsRecent } from "@/service/common/getNewsRecent";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function RecentStudyList() {
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNewsRecent();
        const mappedData = response.news_list
          .slice(0, 4) // 처음 4개의 아이템만 선택
          .map((item) => ({
            id: item.news_id,
            thumbnail:
              item.thumbnail ||
              "https://cdn.imweb.me/upload/S202207202685e30f16e24/8b48c67f8cdf6.jpeg",
            title: item.title,
            upload_date:
              item.upload_date || new Date().toISOString().split("T")[0],
            learn_time: item.learn_time || "10",
            level: item.level || "1",
          }));

        setNewsData(mappedData);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading news: {error.message}</div>;
  if (!newsData || newsData.length === 0) return <div>No news available</div>;

  return (
    <div className="py-4 mt-16">
      <div className="p-0 flex justify-between items-center mb-4">
        <h2 className="text-20 sm:text-24">최근 학습 항목</h2>
        <Link
          to="/mypage"
          className="text-14 sm:text-16 cursor-pointer text-subBlue3"
        >
          학습 항목 바로가기 →
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {newsData.map((item) => (
          <PostCard key={item.id} type="type1" id={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
