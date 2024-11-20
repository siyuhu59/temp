import Calendar from "./components/Calendar";
import MyTab from "./components/MyTab";

export default function MyPage() {
  return (
    <div className="max-w-[1440px] py-4 p-4 3xl:m-auto">
      <Calendar />
      <MyTab />
    </div>
  );
}
