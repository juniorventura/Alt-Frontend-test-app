import React, { useState } from "react";
import { useFormik } from 'formik';
import { Employee } from "../models";
import Button from "../components/button";

const Form = ({firstName, lastName, employeeId, title}: Employee) => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted

 
  const [initialValues] = useState<Employee>();

  const formik = useFormik({
    initialValues: {
      firstName: firstName ?  firstName : "",
      lastName: lastName ?  lastName : "",
      employeeId: employeeId ?  employeeId : 0,
      title: title ? title : ""
    },
    enableReinitialize: true,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form className="flex flex-col space-y-2 pt-[20px]" onSubmit={formik.handleSubmit}>
      <div className="flex">
        <label className="mr-[10px]">Name:</label>
        <input
          className="border-b-2 border-bg-black"
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
      </div>
      <div className="flex">
        <label className="mr-[10px]">Lastname:</label>
        <input
          className="border-b-2 border-bg-black"
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
      </div>
      <div className="flex">
        <label className="mr-[10px]">Title:</label>
        <input
          className="border-b-2 border-bg-black"
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
      </div>
      <div className="flex justify-center">
        <div className="w-[100px]">
          <Button onClick={() => {}} type="submit">Save</Button>
        </div>
      </div>


    </form>
  );
}

export default Form;