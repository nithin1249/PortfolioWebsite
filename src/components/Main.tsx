import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import myAvatar from '../assets/images/ProfilePic.png';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
            { /*<img src={myAvatar}  style={{ filter: 'grayscale(100%)' }} alt="Avatar" /> */}
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/nithin1249" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/nithin-kondabathini-925400397" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Nithin Kondabathini</h1>
          <p>Software Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/nithin1249" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/nithin-kondabathini-925400397" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;