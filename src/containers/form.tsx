import React from "react";
import { useFormik } from 'formik';
import { Employee } from "../models";
import Button from "../components/button";

const Form = ({name, lastname, id, title}: Employee) => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted

  let initialValues: Employee = {
    name: name ?  name : "",
    lastname: lastname ?  lastname : "",
    id: id ?  id : "",
    title: title ? title : ""
  }

  const formik = useFormik({
    initialValues,
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
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
      </div>
      <div className="flex">
        <label className="mr-[10px]">Lastname:</label>
        <input
          className="border-b-2 border-bg-black"
          id="lastname"
          name="lastname"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastname}
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
          <Button type="submit">Save</Button>
        </div>
      </div>


    </form>
  );
}

export default Form;