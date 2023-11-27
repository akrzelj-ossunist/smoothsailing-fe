"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";

const FormComponent: React.FC<{
  formData: any;
  initialValues: any;
  validationSchema: any;
  onSubmitFunction: (values: any) => void;
}> = ({ formData, initialValues, validationSchema, onSubmitFunction }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        actions.setSubmitting(false);
        onSubmitFunction(values);
      }}>
      <Form className="m-4 flex flex-col w-[300px]">
        {formData.map((data: any, index: number) => {
          return (
            <div key={index} className={`${data.value ? "flex" : ""}`}>
              <label>{data?.value}</label>
              <Field
                type={data.type}
                name={data.name}
                className={
                  data.value
                    ? "my-2 ml-2"
                    : "border-black border-b-[1px] my-2 w-full"
                }
                placeholder={data.name}
                value={data?.value}
              />
              <ErrorMessage name={data.name} component="div" />
            </div>
          );
        })}
        <button
          type="submit"
          className="px-4 py-2 rounded-md bg-slate-900 text-white mt-2">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default FormComponent;
