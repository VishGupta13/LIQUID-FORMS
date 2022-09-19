import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import { Button} from "@mui/material";


const UserManager = () => {
    const [userArray, setUserArray] = useState([]);
  const [loading, setLoading] = useState(false);

  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [updateFormData, setUpdateFormData] = useState(null);

  const getDataFromBackend = async () => {
    setLoading(true);

    const response = await fetch("http://localhost:5000/user/getall");
    const data = await response.json();

    console.log(data);
    setUserArray(data);
    setLoading(false);
  };

  const deleteUser = async (id) => {
    console.log(id);

    const response = await fetch("http://localhost:5000/user/delete/" + id, {
      method: "Delete",
    });
    if (response.status === 200) {
      Swal.fire({
        icon: "success",
        title: "success",
        text: "User deleted successfully",
      });

      //get data from backend
      getDataFromBackend();
    }
  };

  const updateUser = (user) => {
    console.log(user);
    setUpdateFormData(user);
    setShowUpdateForm(true);
  };
  useEffect(() => {
    getDataFromBackend();
  }, []);

  const displayUser = () => {
    if (loading) {
      return (
        <div>
          <button class="btn btn-primary" type="button" disabled>
            <span
              class="spinner-grow spinner-grow-sm"
              role="status"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Loading...</span>
          </button>
          <button class="btn btn-primary" type="button" disabled>
            <span
              class="spinner-grow spinner-grow-sm"
              role="status"
              aria-hidden="true"
            ></span>
            Loading...
          </button>
        </div>
      );
    } else {
      return userArray.map(({ _id, firstname, lastname, email,password }) => (
        <tr key={_id}>
          <td>{firstname}</td>
          <td>{lastname}</td>
          <td>{email}</td>
          <td>{password}</td>
          <td>
            <Button
              className="btn btn-primary"
              onClick={(e) => updateUser({ _id, firstname, lastname, email,password })}
            >
              {" "}
              <i class="fas fa-pen-nib"></i>
            </Button>
          </td>
          <td>
            <Button className="btn btn-danger" onClick={(e) => deleteUser(_id)}>
              <i class="fas fa-trash"></i>{" "}
            </Button>
          </td>
        </tr>
      ));
    }
  };
  return (
    <div>
      <h1 className="text-center">User Manager</h1>
      <div className="row">
        <div className="col-md">
          <table className="table table-dark">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>{displayUser()}</tbody>
          </table>
        </div>
        {showUpdateForm ? (
          <div className="col-md">
            
          </div>
        ) : (
          " "
        )}
      </div>
    </div>
  );
};


export default UserManager;