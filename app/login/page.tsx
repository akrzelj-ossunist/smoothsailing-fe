"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import postData from "../services/postData";
import { ILoginForm } from "../services/interface";
import FormComponent from "../components/FormComponent";
import { useContext } from "react";
import { ThemeContext } from "../components/Navigation";

const Login: React.FC = () => {
  const router = useRouter();
  const context = useContext(ThemeContext);
  const userLogin = [
    {
      type: "email",
      name: "email",
    },
    {
      type: "password",
      name: "password",
    },
  ];
  const loginForm: ILoginForm = {
    email: "",
    password: "",
  };
  const loginSchema = yup.object().shape({
    email: yup.string().required("Incorrect email!"),
    password: yup.string().required("Incorrect password"),
  });
  const onSubmitFunction = (values: any) => {
    postData(values, "user/login");
    context.setLogged(true);
    localStorage.setItem("logged", "true");
    router.push("/");
  };
  return (
    <div className="flex justify-center relative">
      <Link
        href="/"
        className="absolute top-2 right-5 px-4 py-2 rounded-md bg-slate-900 text-white mt-2">
        Home
      </Link>
      <FormComponent
        formData={userLogin}
        initialValues={loginForm}
        validationSchema={loginSchema}
        onSubmitFunction={onSubmitFunction}
      />
    </div>
  );
};

export default Login;
