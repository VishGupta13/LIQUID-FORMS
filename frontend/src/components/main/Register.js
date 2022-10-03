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

    const response = await fetch("http://localhost:5000/user/add", {
      method: "POST",
      body: JSON.stringify(formdata), //converting JS to JSON
      headers: {
        "Content-Type": "application/json",
      },
      
    }    );

    if (response.status === 200) {
      console.log("Success");
      Swal.fire({
        title: "Success",
        text: "User added successfully😁👍",
        icon: "success",
      });
      navigate("/main/login");
      const data = await response.json();
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
    <div><section className="h-100 bg-white"> 
    <div className="container py-5 h-90 ">
      <div className="row d-flex justify-content-center align-items-center h-70">
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
              
              <div onSubmit = {userSubmit} className="col-xl-6">
                <div className="card-body p-md-5 text-black">
                  <h3 className="mb-5 text-uppercase">
                    Registration form
                  </h3>
                  <Formik
                initialValues={{
                  firstname: '',
                  lastname: '',
                  email: '',
                  password: '',
                  dob:'',
                  pincode:'',
                  course: '',
                  avatar: '',
                  createdAt: new Date()}}
                  onSubmit={userSubmit}
                >
                {({ values, handleChange, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="firstname"
                          value={values.firstname}
                          onChange={handleChange}
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="form3Example1m">
                          First Name
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="lastname"
                          value={values.lastname}
                          onChange={handleChange}
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="form3Example1n">
                          Last name
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
                  {/* <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline"> */}
                        {/* <input
                          type="text"
                          id="name"
                          className="form-control form-control-lg"
                        /> */}
                        {/* <label className="form-label" htmlFor="form3Example1m1">
                          Mother's name
                        </label> */}
                      {/* </div>
                    </div> */}
                    {/* <div className="col-md-6 mb-4">
                      <div className="form-outline"> */}
                        {/* <input
                          type="text"
                          id="form3Example1n1"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="form3Example1n1">
                          Father's name
                        </label> */}
                      {/* </div>
                    </div> */}
                  {/* </div> */}
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
                  <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                    <h6 className="mb-0 me-4">Gender: </h6>
                    <div className="form-check form-check-inline mb-0 me-4">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="femaleGender"
                        defaultValue="option1"
                      />
                      <label className="form-check-label" htmlFor="femaleGender">
                        Female
                      </label>
                    </div>
                    <div className="form-check form-check-inline mb-0 me-4">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="maleGender"
                        defaultValue="option2"
                      />
                      <label className="form-check-label" htmlFor="maleGender">
                        Male
                      </label>
                    </div>
                    <div className="form-check form-check-inline mb-0">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="otherGender"
                        defaultValue="option3"
                      />
                      <label className="form-check-label" htmlFor="otherGender">
                        Other
                      </label>
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <select className="select">
                      <option value={1}>State</option>
                        <option value={1}>Andhra Pradesh</option>
                        <option value={2}>Arunachal Pradesh</option>
                        <option value={3}>Assam </option>
                        <option value={4}>Bihar</option>
                        <option value={5}>Chhattisgarh</option>
                        <option value={6}>Goa</option>
                        <option value={7}>Gujarat</option>
                        <option value={8}>Haryana</option>
                        <option value={9}>Himachal Pradesh</option>
                        <option value={10}>Jharkhand</option>
                        <option value={11}>Karnataka</option>
                        <option value={12}>Kerala</option>
                        <option value={13}>Madhya Pradesh</option>
                        <option value={14}>Maharashtra</option>
                        <option value={15}>Meghalaya</option>
                        <option value={16}>Mizoram</option>
                        <option value={17}>Nagaland</option>
                        <option value={18}>Odisha</option>
                        <option value={19}>Punjab</option>
                        <option value={20}>Rajasthan</option>
                        <option value={21}>Sikkim</option>
                        <option value={22}>Tamil Nadu</option>
                        <option value={23}>Telangana</option>
                        <option value={24}>Tripura</option>
                        <option value={25}>Uttar Pradesh</option>
                        <option value={26}>Uttarakhand</option>
                        <option value={27}>Gairsain</option>
                        <option value={28}>West Bengal</option>

                      </select>
                    </div>
                    <div className="col-md-6 mb-4">
                      <select className="select">
                        <option value={1}>City</option>
                        <option value={2}>Amaravati</option>
                        <option value={3}>Itanagar</option>
                        <option value={4}>Dispur</option>
                        <option value={5}>Patna</option>
                        <option value={7}>Raipur</option>
                        <option value={8}>Panaji</option>
                        <option value={10}>Gandhinagar</option>
                        <option value={11}>Chandigarh</option>
                        <option value={12}>Shimla</option>
                        <option value={13}>Ranchi</option>
                        <option value={14}>Bengaluru</option>
                        <option value={15}>Thiruvananthapuram</option>
                        <option value={16}>Bhopal</option>
                        <option value={17}>Mumbai</option>
                        <option value={18}>Imphal</option>
                        <option value={19}>Shillong</option>
                        <option value={20}>Aizawl</option>
                        <option value={21}>Kohima</option>
                        <option value={22}>Bhubaneswar</option>
                        <option value={23}>Chandigarh</option>
                        <option value={24}>Jaipur</option>
                        <option value={25}>Gangtok</option>
                        <option value={26}>Chennai</option>
                        <option value={27}>Hyderabad</option>
                        <option value={28}>Agartala</option>
                        <option value={28}>Lucknow</option>
                        <option value={28}>	Dehradun (Winter)
                                            Gairsain (Summer)</option>
                        <option value={28}>	Kolkata</option>
                        
                      </select>
                    </div>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="dob"
                      value={values.dob}
                      onChange={handleChange}
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="form3Example9">
                      DOB
                    </label>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="number"
                      id="pincode"
                      value={values.pincode}
                      onChange={handleChange}
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="form3Example90">
                      Pincode
                    </label>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="course"
                      value={values.course}
                      onChange={handleChange}
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="form3Example99">
                      Course
                    </label>
                  </div>
                  
                  <div className="d-flex justify-content-end pt-3">
                    <button typesubmit="button" className="btn btn-light btn-lg">
                      Reset all
                    </button>
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

export default Register;