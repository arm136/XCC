import './tmodel.css'
import Member1 from './team_img/Member1.jpg';
import Member2 from './team_img/Member2.jpg';
import Member3 from './team_img/Member3.png';

import LinkedInIcon from '@mui/icons-material/LinkedIn';

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';

const Tmodel = () => {
  return (

    <div id='model3'>
      <h1 className='model-title'>Team</h1>
      <div className="divider"></div>
      <div className="members">

        <div className="member">
          <img alt="img" width={150} height={150} src={Member1} />
          <div className="description">
            <h1>Aman Raj Murmu</h1>
            <h2>Web Developer</h2>
            <p>
              Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet consectet.
            </p>
            <div className="social-media">
              <a href="#"><MailOutlineIcon /></a>
              <a href="#"><LinkedInIcon /></a>
              <a href='#'><PhoneOutlinedIcon /></a>
            </div>
          </div>
        </div>

        <div className="member">
          <img alt="img" width={150} height={150} src={Member2} />
          <div className="description">
            <h1>Rohit Kumar</h1>
            <h2>Web Developer</h2>
            <p>
              Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet consectet.
            </p>
            <div className="social-media">
              <a href="#"><MailOutlineIcon /></a>
              <a href="#"><LinkedInIcon /></a>
              <a href='#'><PhoneOutlinedIcon /></a>
            </div>
          </div>
        </div>

        <div className="member">
          <img alt="img" width={150} height={150} src={Member3} />
          <div className="description">
            <h1>Khaled MAHER</h1>
            <h2>CEO</h2>
            <p>
              Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet consectet.
            </p>
            <div className="social-media">
              <a href="#"><MailOutlineIcon /></a>
              <a href="#"><LinkedInIcon /></a>
              <a href='#'><PhoneOutlinedIcon /></a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
export default Tmodel;