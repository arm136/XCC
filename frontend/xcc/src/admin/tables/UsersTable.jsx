import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";

function UsersTable() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/manageusers")
      .then((res) => {
        if (res.data.Status === "success") {
          console.log(res.data.Result);
          setData(res.data.Result);
        } 
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id => {
    axios.delete('http://localhost:8081/deleteUsers/'+id)
    .then((res) => {
      if (res.data.Status === "success") {
        window.location.reload(true);
        // setData(res.data.Result);
      } 
    })
    .catch((err) => console.log(err));

  })


  return (
    <React.Fragment>
      <Link
        to="/adminaddusers"
        className="btn btn-success"
        style={{ marginTop: "1rem" }}
      >
        Create User +
      </Link>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <table className="table table-boardered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Roll_Number</th>
                  <th>Mobile_Number</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
              {data.map((users, index) => {
                  return (
                    <tr key={index}>
                      <td>{users.id}</td>
                      <td>
                        {
                          <img
                            src={`http://localhost:8081/pdf/` + users.image}
                            alt=" "
                            className="w-20 h-20"
                            style={{
                              height: "40px",
                              width: "40px",
                              borderRadius: "50%",
                            }}
                          />
                        }
                      </td>
                      <td>{users.name}</td>
                      <td>{users.roll}</td>
                      <td>{users.mobile}</td>
                      <td>{users.email}</td>
                      <td>{users.password}</td>
                      <td>
                      {/* <Button onClick={event => handleUpdate(events.id)} variant="contained" size="small" color="error">Update</Button> */}
                      <Button onClick={event => handleDelete(users.id)} variant="contained" size="small" color="error">Remove</Button>
                      </td>
                    </tr>
                  );
                })}

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default UsersTable;
