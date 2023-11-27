"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import postData from "../services/postData";
import { IRegisterForm } from "../services/interface";
import FormComponent from "../components/FormComponent";

const Register: React.FC = () => {
  const router = useRouter();

  const userRegister = [
    {
      type: "text",
      name: "name",
    },
    {
      type: "text",
      name: "surname",
    },
    {
      type: "checkbox",
      name: "license",
      value: "Have license: ",
    },
    {
      type: "email",
      name: "email",
    },
    {
      type: "email",
      name: "repeatEmail",
    },
    {
      type: "password",
      name: "password",
    },
    {
      type: "password",
      name: "repeatPassword",
    },
    {
      type: "date",
      name: "birthday",
    },
    {
      type: "radio",
      name: "gender",
      value: "Male",
    },
    {
      type: "radio",
      name: "gender",
      value: "Female",
    },
  ];

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

  const onSubmitFunction = (values: any) => {
    postData(values, "user/register");
    router.push("/");
  };
  return (
    <div className="flex justify-center relative">
      <Link
        href="/"
        className="absolute top-2 right-5 px-4 py-2 rounded-md bg-slate-900 text-white mt-2"
      >
        Home
      </Link>
      <FormComponent
        formData={userRegister}
        initialValues={registerForm}
        validationSchema={registerSchema}
        onSubmitFunction={onSubmitFunction}
      />
    </div>
  );
};

export default Register;
