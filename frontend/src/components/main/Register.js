import { Formik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import app_config from '../../config';
import './Register.css';
const Register = () => {
    const url = app_config.api_url;
    const navigate = useNavigate()
    const userSubmit = async (formdata) => {
        console.log(formdata);
            fetch("http://localhost:4000/form/add",{ 
            method: "POST",
            body: JSON.stringify(formdata), //converting JS to JSON
            headers: {
                "Content-Type": "application/json",
            },

        });

        if (Response.status === 200) {
            console.log("Success");
            Swal.fire({
                title: "Success",
                text: "User added successfully😁👍",
                icon: "success",
            });
            navigate("/main/login");
            const data = await Response.json();
            sessionStorage.setItem("main", JSON.stringify(data));
        } else {
            console.log("Something went wrong");
            Swal.fire({
                title: "Error",
                text: "Something went wrong😔",
                icon: "error",
            });
        }
    };


    return (
        <div><section className="h-100 bg-dark">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col">
                        <div className="card card-registration my-4">
                            <div className="row g-0">
                                <div className="col-xl-6 d-none d-xl-block">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                                        alt="Sample photo"
                                        className="img-fluid"
                                        style={{
                                            borderTopLeftRadius: ".25rem",
                                            borderBottomLeftRadius: ".25rem"
                                        }}
                                    />
                                </div>

                                <div onSubmit={userSubmit} className="col-xl-6">
                                    <div className="card-body p-md-5 text-black">
                                        <h3 className="mb-5 text-uppercase">
                                            Registration form
                                        </h3>
                                        <Formik
                                            initialValues={{
                                                name: '',
                                                email: '',
                                                password: '',
                                                avatar: '',
                                                createdAt: new Date()
                                            }}
                                            onSubmit={userSubmit}
                                        >
                                            {({ values, handleChange, handleSubmit }) => (
                                                <form onSubmit={handleSubmit}>
                                                    <div className="row">
                                                        <div className="col-md-6 mb-4">
                                                            <div className="form-outline">
                                                                <input
                                                                    type="text"
                                                                    id="last name"
                                                                    value={values.lastname}
                                                                    onChange={handleChange}
                                                                    className="form-control form-control-lg"
                                                                />
                                                                <label className="form-label" htmlFor="form3Example1n">
                                                                    Name
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-outline mb-4">
                                                        <input
                                                            type="text"
                                                            id="email"
                                                            value={values.email}
                                                            onChange={handleChange}
                                                            className="form-control form-control-lg"
                                                        />
                                                        <label className="form-label" htmlFor="form3Example97">
                                                            Email ID
                                                        </label>
                                                    </div>
                                                    <div className="form-outline mb-4">
                                                        <input
                                                            type="text"
                                                            id="password"
                                                            value={values.password}
                                                            onChange={handleChange}
                                                            className="form-control form-control-lg"
                                                        />
                                                        <label className="form-label" htmlFor="form3Example8">
                                                            Generate Password
                                                        </label>
                                                    </div>

                                                    <div className="d-flex justify-content-end pt-3">
                                                        <button type="submit" className="btn btn-warning btn-lg ms-2">
                                                            {/* <button type="submit">Submit</button>  */}
                                                            Submit form
                                                        </button>
                                                    </div>
                                                </form>
                                            )}
                                        </Formik>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Register