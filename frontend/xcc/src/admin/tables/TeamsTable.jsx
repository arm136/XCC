import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";

function TeamsTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/teams")
      .then((res) => {
        if (res.data.Status === "success") {
          console.log(res.data.Result);
          setData(res.data.Result);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  // const handleDelete = (id) => {
  //   axios
  //     .delete("http://localhost:8081/deleteTeams/"+id)
  //     .then((res) => {
  //       if (res.data.Status === "success") {

  //         window.location.reload(true);
  //         // setData(res.data.Result);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8081/deleteUsers/${id}`)
      .then((res) => {
        if (res.status === 200 && res.data.Status === "deleted") {
          window.location.reload(true);
          // setData(res.data.Result);
        } else {
          alert("Error Deleting user");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Error deleting user");
      });
  };

  return (
    <React.Fragment>
      <Link
        to="/adminaddteams"
        className="btn btn-success"
        style={{ marginTop: "1rem" }}
      >
        Add+
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
                  <th>Title</th>
                  <th>Email</th>
                  <th>Mobile_Number</th>
                  <th>Linkdin</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {data.map((events, index) => {
                  return (
                    <tr key={index}>
                      <td>{events.id}</td>
                      <td>
                        {
                          <img
                            src={`http://localhost:8081/pdf/` + events.image}
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
                      <td>{events.name}</td>
                      <td>{events.title}</td>
                      <td>{events.email}</td>
                      <td>{events.mobile}</td>
                      <td>{events.linkdin}</td>
                      <td>
                        <Button
                          onClick={() => handleDelete(events.id)}
                          variant="contained"
                          size="small"
                          color="error"
                        >
                          Remove
                        </Button>
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

export default TeamsTable;
