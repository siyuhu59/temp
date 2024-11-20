import { useAuth } from "@/service/auth/AuthContext";
import Banner from "./components/Banner";
import RecentNewsList from "./components/RecentNewsList";
import RecentStudyList from "./components/RecentStudyList";
import TodayHotList from "./components/TodayHotList";

export default function HomePage() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="max-w-[1440px] p-4 py-4 3xl:m-auto">
      <Banner />
      {isAuthenticated && <RecentStudyList />}
      <TodayHotList />
      <RecentNewsList />
    </div>
  );
}
