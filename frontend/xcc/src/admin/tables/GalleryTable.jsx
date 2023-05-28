import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";

function GalleryTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/gallery")
      .then((res) => {
        if (res.data.Status === "success") {
          console.log("gallery if");
          console.log(res.data.Result);
          setData(res.data.Result);
        } else {
          console.log("else gallery error");
        }
      })
      .catch((err) => console.log(err));
  }, [setData]);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8081/deleteGallery/" + id)
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
        to="/adminaddgallery"
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
                  <th>Description</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {data.map((gallery, index) => {
                  return (
                    <tr key={index}>
                      <td>{gallery.id}</td>
                      <td>
                        {
                          <img
                            src={`http://localhost:8081/pdf/` + gallery.image}
                            alt=" "
                            className="w-20 h-20"
                            style={{
                              height: "80px",
                              width: "100px",
                            }}
                          />
                        }
                      </td>
                      <td>{gallery.description}</td>
                      <td>{gallery.date}</td>
                      <td>
                        <Button
                          onClick={(event) => handleDelete(gallery.id)}
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

export default GalleryTable;
