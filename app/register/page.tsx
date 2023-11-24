"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import postData from "../services/postData";
import { IRegisterForm } from "../services/interface";

const Register: React.FC = () => {
  const router = useRouter();
  const registerForm: IRegisterForm = {
    name: "",
    surname: "",
    license: false,
    email: "",
    repeatEmail: "",
    password: "",
    repeatPassword: "",
    birthday: "",
    gender: "",
  };
  const registerSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, "Username to short!")
      .max(20, "Username to long!")
      .required("You need to enter username!"),
    surname: yup
      .string()
      .min(2, "Username to short!")
      .max(20, "Username to long!")
      .required("You need to enter username!"),
    license: yup.boolean(),
    email: yup
      .string()
      .email("Invalid email")
      .required("You must input email!"),
    repeatEmail: yup.string().oneOf([yup.ref("email")], "Email must match!"),
    password: yup
      .string()
      .min(8, "Password must contain minimum of 8 characters")
      .required("You need to enter password!"),
    repeatPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Password must match"),
    birthday: yup.date().required("Must fill this!"),
    gender: yup.string().required("Must choose."),
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
        initialValues={registerForm}
        validationSchema={registerSchema}
        onSubmit={(values, actions) => {
          actions.setSubmitting(false);
          postData(values, "api/user");
          router.push("/");
        }}
      >
        <Form className="m-4 flex flex-col w-[20%]">
          <p className="text-2xl font-bold text-slate-900">Register: </p>
          <Field
            name="name"
            className="border-black border-b-[1px] my-2"
            placeholder="First name"
          />
          <ErrorMessage name="name" component="div" />
          <Field
            name="surname"
            className="border-black border-b-[1px] my-2"
            placeholder="Last name"
          />
          <ErrorMessage name="surname" component="div" />
          <div className="flex justify-between items-center">
            <div>
              <label className="mr-2">License:</label>
              <Field type="checkbox" name="license" />
              <ErrorMessage name="license" component="div" />
            </div>
            <div>
              <label className="mr-2">Birthday:</label>
              <Field
                type="date"
                name="birthday"
                className="border-black border-b-[1px] my-2"
              />
              <ErrorMessage name="birthday" component="div" />
            </div>
          </div>
          <Field
            type="email"
            name="email"
            className="border-black border-b-[1px] my-2"
            placeholder="E-mail"
          />
          <ErrorMessage name="email" component="div" />
          <Field
            type="email"
            name="repeatEmail"
            className="border-black border-b-[1px] my-2"
            placeholder="Repeat E-mail"
          />
          <ErrorMessage name="repeatEmail" component="div" />
          <Field
            type="password"
            name="password"
            className="border-black border-b-[1px] my-2"
            placeholder="Password"
          />
          <ErrorMessage name="password" component="div" />
          <Field
            type="password"
            name="repeatPassword"
            className="border-black border-b-[1px] my-2"
            placeholder="Repeat Password"
          />
          <ErrorMessage name="repeatPassword" component="div" />
          <div className="flex justify-evenly my-2">
            Gender:
            <label>
              <Field type="radio" name="gender" value="Male" />
              Male
            </label>
            <label>
              <Field type="radio" name="gender" value="Female" />
              Female
            </label>
          </div>
          <ErrorMessage name="gender" component="div" />
          <button
            type="submit"
            className="px-4 py-2 rounded-md bg-slate-900 text-white mt-2"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
