import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Formik } from "formik";
import Swal from "sweetalert2";
import * as Yup from 'yup';
// import './Login';
import './CreateForm.css';

const CreateForm = () => {

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const userForm = {
    title: "",
    description: "",
    createdBy: currentUser._id,
    createdAt: new Date()
  };

  // 2. Create a function for form submission
  const userSubmit = (formdata) => {
    console.log(formdata);
    fetch("http://localhost:5000/form/add", {
      method: "POST",
      body: JSON.stringify(formdata), //convert javascript to json
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        console.log("data saved");
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Form Created Successfully!!👍",
        });
      }
    });
  };


  // const formSchema = Yup.object().shape({
  //   username: Yup.string()
  //     .min(2, 'Too Short Username!')
  //     .max(5, 'Too Long Username!')
  //     .required('Username is Required'),
  //   email: Yup.string().email('Invalid email').required('Required'),
  //   password: Yup.string().required('Required')
  //   .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'),
    
  // });

  return (
    <div className="cont">
      <h1>Create From</h1>
      <hr className="mb-5" />

      <Formik initialValues={userForm} onSubmit={userSubmit} 
      // validationSchema={formSchema}
       >
        {({ handleSubmit, handleChange, values, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              label="title"
              variant="outlined"
              className="w-100 mb-4"
              id="title"
              onChange={handleChange}
              value={values.title}
              // className="form-control form-control-lg"
              // helperText={touched.username ? errors.username : ''}
              // error={Boolean(errors.username && touched.username)}
            />
            
            <TextField
              label="description"
              variant="outlined"
              className="w-100 mb-4"
              id="description"
              onChange={handleChange}
              value={values.description}
              // className="form-control form-control-lg"
              // helperText={touched.email ? errors.email : ''}
              // error={Boolean(errors.email && touched.email)}
            />
            {/* <TextField
              label="Password"
              variant="outlined"
              className="w-100 mb-4"
              id="Password"
              onChange={handleChange}
              value={values.password}
              helperText={touched.password ? errors.password : ''}
              error={Boolean(errors.password && touched.password)}
            /> */}
            {/* <TextField
              label="Password"
              variant="outlined"
              className="w-100 mb-4"
              id="avatar"
              onChange={handleChange}
              value={values.password}
              helperText={touched.password ? errors.password : ''}
              error={Boolean(errors.password && touched.password)}
            /> */}
            {/* <TextField
              label="Password"
              variant="outlined"
              className="w-100 mb-4"
              id="createAt"
              onChange={handleChange}
              value={values.password}
              helperText={touched.password ? errors.password : ''}
              error={Boolean(errors.password && touched.password)}
            /> */}

            {/* <Button type="submit" variant="contained"> */}
            <button type="submit" className="btn btn-warning btn-lg ms-2">
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

// formik
// 4274=>github id

export default CreateForm;
