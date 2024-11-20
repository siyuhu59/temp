import PostCard from "@/components/PostCard";
import ToggleSort from "@/components/ToggleSort";
import { CATEGORIES } from "@/constants/categories";
import { getNewsByCategory } from "@/service/post/getNewsByCategory";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PostPage() {
  const { category } = useParams();
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const categoryName =
    CATEGORIES.find((item) => item.number === Number(category))?.name ||
    "카테고리";

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNewsByCategory(Number(category));
        console.log("API Response:", response);

        const mappedData = response.news_items.map((item) => ({
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
  }, [category]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading news: {error.message}</div>;
  if (!newsData || newsData.length === 0) return <div>No news available</div>;

  return (
    <div className="max-w-[1440px] py-4 p-4 3xl:m-auto">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-16 md:text-24 font-bold">{categoryName}</h2>
      </div>
      <div className="flex justify-end gap-2 mb-4">
        <ToggleSort text="학습시간순" />
        <ToggleSort text="난이도" />
      </div>
      <div className="space-y-4">
        {newsData.map((item) => (
          <PostCard key={item.id} type="type3" id={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
