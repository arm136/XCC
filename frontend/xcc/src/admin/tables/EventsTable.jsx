import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";

function EventsTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/adevents")
      .then((res) => {
        if (res.data.Status === "success") {
          console.log(res.data.Result);
          setData(res.data.Result);
          
        } 
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8081/deleteEvents/" + id)
      .then((res) => {
        if (res.data.Status === "success") {
          window.location.reload(true);
          // setData(res.data.Result);
        } 
      })
      .catch((err) => console.log(err));
  };

  return (
    <React.Fragment>
      <Link
        to="/adminAddEvents"
        className="btn btn-success"
        style={{ marginTop: "1rem" }}
      >
        Add+
      </Link>
      <div className="container mt-300">
        <div className="row">
          <div className="col-md-12">
            <table className="table table-boardered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Event_Date</th>
                  <th>Event_Name</th>
                  <th>Contact_Number</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {data.map((events, index) => {
                  return (
                    <tr key={index}>
                      <td>{events.id}</td>
                      <td>{events.date}</td>
                      <td>{events.event}</td>
                      <td>{events.contact}</td>
                      <td>
                        <Button
                          onClick={(event) => handleDelete(events.id)}
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

export default EventsTable;
