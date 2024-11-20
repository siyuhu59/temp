import InputId from "@/components/InputId";
import InputPassword from "@/components/InputPassword";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { login } from "@/service/auth/login";
import { useState } from "react";
import { useAuth } from "@/service/auth/AuthContext";

export default function LoginPage() {
  const navigate = useNavigate();
  const { login: authLogin } = useAuth();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.username || !formData.password) {
      setError("아이디와 비밀번호를 입력해주세요.");
      return;
    }

    try {
      const response = await login(formData);
      authLogin(response.access_token);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="h-[100vh] flex items-center justify-center">
      <div className="max-w-[1440px] w-full py-4 p-4 3xl:m-auto">
        <div className="flex justify-center mb-16">
          <Link to="/">
            <h1 className="text-logo">いち</h1>
          </Link>
        </div>
        <form
          onSubmit={handleSubmit}
          className="max-w-[640px] m-auto flex flex-col gap-8"
        >
          <InputId
            value={formData.username}
            onChange={handleChange}
            name="username"
          />
          <InputPassword
            value={formData.password}
            onChange={handleChange}
            name="password"
          />
          {error && <p className="text-red-500 text-14 text-center">{error}</p>}
          <Button
            type="submit"
            className="bg-mainBlue h-14 !text-14 md:!text-16 hover:bg-subBlue3"
          >
            로그인
          </Button>
        </form>
      </div>
    </div>
  );
}
