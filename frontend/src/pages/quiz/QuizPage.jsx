import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import QuizTab from "./components/QuizTab";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getNewsQuiz } from "@/service/detail/getNewsQuiz";

export default function QuizPage() {
  const { id } = useParams();
  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const data = await getNewsQuiz(id);
        setQuizData(data);
      } catch (error) {
        console.error("Failed to fetch quiz data:", error);
      }
    };

    fetchQuizData();
  }, [id]);
  console.log(quizData);
  return (
    <div className="max-w-[1440px] py-4 p-4 3xl:m-auto">
      <div className="p-2 rounded-lg relative">
        <Carousel>
          <CarouselContent>
            {quizData.map((quizItem, index) => (
              <CarouselItem key={index}>
                <QuizTab quiz={quizItem} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-between mt-8">
            <CarouselPrevious className="static scale-100 transform-none" />
            <CarouselNext className="static scale-100 transform-none" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
