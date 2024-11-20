import { CATEGORIES } from "@/constants/categories";
import { Link, useLocation } from "react-router-dom";
import HeaderBefore from "./HeaderBefore";
import HeaderAfter from "./HeaderAfter";
import { useAuth } from "@/service/auth/AuthContext";

export default function Header() {
  const currentDate = new Date().toLocaleDateString("en-CA");
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  // TODO: nav swiper로 처리

  return (
    <header className="sticky top-0 z-50 bg-white shadow ">
      {isAuthenticated ? <HeaderAfter /> : <HeaderBefore />}
      <div className="p-2 flex justify-between items-end border-t border-deepBlue border-solid">
        <Link to="/">
          <h1 className="text-sm sm:text-logo ">いち</h1>
        </Link>
        <span className="text-14 sm:text-16 mr-2 text-mainBlue">
          {currentDate.replace(/-/g, ".")}
        </span>
      </div>
      <div className="bg-mainBlue my-2 p-2">
        <nav>
          <ul className="flex justify-around p-1 text-white text-14 sm:text-16 max-w-[1440px] 3xl:m-auto ">
            {CATEGORIES.map((category) => {
              const isActive = location.pathname === `/post/${category.number}`;
              return (
                <li key={category.number}>
                  <Link
                    to={`/post/${category.number}`}
                    className={`hover:underline hover:underline-offset-4 ${
                      isActive ? "font-bold underline underline-offset-4" : ""
                    }`}
                  >
                    {category.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
