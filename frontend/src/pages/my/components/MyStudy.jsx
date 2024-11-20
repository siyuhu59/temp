import PostCard from "@/components/PostCard";
import ToggleSort from "@/components/ToggleSort";

const data = [
  {
    id: "1",
    thumbnail:
      "https://cdn.imweb.me/upload/S202207202685e30f16e24/8b48c67f8cdf6.jpeg",
    title: "Post Title 1",
    upload_date: "2024-10-30",
    learn_time: "40",
    level: "1",
    quiz_correct: [20, 30],
  },
  {
    id: "2",
    thumbnail:
      "https://cdn.imweb.me/upload/S202207202685e30f16e24/8b48c67f8cdf6.jpeg",
    title: "Post Title 2",
    upload_date: "2024-10-31",
    learn_time: "30",
    level: "2",
    quiz_correct: [20, 30],
  },
  {
    id: "3",
    thumbnail:
      "https://cdn.imweb.me/upload/S202207202685e30f16e24/8b48c67f8cdf6.jpeg",
    title: "Post Title 3",
    upload_date: "2024-11-01",
    learn_time: "20",
    level: "3",
    quiz_correct: [20, 30],
  },
  {
    id: "4",
    thumbnail:
      "https://cdn.imweb.me/upload/S202207202685e30f16e24/8b48c67f8cdf6.jpeg",
    title: "Post Title 4",
    upload_date: "2024-11-02",
    learn_time: "10",
    level: "2",
    quiz_correct: [20, 30],
  },
  {
    id: "5",
    thumbnail:
      "https://cdn.imweb.me/upload/S202207202685e30f16e24/8b48c67f8cdf6.jpeg",
    title: "Post Title 1",
    upload_date: "2024-10-30",
    learn_time: "40",
    level: "1",
    quiz_correct: [20, 30],
  },
  {
    id: "6",
    thumbnail:
      "https://cdn.imweb.me/upload/S202207202685e30f16e24/8b48c67f8cdf6.jpeg",
    title: "Post Title 2",
    upload_date: "2024-10-31",
    learn_time: "30",
    level: "2",
    quiz_correct: [20, 30],
  },
  {
    id: "7",
    thumbnail:
      "https://cdn.imweb.me/upload/S202207202685e30f16e24/8b48c67f8cdf6.jpeg",
    title: "Post Title 3",
    upload_date: "2024-11-01",
    learn_time: "20",
    level: "3",
    quiz_correct: [20, 30],
  },
  {
    id: "8",
    thumbnail:
      "https://cdn.imweb.me/upload/S202207202685e30f16e24/8b48c67f8cdf6.jpeg",
    title: "Post Title 4",
    date: "2024-11-02",
    learn_time: "10",
    level: "2",
    quiz_correct: [20, 30],
  },
];

export default function MyStudy() {
  return (
    <div className="p-2">
      <div className="flex justify-end gap-2 mb-4">
        <ToggleSort text="틀린개수" />
        <ToggleSort text="학습시간순" />
        <ToggleSort text="난이도" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((item) => (
          <PostCard key={item.id} type="type1" id={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
