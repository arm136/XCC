import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from '@mui/material/Button';
function ResourcesTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/aresources")
      .then((res) => {
        if (res.data.Status === "success") {
          console.log(res.data.Result);
          setData(res.data.Result);
        } else{
          console.log("else resouces error");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  // const handleDelete = (id => {
  //   axios.delete('http://localhost:8081/deleteResources/'+id)
  //   .then((res) => {
  //     if (res.data.Status === "success") {
  //       window.location.reload(true);
  //       // setData(res.data.Result);
  //     } 
  //   })
  //   .catch((err) => console.log(err));
  // })

  const handleDelete = ( id => {
    axios.delete('http://localhost:8081/deleteResources/'+id)
    .then((res) => {
      if(res)
    })
  } )

  const openPDF = (id) => {
    window.open(`http://localhost:8081/resources/${id}`, '_blank');
  };

  return (
    <React.Fragment>
      <Link
        to="/adminaddresources"
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
                  <th>Title</th>
                  <th>Pdf</th>
                  <th>Action</th>
                  <th>open</th>
                </tr>
              </thead>
              <tbody>
                {data.map((resources, index) => {
                  return (
                    <tr key={index}>
                      <td>{resources.id}</td>
                      <td>{resources.title}</td>
                      <td>
                        {
                          resources.file.data
                          // <a href={`http://localhost:8081/pdf/`+resources.file.data} target="blank">pdf</a>
                        }
                      </td>
                      <td>
                      <Button onClick={(event) => handleDelete(resources.id)} variant="contained" size="small" color="error">Remove</Button>
                      </td>
                      <td>
                        <Button onClick={()=> openPDF(resources.id)}>Open</Button>
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

export default ResourcesTable;
