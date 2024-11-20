import { useNavigate } from "react-router-dom";

export default function HeaderBefore() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-end p-2">
      <button
        className="bg-transparent mr-4 border-none shadow-none hover:underline hover:underline-offset-4 hover:text-mainBlue text-14 sm:text-16 text-black"
        onClick={() => navigate("/login")}
      >
        login
      </button>
      <button
        className="bg-transparent border-none shadow-none hover:underline hover:underline-offset-4 mr-2 hover:text-mainBlue text-14 sm:text-16 text-black"
        onClick={() => navigate("/register")}
      >
        sign up
      </button>
    </div>
  );
}
