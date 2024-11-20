import PostCard from "@/components/PostCard";
import ToggleSort from "@/components/ToggleSort";
import { getNewsRecent } from "@/service/common/getNewsRecent";
import { useEffect, useState } from "react";

export default function LatestPage() {
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNewsRecent();
        const mappedData = response.news_list.map((item) => ({
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

  // 최신 3개 항목과 나머지 항목 분리
  const latestThree = newsData.slice(0, 3);
  const remainingNews = newsData.slice(3);

  return (
    <div className="max-w-[1440px] py-4 p-4 3xl:m-auto">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-16 md:text-24 font-bold">최신뉴스</h2>
      </div>
      <div className="flex justify-end gap-2 mb-4">
        <ToggleSort text="학습시간순" />
        <ToggleSort text="난이도" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 py-4 border-b border-solid border-lightGray">
        {latestThree.map((item) => (
          <PostCard key={item.id} type="type1" id={item.id} {...item} />
        ))}
      </div>
      <div className="space-y-4">
        {remainingNews.map((item) => (
          <PostCard key={item.id} type="type3" id={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
