import './tmodel.css'


import LinkedInIcon from '@mui/icons-material/LinkedIn';

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import { useEffect, useState } from 'react';
import axios from "axios";

const Tmodel = () => {


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

  return (

    <div id='model3'>
      <h1 className='model-title'>Team</h1>
      <div className="divider"></div>
      <div className="members">


        {data.map((events, index) => {
          return (
            <div className="member">
              <img alt="img" src={`http://localhost:8081/pdf/`+events.image} 
              style={{
                height: "150px",
                width: "150px",
              }}
              />
              <div className="description" key={index}>
                
                <h1>{events.name}</h1>
                <h2>{events.title}</h2>
                <h2 className='mobile'><PhoneOutlinedIcon /> +91 {events.mobile}</h2>
                <div className="social-media">
                  <a href={`mailto:${events.email}`}><MailOutlineIcon /></a>
                  <a href={`${events.linkdin}`}><LinkedInIcon /></a>
                </div>
              </div>
            </div>
          )
        })}



      </div>
    </div>
  );
}
export default Tmodel;