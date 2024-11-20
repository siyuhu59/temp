import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";

export default function PostBottom() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="flex gap-2 mt-4 py-1">
      <Button className="bg-mainBlue !text-14 md:!text-16 hover:bg-subBlue3">
        본문듣기
      </Button>
      <Button className="bg-mainBlue !text-14 md:!text-16 hover:bg-subBlue3">
        학습함 담기
      </Button>
      <Button
        className="bg-mainBlue !text-14 md:!text-16 hover:bg-subBlue3"
        onClick={() => navigate(`/quiz/${id}`)}
      >
        퀴즈풀기
      </Button>
    </div>
  );
}
