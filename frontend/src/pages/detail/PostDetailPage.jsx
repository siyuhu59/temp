import { useParams } from "react-router-dom";
import PostTop from "./components/PostTop";
import PostBody from "./components/PostBody";
import PostBottom from "./components/PostBottom";
import { useEffect, useState } from "react";
import { getNewsDetail } from "@/service/detail/getNewsDetail";

export default function PostDetailPage() {
  const { id } = useParams();
  const [newsData, setNewsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewsDetail = async () => {
      try {
        const response = await getNewsDetail(id);
        setNewsData(response);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };

    fetchNewsDetail();
  }, [id]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading news: {error.message}</div>;
  if (!newsData) return <div>No news available</div>;

  return (
    <div className="max-w-[1440px] py-4 p-4 3xl:m-auto">
      <PostTop news={newsData.news} />
      <PostBody news={newsData.news} kanjis={newsData.kanji_list} />
      <PostBottom />
    </div>
  );
}
