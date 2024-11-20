import PostCard from "@/components/PostCard";
import { getNewsTodayHot } from "@/service/home/getNewsTodayHot";
import { useEffect, useState } from "react";

export default function TodayHotList() {
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNewsTodayHot();
        const mappedData = response.news_list.map((item) => ({
          id: item.news_id,
          thumbnail:
            item.thumbnail ||
            "https://cdn.imweb.me/upload/S202207202685e30f16e24/8b48c67f8cdf6.jpeg", // 기본 이미지
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
      <h2 className="text-20 sm:text-24 mb-4">Today Hot</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <PostCard type="type4" {...newsData[0]} />
        </div>

        <div className="grid grid-cols-1 gap-4">
          {newsData.slice(1, 3).map((news) => (
            <PostCard key={news.id} type="type1" {...news} />
          ))}
        </div>
      </div>
    </div>
  );
}
