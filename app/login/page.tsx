"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import postData from "../services/postData";
import { ILoginForm } from "../services/interface";

const Login: React.FC = () => {
  const router = useRouter();
  const loginForm: ILoginForm = {
    email: "",
    password: "",
  };
  const loginSchema = yup.object().shape({
    email: yup.string().required("Incorrect email!"),
    password: yup.string().required("Incorrect password"),
  });
  return (
    <div className="flex justify-center relative">
      <Link
        href="/"
        className="absolute top-2 right-5 px-4 py-2 rounded-md bg-slate-900 text-white mt-2"
      >
        Home
      </Link>
      <Formik
        initialValues={loginForm}
        validationSchema={loginSchema}
        onSubmit={(values, actions) => {
          actions.setSubmitting(false);
          postData(values, "api/user");
          router.push("/");
        }}
      >
        {() => (
          <Form className="m-4 flex flex-col w-[20%]">
            <p className="text-2xl font-bold text-slate-900">Login: </p>
            <Field
              type="email"
              name="email"
              className="border-black border-b-[1px] my-2"
              placeholder="E-mail"
            />
            <ErrorMessage name="email" component="div" />
            <Field
              type="password"
              name="password"
              className="border-black border-b-[1px] my-2"
              placeholder="Password"
            />
            <ErrorMessage name="password" component="div" />
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-slate-900 text-white mt-2"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
