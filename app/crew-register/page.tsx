"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as yup from "yup";
import postData from "../services/postData";
import { IRegisterCrew, IRegisterForm } from "../services/interface";
import FormComponent from "../components/FormComponent";

const Crew: React.FC = () => {
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
      type: "text",
      name: "position",
    },
    {
      type: "text",
      name: "price",
    },
    {
      type: "text",
      name: "review",
    },
  ];

  const registerForm: IRegisterCrew = {
    name: "",
    surname: "",
    position: "",
    price: "",
    review: "",
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
    position: yup
      .string()
      .min(2, "Username to short!")
      .max(20, "Username to long!")
      .required("You need to enter username!"),
    price: yup
      .string()
      .min(2, "Username to short!")
      .max(20, "Username to long!")
      .required("You need to enter username!"),
    review: yup
      .string()
      .min(2, "Username to short!")
      .max(20, "Username to long!")
      .required("You need to enter username!"),
  });

  const onSubmitFunction = (values: any) => {
    postData(values, "crew/register");
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

export default Crew;
